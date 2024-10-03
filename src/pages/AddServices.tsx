import React, { useState, useMemo } from "react";
import { Tree, Input } from "antd";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addLinkedServices } from "../features/services/servicesSlice";
import {
  convertServicesToTreeData,
  getServicesByIds,
} from "../utils/helperFunction";
import { TreeProps } from "antd";
import { Link } from "react-router-dom";
import TitleTable from "../components/Titles/TitleTable";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "../index.css";
import { useTranslation } from "react-i18next"; // Make sure this is imported

const AddServicesPage = () => {
  const { t } = useTranslation(); // Get the translation function
  const dispatch = useAppDispatch();
  const availableServices = useAppSelector(
    (state) => state.services.availableServices
  );
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onCheck: TreeProps["onCheck"] = (checkedKeysValue) => {
    let keys: React.Key[];

    if (Array.isArray(checkedKeysValue)) {
      keys = checkedKeysValue;
    } else {
      keys = checkedKeysValue.checked;
    }

    setCheckedKeys(keys);
  };

  const onExpand = (expandedKeysValue: React.Key[]) => {
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    setAutoExpandParent(true);
  };

  const handleAddServices = () => {
    // Convert checkedKeys to services
    const selectedServices = getServicesByIds(availableServices, checkedKeys);
    dispatch(addLinkedServices(selectedServices));
    setCheckedKeys([]);
  };

  const treeData = useMemo(() => {
    const data = convertServicesToTreeData(availableServices);
    if (searchValue) {
      return filterTreeData(data, searchValue);
    }
    return data;
  }, [availableServices, searchValue]);

  return (
    <div className="max-w-3xl mx-8 bg-white shadow-sm rounded-2xl p-4 relative max-sm:w-[95%] max-sm:mx-auto">
      <TitleTable title={t("add_new_services")} />
      <Input.Search
        placeholder={t("search_service")}
        onChange={onSearchChange}
        style={{ marginBottom: 8, maxWidth: "30rem" }}
      />
      <Tree
        checkable
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        treeData={treeData}
        className="bg-gray-200 w-full rounded-md p-4"
      />
      <button
        onClick={handleAddServices}
        className="absolute text-lg text-white font-bold end-0 max-md:text-sm max-md:px-4 max-md:top-7 bg-Main py-2 px-8 top-12 rounded-ss-3xl rounded-es-3xl"
      >
        {t("link")}
      </button>
      <Link
        to="/home"
        className="absolute end-28 max-md:top-8 top-12 max-md:end-16 max-md:text-lg text-gray-600"
      >
        <IoIosCloseCircleOutline className="w-[40px] h-[40px] max-md:w-[30px] max-md:h-[30px]" />
      </Link>
    </div>
  );
};

export default AddServicesPage;

function filterTreeData(treeData: any[], searchValue: string): any[] {
  const filteredData = [];
  for (const node of treeData) {
    const { title, children } = node;
    if (title.toLowerCase().includes(searchValue.toLowerCase())) {
      filteredData.push(node);
    } else if (children) {
      const filteredChildren = filterTreeData(children, searchValue);
      if (filteredChildren.length > 0) {
        filteredData.push({ ...node, children: filteredChildren });
      }
    }
  }
  return filteredData;
}
