import { BiMessageRoundedDots } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import logo from "../../assets/images/logo.png";
import IconHover from "../../components/common/IconHover";
import LanguageSwitcher from "../../components/common/LanguageSwitcher";
import LogoutButton from "../../components/common/LogoutButton";
import { t } from "i18next";
const Navbar = () => {
  return (
    <div className="flex items-center w-full justify-between mb-2">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" className="w-32 h-12" />
        <LanguageSwitcher />
      </div>
      <div className="flex items-center gap-3">
        <IconHover content={t("logout")}>
          <LogoutButton />
        </IconHover>
        <IconHover content={t("messages")}>
          <BiMessageRoundedDots />
        </IconHover>
        <IconHover content={t("notification")}>
          <div className="relative">
            <div className="absolute bg-Main w-2 h-2 rounded-full" />
            <MdNotifications className="text-Secondary" />
          </div>
        </IconHover>
        <IconHover content={t("admin")}>
          <FaUser />
        </IconHover>
      </div>
    </div>
  );
};

export default Navbar;
