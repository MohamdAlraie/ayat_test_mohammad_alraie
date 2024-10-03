import { useTranslation } from "react-i18next";
import { AiOutlineHome } from "react-icons/ai";
import { BsHospital } from "react-icons/bs";
import { FaRegHospital, FaUserNurse } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import {
  MdOutlineLocalOffer,
  MdOutlineScreenSearchDesktop,
} from "react-icons/md";
import { RiDonutChartFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import "./Sidebar.css";

function SideBar() {
  const { t, i18n } = useTranslation();
  const profile = useAppSelector((state) => state.auth.user);
  const sidebar = [
    { icon: AiOutlineHome, link: "/home", name: t("nav_home") },
    {
      icon: BsHospital,
      link: "/my-institutions",
      name: t("nav_myInstitutions"),
    },
    {
      icon: FaRegHospital,
      link: "/institutions",
      name: t("nav_institutions"),
    },
    { icon: GiMedicines, link: "/drugs", name: t("nav_drugs") },
    {
      icon: FaUserNurse,
      link: "/doctor-online",
      name: t("nav_doctorOnline"),
    },
    {
      icon: MdOutlineScreenSearchDesktop,
      link: "/search-drugs",
      name: t("nav_searchDrugs"),
    },
    { icon: MdOutlineLocalOffer, link: "/offers", name: t("nav_offers") },
  ];

  return (
    <div
 className={`navigation ${i18n.language} overflow-hidden bg-white w-72 max-md:w-14 rounded-2xl h-[70vh]`}
    >
      <ul className="w-full py-4">
        <li className="flex items-center gap-2 mb-5 md:px-4 max-md:px-2">
          <img src={profile?.image} alt="" className="w-9 h-9 rounded-full" />
          <span className="font-semibold text-lg max-md:hidden">
            {profile?.username}
          </span>
          <RiDonutChartFill className="text-Main w-8 h-8" />
        </li>
        {sidebar.map((e, i) => (
          <li key={i} className="mb-2 md:ps-4">
            <NavLink
              to={e.link}
      className={`flex items-center hover:bg-[#f5f6fa] gap-4 rounded ${i18n.language == "ar" && " -translate-x-6"}  hover:text-white py-2 px-4 rounded-l-full transition-all`}
            >
              <e.icon className="w-5 h-5 max-md:w-7 max-md:h-7" />
              <span className="ml-3 text-sm max-md:hidden">{e.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;