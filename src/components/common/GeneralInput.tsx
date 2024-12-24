import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Ic_closed_eye from "../../assets/images/icons/closedEye.svg";
import Ic_eye from "../../assets/images/icons/eye.svg";

interface GeneralInputProps {
  type?: "text" | "password" | "textarea" | "number" | "email";
  name: string;
  label?: string;
  placeholder?: string;
  registerOptions?: any;
  required?: boolean;
  numericOnly?: boolean;
  englishOnly?: boolean;
  arabicOnly?: boolean;
  isConditionMet?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  charactersOnly?: boolean;
  showButton?: string;
  maxLength?: number;
  minLength?: number;
  customStyleClasses?: string;
  oneLanguageOnly?: boolean;
  displayInternalLabel?: boolean;
  onButtonClick?: () => void;
  onKeyDown?: (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const GeneralInput: React.FC<GeneralInputProps> = ({
  type = "text",
  name,
  label,
  placeholder,
  registerOptions,
  required = false,
  numericOnly = false,
  englishOnly = false,
  arabicOnly = false,
  charactersOnly = false,
  isConditionMet = false,
  readOnly = false,
  disabled = false,
  showButton = "",
  maxLength,
  minLength,
  onButtonClick,
  onKeyDown,
  onChange,
  customStyleClasses,
  displayInternalLabel = true,
  oneLanguageOnly = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
    setValue,
    watch,
    setError,
    clearErrors,
  } = useFormContext();

  const { t } = useTranslation();
  const inputValue = watch(name);

  const isEnglishOnly = type === "password" || englishOnly;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { value } = e.target;

    let invalidCharacter = false;
    let regex: RegExp | null = null;
    let replacementRegex: RegExp | null = null;
    let errorMessageKey = "";

    if (oneLanguageOnly) {
      const hasEnglish = /[a-zA-Z]/.test(value);
      const hasArabic = /[\u0600-\u06FF]/.test(value);

      if (hasEnglish) {
        regex = /[^a-zA-Z\s]/;
        replacementRegex = /[^a-zA-Z\s]/g;
        errorMessageKey = "only_english_characters_allowed";
      } else if (hasArabic) {
        regex = /[^\u0600-\u06FF\s]/;
        replacementRegex = /[^\u0600-\u06FF\s]/g;
        errorMessageKey = "only_arabic_characters_allowed";
      }
    } else {
      if (numericOnly) {
        regex = /[^0-9]/;
        replacementRegex = /[^0-9]/g;
        errorMessageKey = "only_numbers_allowed";
      } else if (charactersOnly) {
        if (arabicOnly) {
          regex = /[^\u0600-\u06FF\s]/;
          replacementRegex = /[^\u0600-\u06FF\s]/g;
          errorMessageKey = "only_arabic_characters_allowed";
        } else if (isEnglishOnly) {
          regex = /[^a-zA-Z\s]/;
          replacementRegex = /[^a-zA-Z\s]/g;
          errorMessageKey = "only_english_characters_allowed";
        } else {
          regex = /[^a-zA-Z\u0600-\u06FF\s]/;
          replacementRegex = /[^a-zA-Z\u0600-\u06FF\s]/g;
          errorMessageKey = "only_characters_allowed";
        }
      } else if (isEnglishOnly) {
        regex = /[^a-zA-Z0-9\s.,!?'"@#%&*()_=+[\]{};:/\\|<>~$^]/;
        replacementRegex = /[^a-zA-Z0-9\s.,!?'"@#%&*()_=+[\]{};:/\\|<>~$^]/g;
        errorMessageKey = "only_english_characters_allowed";
      } else if (arabicOnly) {
        regex = /[^\u0600-\u06FF0-9\s]/;
        replacementRegex = /[^\u0600-\u06FF0-9\s]/g;
        errorMessageKey = "only_arabic_characters_allowed";
      }
    }

    if (regex && replacementRegex) {
      if (regex.test(value)) {
        invalidCharacter = true;
      }
      value = value.replace(replacementRegex, "");
    }

    setValue(name, value);

    if (invalidCharacter) {
      setError(name, {
        type: "invalidCharacter",
        message: t(errorMessageKey),
      });
    } else {
      clearErrors(name);
    }

    if (onChange) {
      onChange(e);
    }
  };

  const getPlaceholderWithAsterisk = (
    placeholderText: string,
    isRequired: boolean
  ) => {
    return isRequired ? `${placeholderText} *` : placeholderText;
  };

  const error = errors[name];
  const errorMessage =
    error && error.message
      ? typeof error.message === "string"
        ? error.message
        : String(error.message)
      : undefined;
  const shouldDisplayErrorInline = error?.type !== "invalidCharacter";

  return (
    <div className="relative w-full px-[2px]">
      {displayInternalLabel && inputValue && (
        <label
          htmlFor={name}
          className={`absolute -top-0.5 start-4 z-10 bg-white px-1 text-sm text-dark transition-all duration-200 ${
            inputValue
              ? "label-translated"
              : "label-default"
          }`}
        >
          {label}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          id={name}
          className={`${customStyleClasses} h-[110px] w-full appearance-none rounded-full bg-lite px-4 py-2 text-base text-dark placeholder-silver shadow-sm outline-none ${
            inputValue ? "border border-Mtext-Main" : "border-lite"
          }`}
          placeholder={getPlaceholderWithAsterisk(
            placeholder || "",
            required || false
          )}
          maxLength={maxLength ?? 250}
          minLength={minLength}
          {...register(name, {
            required,
            minLength: minLength
              ? {
                  value: minLength,
                  message: t("min_length_error", { count: minLength }),
                }
              : undefined,
            ...registerOptions,
          })}
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
          readOnly={readOnly}
          disabled={disabled}
        />
      ) : (
        <div className={`relative`}>
          <input
            type={type === "password" && !showPassword ? "password" : "text"}
            id={name}
            className={`${customStyleClasses} w-full max-w-lg appearance-none border rounded-full min-w-72 bg-lite px-4 py-2 text-base text-dark placeholder-silver outline-none ${
              inputValue ? "border border-Mtext-Main" : "border-lite"
            }`}
            placeholder={getPlaceholderWithAsterisk(
              placeholder || "",
              required || false
            )}
            maxLength={maxLength ?? 50}
            minLength={minLength}
            {...register(name, {
              required,
              minLength: minLength
                ? {
                    value: minLength,
                    message: t("min_length_error", { count: minLength }),
                  }
                : undefined,
              ...registerOptions,
            })}
            onChange={handleInputChange}
            onKeyDown={onKeyDown}
            readOnly={readOnly}
            disabled={disabled}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 end-3 flex items-center pe-3 text-sm leading-5"
            >
              {showPassword ? (
                <img src={Ic_eye} alt="eye" />
              ) : (
                <img src={Ic_closed_eye} alt="eye" />
              )}
            </button>
          )}
        </div>
      )}
      {showButton && (
        <button
          type="button"
          onClick={onButtonClick}
          className="absolute end-2 top-2 text-lg font-bold capitalize text-Main"
        >
          {showButton}
        </button>
      )}
      {errorMessage && shouldDisplayErrorInline && (
        <p
          className={`mt-1 text-xs ${
            isConditionMet ? "text-green-600" : "text-RedError"
          }`}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default GeneralInput;
