import React from "react";
import { Service } from "../features/auth/types";
import ServiceNode from "./ServiceNode";
import { MdLinkOff } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import { t } from "i18next";

interface ServiceTreeViewProps {
  services: Service[];
  onRemoveService: (id: string) => void;
  editable?: boolean;
}
const ServiceTreeView: React.FC<ServiceTreeViewProps> = ({
  services,
  onRemoveService,
  editable = false,
}) => {
  return (
    <div className=" ">
      <Link to="add-services">
        <div className="ms-auto bg-Third w-fit p-2 rounded-t-lg text-Main text-xl">
          <MdLinkOff className="-rotate-45" />
        </div>
      </Link>
      <div className="flex items-center justify-between px-4 py-2 my-2 bg-Third text-Main rounded-lg">
        <p>Lorem ipsum</p>
        <p>{t("action")}</p>
      </div>
      {services.map((service) => (
        <ServiceNode
          key={service.id}
          service={service}
          onRemoveService={onRemoveService}
          editable={editable}
        />
      ))}
      <IoIosArrowDropdown size={35} className="text-Fourth mx-auto -mt-2" />
    </div>
  );
};

export default ServiceTreeView;
