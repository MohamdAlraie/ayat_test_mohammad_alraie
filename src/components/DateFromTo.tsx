import { t } from "i18next";
import bus from "../assets/images/icons/bus.svg";
interface DateFromToProps {
  isBus?: boolean;
}

const DateFromTo = ({ isBus = true }: DateFromToProps) => {
  return (
    <div>
      <h2 className="text-center text-[14px] font-bold">Tuesday 14/05</h2>
      <div className="flex items-center justify-center gap-2 my-2">
        <div className="text-[12px] text-start">
          <h2>{t("from")}</h2>
          <p className="text-[16px] font-[600]">06:30 AM</p>
          <p>Damascus</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-[#A9B2BC] flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#A9B2BC]" /> - - -
          </div>
          {isBus ? (
            <img src={bus} alt="bus" />
          ) : (
            <span className="text-[14px] text-[#0F1D24] border border-[#8F9BBA] rounded-full px-3 py-1">
              4:30
            </span>
          )}
          <div className="text-[#A9B2BC] flex items-center gap-1">
            - - - <div className="w-2 h-2 rounded-full bg-[#A9B2BC]" />
          </div>
        </div>
        <div className="text-[12px] text-end">
          <h2>{t("to")}</h2>
          <p className="text-[16px] font-[600]">11:05 AM</p>
          <p>Aleppo</p>
        </div>
      </div>
    </div>
  );
};

export default DateFromTo;
