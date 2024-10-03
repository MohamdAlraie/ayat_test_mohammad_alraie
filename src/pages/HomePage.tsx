// src/pages/HomePage.tsx
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { removeLinkedService } from "../features/services/servicesSlice";
import ServiceTreeView from "../components/ServiceTreeView";
import Profile from "../components/Profile";
import TitleTable from "../components/Titles/TitleTable";
import { FaRegBuilding, FaUser } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { GoChecklist } from "react-icons/go";
import RoutIcon from "../components/common/RoutIcon";
import TitlePage from "../components/Titles/TitlePage";
import { AiOutlineHome } from "react-icons/ai";
import MainWrap from "../components/common/MainWrap";
import ProductCard from "../components/common/ProductCard";
import { t } from "i18next";

const HomePage = () => {
  const linkedServices = useAppSelector(
    (state) => state.services.linkedServices
  );

  const dispatch = useAppDispatch();

  const handleRemoveService = (id: string) => {
    dispatch(removeLinkedService(id));
  };

  return (
    <div className="flex">
      <div className="lg:w-[70%] md:w-[90%] w-[95%] mx-auto">
        <TitlePage
          index={0}
          Icon={AiOutlineHome}
          title={["home", "profile", "services"]}
        />
        <div className="flex items-center justify-center flex-wrap gap-4 mb-6">
          <RoutIcon Icon={FaUser} />
          <div className="text-gray-400 max-sm:hidden">|</div>
          <RoutIcon Icon={FaRegBuilding} />
          <div className="text-gray-400 max-sm:hidden">|</div>
          <RoutIcon isActive={true} Icon={GiReceiveMoney} />
          <div className="text-gray-400 max-sm:hidden">|</div>
          <RoutIcon Icon={GoChecklist} />
        </div>
        <MainWrap title={t("linked_services")}>
          <ServiceTreeView
            services={linkedServices}
            onRemoveService={handleRemoveService}
            editable
          />
        </MainWrap>
        <MainWrap title={t("products")}>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {[
              {
                description: "lorem lorem lorem lorem lorem ",
                available: "available",
              },
              {
                description: "lorem lorem lorem lorem lorem ",
                available: "available",
              },
              {
                description: "lorem lorem lorem lorem lorem ",
                available: "available",
              },
              {
                description: "lorem lorem lorem lorem lorem ",
                available: "available",
              },
            ].map((e, i) => (
              <ProductCard
                key={i}
                available={e.available}
                description={e.description}
              />
            ))}
          </div>
        </MainWrap>
      </div>
      <Profile />
    </div>
  );
};

export default HomePage;
