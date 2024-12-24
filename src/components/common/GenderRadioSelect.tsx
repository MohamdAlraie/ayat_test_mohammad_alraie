// src/components/GenderRadioSelect.tsx

import React from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import male from "../../assets/images/icons/male.svg";
import female from "../../assets/images/icons/female.svg";

interface GenderSelectProps {
  name: string;
  required?: boolean;
  readOnly?: boolean;
  className?: string;
}

const GenderRadioSelect: React.FC<GenderSelectProps> = ({
  name,
  required,
  readOnly = false,
  className,
}) => {
  const { t } = useTranslation();
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedGender = watch(name, undefined);

  const handleGenderChange = (gender: string) => {
    if (!readOnly) {
      setValue(name, gender);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex w-full max-w-md bg-lite p-1 border rounded-full my-1">
        <button
          type="button"
          className={`flex items-center justify-center gap-2 flex-1 rounded-full px-3 py-2 font-semibold ${
            selectedGender === "Male"
              ? "bg-[#E0FBFF] font-semibold text-[#6EC3E4] border-2 border-[#6EC3E4]"
              : "text-silver"
          }`}
          onClick={() => handleGenderChange("Male")}
        >
          {t("male")}
          <img src={male} alt="male" />
        </button>
        <button
          type="button"
          className={`flex items-center justify-center gap-2 flex-1 rounded-full px-3 py-2 font-semibold ${
            selectedGender === "Female"
              ? "bg-purple-100 font-semibold text-[#D46EE4] border-2 border-[#D46EE4]"
              : "text-silver"
          }`}
          onClick={() => handleGenderChange("Female")}
        >
          {t("female")}
          <img src={female} alt="female" />
        </button>
      </div>
      <input type="hidden" {...register(name, { required })} />
      {errors[name] && (
        <p className="mt-1 text-xs text-RedError">{`${errors[name]?.message}`}</p>
      )}
    </div>
  );
};

export default GenderRadioSelect;
