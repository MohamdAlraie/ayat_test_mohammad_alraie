/* eslint-disable @typescript-eslint/no-unused-vars */
// src/features/auth/LoginForm.tsx

import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { login } from "./authSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiHide, BiShow } from "react-icons/bi";
import MainButton from "../../components/common/MainButton";

const loginSchema = z.object({
  usernameOrPhone: z.string().nonempty("login_fillFields"),
  password: z.string().nonempty("login_fillFields"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const Show = showPassword ? BiHide : BiShow;

  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    setLoading(true);
    try {
      await dispatch(
        login({ username: data.usernameOrPhone, password: data.password })
      ).unwrap();
      navigate("/home");
    } catch (err: any) {
      setLoginError(t("login_failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="sm:w-[60%] max-w-md mx-auto p-4 text-"
    >
      <div>
        <label
          className={`relative flex items-center gap-2 px-3 bg-white border-[2px] ${errors.usernameOrPhone && "border-Red"} rounded-lg shadow-lg`}
        >
          <FaUser size={17} className="text-Main" />
          <input
            type="text"
            {...register("usernameOrPhone")}
            placeholder={t("login_username")}
            className="w-full py-[0.6rem] focus:outline-none"
          />
          {errors.usernameOrPhone && (
            <p className="text-Red mt-1 text-sm absolute -top-[0.4rem] start-7">
              {t(errors.usernameOrPhone.message)}
            </p>
          )}
        </label>
      </div>
      <div className="mt-4">
        <label
          className={`relative flex items-center gap-2 px-3 bg-white border-[2px] ${errors.password && "border-Red"} rounded-lg shadow-lg`}
        >
          <RiLockPasswordFill size={17} className="text-Main" />
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            placeholder={t("login_password")}
            className="w-full py-[0.6rem] focus:outline-none"
          />
          <div className="absolute w-8 h-3 end-3 top-3 cursor-pointer text-gray-500">
            <Show onClick={() => setShowPassword(!showPassword)} size={22} />
          </div>
          {errors.password && (
            <p className="text-Red mt-1 text-sm absolute -top-[0.4rem] start-7">
              {t(errors.password.message)}
            </p>
          )}
        </label>
      </div>
      {loginError && <p className="text-Red text-sm mt-2">{loginError}</p>}
      <div className="flex items-center justify-between gap-2 text-gray-700 my-3">
        <label className="flex items-center gap-1">
          <input type="checkbox" className="w-4 h-4" />
          {t("remember_me")}
        </label>
        <p>{t("forget_password")}</p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <MainButton title={t("register")} />
        <MainButton title={t("login")} type="submit" isLoading={loading} />
      </div>
    </form>
  );
};

export default LoginForm;
