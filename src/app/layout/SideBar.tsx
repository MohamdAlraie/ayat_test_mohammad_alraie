import { useTranslation } from "react-i18next";
import { NavLink, useMatch } from "react-router-dom";
import ic_dome from "../../assets/images/icons/logo.svg";
import Home from "../../assets/images/icons/home.svg";
import Drivers from "../../assets/images/icons/Drivers.svg";
import Admins from "../../assets/images/icons/Admins.svg";
import Users from "../../assets/images/icons/Users.svg";
import Trips from "../../assets/images/icons/Trips.svg";
import LastTrips from "../../assets/images/icons/LastTrips.svg";
import Buses from "../../assets/images/icons/Buses.svg";
import Settings from "../../assets/images/icons/Setting.svg";
import { t } from "i18next";

// Sidebar component
const Sidebar: React.FC = () => {
  const sidebar = [
    {
      to: "/home",
      icon: Home,
      label: "home",
      title: "overview",
    },
    {
      to: "/drivers",
      icon: Drivers,
      label: "drivers",
      title: "users",
    },
    {
      to: "/admins",
      icon: Admins,
      label: "admins",
    },
    {
      to: "/users",
      icon: Users,
      label: "users",
    },
    {
      to: "/trips",
      icon: Trips,
      label: "trips",
      title: "management",
    },
    {
      to: "/last_trips",
      icon: LastTrips,
      label: "last_trips",
    },
    {
      to: "/buses",
      icon: Buses,
      label: "buses",
    },
    {
      to: "/settings",
      icon: Settings,
      label: "settings",
    },
  ];

  return (
    <nav className="fixed bottom-0 z-10 m-0 h-16 w-screen shrink-0 bg-Third text-silver md:static md:mx-0 md:block md:h-screen md:w-[240px] md:flex-col px-3">
      <img src={ic_dome} alt="Logo" className="mb-2 mt-8" />
      <div className="flex h-full w-full justify-between gap-1 max-md:items-center md:mt-4 md:flex-col md:justify-start">
        {sidebar.map((e, i) => (
          <div key={i}>
            {e.title && (
              <h2 className="text-DarkGray px-2 my-3 uppercase">
                {t(e.title)}
              </h2>
            )}
            <SidebarLink to={e.to} icon={e.icon} label={t(e.label)} />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;

interface SidebarLinkProps {
  to: string;
  icon: string;
  label: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon, label }) => {
  const { t } = useTranslation();
  const match = useMatch({
    path: to,
    end: true,
  });
  const isActive = !!match;

  return (
    <NavLink
      to={to}
      className={`flex flex-col items-center gap-3 md:flex-row p-2 rounded-full hover:text-Main hover:bg-Secondary/20 transition-all duration-400 ${
        isActive ? "text-Main bg-Secondary/20" : "text-DarkGray"
      }`}
    >
      <img
        className="h-6"
        style={{
          filter: isActive
            ? "invert(40%) sepia(100%) saturate(500%) hue-rotate(480deg)"
            : "none",
        }}
        alt={label}
        src={icon}
      />
      <span>{t(label)}</span>
    </NavLink>
  );
};
