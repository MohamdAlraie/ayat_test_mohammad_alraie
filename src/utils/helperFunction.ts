// src/utils/helperFunction.ts

import { Service } from "../features/auth/types";


export function mergeServices(
  existing: Service[],
  newServices: Service[]
): Service[] {
  const mergedServices: Service[] = [...existing];

  newServices.forEach((newService) => {
    const index = mergedServices.findIndex(
      (service) => service.id === newService.id
    );

    if (index === -1) {
      mergedServices.push(newService);
    } else {
      const existingService = mergedServices[index];
      const mergedChildren = mergeServices(
        existingService.children || [],
        newService.children || []
      );
      mergedServices[index] = {
        ...existingService,
        children: mergedChildren.length > 0 ? mergedChildren : undefined,
      };
    }
  });

  return mergedServices;
}

export function removeServiceById(services: Service[], id: string): Service[] {
  return services
    .filter((service) => service.id !== id)
    .map((service) => ({
      ...service,
      children: service.children
        ? removeServiceById(service.children, id)
        : undefined,
    }))
    .filter((service) =>
      service.children ? service.children.length > 0 : true
    );
}

export function getServicesByIds(
  services: Service[],
  ids: React.Key[]
): Service[] {
  const result: Service[] = [];

  services.forEach((service) => {
    if (ids.includes(service.id)) {
      result.push(service);
    } else if (service.children) {
      const childServices = getServicesByIds(service.children, ids);
      if (childServices.length > 0) {
        result.push({
          ...service,
          children: childServices,
        });
      }
    }
  });

  return result;
}

export function convertServicesToTreeData(services: Service[]): any[] {
  return services.map((service) => ({
    title: service.name,
    key: service.id,
    children: service.children
      ? convertServicesToTreeData(service.children)
      : undefined,
  }));
}
