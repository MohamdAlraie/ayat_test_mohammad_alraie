// src/features/services/servicesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { removeServiceById, mergeServices } from "../../utils/helperFunction";

import { servicesData } from "../../api/data";
import { Service } from "../auth/types";

interface ServiceState {
  availableServices: Service[];
  linkedServices: Service[];
}

const initialState: ServiceState = {
  availableServices: JSON.parse(
    localStorage.getItem("availableServices") || JSON.stringify(servicesData)
  ),
  linkedServices: JSON.parse(localStorage.getItem("linkedServices") || "[]"),
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    addLinkedServices(state, action: PayloadAction<Service[]>) {
      // Remove added services from availableServices
      state.availableServices = removeServicesByIds(
        state.availableServices,
        action.payload.map((s) => s.id)
      );
      // Add services to linkedServices
      state.linkedServices = mergeServices(
        state.linkedServices,
        action.payload
      );
      // Persist state
      localStorage.setItem(
        "availableServices",
        JSON.stringify(state.availableServices)
      );
      localStorage.setItem(
        "linkedServices",
        JSON.stringify(state.linkedServices)
      );
    },
    removeLinkedService(state, action: PayloadAction<string>) {
      // Find the service to remove
      const serviceToRemove = findServiceById(
        state.linkedServices,
        action.payload
      );
      if (serviceToRemove) {
        // Remove service from linkedServices
        state.linkedServices = removeServiceById(
          state.linkedServices,
          action.payload
        );
        // Add service back to availableServices
        state.availableServices = mergeServices(state.availableServices, [
          serviceToRemove,
        ]);
        // Persist state
        localStorage.setItem(
          "availableServices",
          JSON.stringify(state.availableServices)
        );
        localStorage.setItem(
          "linkedServices",
          JSON.stringify(state.linkedServices)
        );
      }
    },
    editLinkedServiceName(
      state,
      action: PayloadAction<{ id: string; newName: string }>
    ) {
      const { id, newName } = action.payload;
      state.linkedServices = editServiceNameById(
        state.linkedServices,
        id,
        newName
      );
      // Persist state
      localStorage.setItem(
        "linkedServices",
        JSON.stringify(state.linkedServices)
      );
    },
  },
});

export const { addLinkedServices, removeLinkedService, editLinkedServiceName } =
  servicesSlice.actions;

export default servicesSlice.reducer;

// Helper functions
function removeServicesByIds(services: Service[], ids: string[]): Service[] {
  return services
    .filter((service) => !ids.includes(service.id))
    .map((service) => ({
      ...service,
      children: service.children
        ? removeServicesByIds(service.children, ids)
        : undefined,
    }))
    .filter((service) =>
      service.children ? service.children.length > 0 : true
    );
}

function findServiceById(services: Service[], id: string): Service | null {
  for (const service of services) {
    if (service.id === id) return service;
    if (service.children) {
      const found = findServiceById(service.children, id);
      if (found) return found;
    }
  }
  return null;
}

function editServiceNameById(
  services: Service[],
  id: string,
  newName: string
): Service[] {
  return services.map((service) => {
    if (service.id === id) {
      return { ...service, name: newName };
    } else if (service.children) {
      return {
        ...service,
        children: editServiceNameById(service.children, id, newName),
      };
    } else {
      return service;
    }
  });
}
