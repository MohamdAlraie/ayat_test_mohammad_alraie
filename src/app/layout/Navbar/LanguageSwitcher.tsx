import i18next from "i18next";
import { useClose } from "../../hooks";
import saudiFlags from "../../../assets/images/icons/saudiFlags.svg";

const LanguageSwitcher = () => {
  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
  };
  const { isOpen, setIsOpen, mouseRef, reverseFunction } = useClose();
  return (
    <div ref={mouseRef} className="relative" onClick={reverseFunction}>
      <div className="iconWrapper cursor-pointer">
        <img src={saudiFlags} alt="saudiFlags" className="" />
      </div>
      <div
        className={`absolute end-0 mt-2 w-32 bg-white rounded shadow-lg text-sm transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p
          onClick={() => {
            changeLanguage("en");
            setIsOpen(false);
          }}
          className="p-2 hover:bg-gray-100 cursor-pointer"
        >
          English
        </p>
        <p
          onClick={() => {
            changeLanguage("ar");
            setIsOpen(false);
          }}
          className="p-2 hover:bg-gray-100 cursor-pointer"
        >
          العربية
        </p>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
