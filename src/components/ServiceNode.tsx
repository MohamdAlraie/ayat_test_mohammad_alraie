import React, { useState } from "react";
import { MdCheck, MdClose, MdEdit, MdLinkOff } from "react-icons/md";

import { RiArrowDownSLine } from "react-icons/ri";
import { useAppDispatch } from "../app/hooks";
import { Service } from "../features/auth/types";
import { editLinkedServiceName } from "../features/services/servicesSlice";

interface ServiceNodeProps {
  service: Service;
  onRemoveService: (id: string) => void;
  editable?: boolean;
}

const ServiceNode: React.FC<ServiceNodeProps> = ({
  service,
  onRemoveService,
  editable,
}) => {
  const dispatch = useAppDispatch();
  const [expanded, setExpanded] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(service.name);

  const hasChildren =
    Array.isArray(service.children) && service.children.length > 0;

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleRemove = () => {
    if (hasChildren) {
      if (
        window.confirm(
          "This service has child services. Do you want to remove all of them?"
        )
      ) {
        onRemoveService(service.id);
      }
    } else {
      onRemoveService(service.id);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    dispatch(editLinkedServiceName({ id: service.id, newName }));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setNewName(service.name);
    setIsEditing(false);
  };

  return (
    <div className="w-full">
      <div
        className={`flex justify-between items-center px-4 py-2 bg-blue-50 rounded-md ${
          expanded ? "mb-2" : "mb-1"
        }`}
      >
        <div className="flex items-center space-x-2">
          {hasChildren && (
            <button onClick={toggleExpand} className="text-gray-500">
              {expanded ? (
                <RiArrowDownSLine className="rotate-180 text-Main" size={20} />
              ) : (
                <RiArrowDownSLine size={20} />
              )}
            </button>
          )}

          {/* Service Name or Edit Field */}
          {isEditing ? (
            <div className="flex items-center space-x-2">
              <input
                className="border px-2 py-1 rounded-md w-48"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <button onClick={handleSaveEdit} className="text-green-500">
                <MdCheck size={20} />
              </button>
              <button onClick={handleCancelEdit} className="text-red-500">
                <MdClose size={20} />
              </button>
            </div>
          ) : (
            <span className="font-medium text-gray-700">{service.name}</span>
          )}
        </div>

        {editable && (
          <div className="flex space-x-2 text-Fourth">
            <button onClick={handleEdit}>
              <MdEdit size={20} />
            </button>
            <button onClick={handleRemove}>
              <MdLinkOff className="-rotate-45" />
            </button>
          </div>
        )}
      </div>

      {hasChildren && expanded && (
        <div className="ml-8 border-l-2 border-blue-100 pl-4">
          {service.children!.map((child) => (
            <ServiceNode
              key={child.id}
              service={child}
              onRemoveService={onRemoveService}
              editable={editable}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceNode;
