/* eslint-disable @typescript-eslint/no-unused-vars */

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useAppDispatch } from "../../app/hooks";
import GeneralButton from "../../components/Buttons/MainButton";
import { login } from "./authSlice";
import GeneralInput from "../../components/common/GeneralInput";

const loginSchema = z.object({
  PhoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const methods = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: LoginFormInputs) => {
    setLoading(true);
    try {
      await dispatch(
        login({ username: data.PhoneNumber, password: data.password })
      ).unwrap();
      navigate("/");
    } catch (err: any) {
      setLoginError(t("login_failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:w-[60%] max-w-md mx-auto p-4"
      >
        <GeneralInput
          type="text"
          name="PhoneNumber"
          label={t("phone_number")}
          placeholder={t("phone_number")}
          required={true}
          numericOnly={true}
        />
        <GeneralInput
          type="password"
          name="password"
          label={t("password")}
          placeholder={t("password")}
          required={true}
        />
        {loginError && (
          <p className="text-RedError mt-2 text-sm">{loginError}</p>
        )}
        <GeneralButton title={t("login")} type="submit" />
      </form>
    </FormProvider>
  );
};

export default LoginForm;
