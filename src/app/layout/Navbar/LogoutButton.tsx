import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { logout } from "../../../features/auth/authSlice";
import Modal from "../../../components/common/Modal";
import logoutIcon from "../../../assets/images/icons/logout.svg";
import MainButton from "../../../components/Buttons/MainButton";
import { t } from "i18next";

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [logoutModal, setLogoutModal] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  return (
    <div>
      <Modal
        isOpen={logoutModal}
        onClose={() => setLogoutModal(false)}
        className="!w-[340px]"
      >
        <div className="text-center">
          <div className="bg-pink w-[98px] h-[98px] rounded-3xl mx-auto flex items-center justify-center">
            <img src={logoutIcon} alt="logout" className="w-[40px] h-[40px]" />
          </div>
          <p className="text-xl my-2">{t("logout")}</p>
          <p className="text-silver">{t("are_you_sure_you_want_to_log_out")}</p>
          <MainButton title={t("yes")} color="red" onClick={handleLogout} />
          <MainButton title={t("cancel")} color="gray" onClick={handleLogout} />
        </div>
      </Modal>
      <div
        className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 transition-all duration-300 py-1 px-2 rounded-lg"
        onClick={() => setLogoutModal(true)}
      >
        <p className="text-[#FF2C2C]">Logout</p>
        <img src={logoutIcon} alt="" />
      </div>
    </div>
  );
};

export default LogoutButton;
