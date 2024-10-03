import LoginForm from "../features/auth/LoginForm";
import loginImage from "../assets/images/login.jpg";
import LanguageSwitcher from "../components/common/LanguageSwitcher";
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
        className="md:w-1/2 h-[100vh] max-md:fixed w-full object-cover"
      />
      <div className="min-h-screen flex items-center justify-center flex-col w-1/2 max-md:w-full p-4 z-10 max-md:bg-white/70">
        <div className="text-center mb-8">
          <h1 className="uppercase tracking-[4px] p-2 text-blue-500 text-4xl">
            domecare
          </h1>
          <p className="text-Secondary text-lg">{t("welcome_back")}</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
