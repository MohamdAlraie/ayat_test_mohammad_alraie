import { t } from "i18next";
import { Link } from "react-router-dom";
import arrows from "../../assets/images/icons/twoArrows.svg";

function TitleSeeAll({ title, rout }: { title: string; rout: string }) {
  return (
    <div className={"w-full flex items-center justify-between my-2"}>
      <h2 className={`text-lg font-semibold`}>{title}</h2>
      <Link to={rout} className="flex items-center gap-1">
        <p className="text-Main">{t("see_all")}</p>
        <img src={arrows} alt="" className="rtl:rotate-180" />
      </Link>
    </div>
  );
}
export default TitleSeeAll;
