import LoginForm from "../features/auth/LoginForm";
import loginImage from "../../src/assets/images/Banner.png";
import LanguageSwitcher from "../app/layout/Navbar/LanguageSwitcher";
import { t } from "i18next";

const LoginPage = () => {
  return (
    <div className="flex items-center max-md:flex-col-reverse">
      <div className="fixed start-4 top-4">
        <LanguageSwitcher />
      </div>
      <img
        src={loginImage}
        alt=""
        className="md:w-2/3 md:h-[90vh] ms-4 rounded-3xl max-md:fixed w-full"
      />
      <div className="min-h-screen flex items-center justify-center flex-col w-1/3 max-md:w-full p-4 z-10 max-md:bg-white/70">
        <h1 className="font-bold text-lg">{t("login_to_musaffer")}</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
