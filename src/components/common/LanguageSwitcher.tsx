import i18next from "i18next";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { useClose } from "../../app/hooks";

const LanguageSwitcher = () => {
  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
  };
  const { isOpen, mouseRef, setIsOpen, reverseFunction } = useClose();
  return (
    <div ref={mouseRef} className="relative">
      <div
        onClick={reverseFunction}
        className="flex items-center cursor-pointer text-gray-600"
      >
        <MdLanguage size={25} />
        <IoMdArrowDropdown
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`absolute mt-2 w-32 bg-white rounded shadow-lg text-sm transition-all duration-500 ease-in-out overflow-hidden ${
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
