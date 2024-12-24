import { useState, useEffect, useRef } from "react";
import arrow from "../../../assets/images/icons/arrow.svg";
import notifications from "../../../assets/images/icons/notifications.svg";
import userProfile from "../../../assets/images/icons/user.svg";
import user from "../../../assets/images/icons/userProfile.svg";
import Breadcrumb from "./breadcrumb";
import LanguageSwitcher from "./LanguageSwitcher";
import LogoutButton from "./LogoutButton";
import { t } from "i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center w-full justify-between mb-2">
      <Breadcrumb separator="»" />
      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <div className="iconWrapper">
          <img src={notifications} alt="" />
        </div>
        <div className="relative" ref={dropdownRef}>
          <div
            className="iconWrapper gap-2 !w-[180px]"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <img src={user} alt="" className="h-[40px] w-[40px] rounded-full" />
            <p>mohammad</p>
            <img src={arrow} alt="" />
          </div>
          <div
            className={`absolute end-0 mt-2 bg-white shadow-md rounded-lg py-1 px-2 w-[180px] transition-all duration-500 ease-in-out overflow-hidden ${
              isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 transition-all duration-300 p-1 rounded-lg">
              <p>{t("my_profile")}</p>
              <img src={userProfile} alt="" />
            </div>
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
