import {
  FaCamera,
  FaFacebookSquare,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdEdit, MdLanguage } from "react-icons/md";
import { useAppSelector } from "../app/hooks";
import TitleTable from "./Titles/TitleTable";
import { t } from "i18next";

function Profile() {
  const profile = useAppSelector((state) => state.auth.user);
  const ContactUsList = [
    { icon: FaPhoneAlt, title: "Lorem ipsum dolor sit" },
    { icon: MdLanguage, title: "Lorem ipsum dolor sit" },
    { icon: FaFacebookSquare, title: "Lorem ipsum dolor sit" },
    { icon: GrInstagram, title: "Lorem ipsum dolor sit" },
    { icon: FaLinkedin, title: "Lorem ipsum dolor sit" },
  ];
  return (
    <div className="w-[250px] max-lg:hidden h-fit rounded-2xl bg-white overflow-hidden mx-auto shadow-sm mt-2">
      <div className="relative">
        <img
          src={profile?.image}
          alt=""
          className="w-full h-[200px] object-fill rounded-xl"
        />
        <div className="bg-Main text-white py-3 px-4 rounded-ss-full rounded-es-full w-fit absolute bottom-7 end-0">
          <FaCamera />
        </div>
      </div>
      <div className="ps-2 bg-white my-7">
        <h2 className="text-Secondary font-semibold">{profile?.username}</h2>
        <p className="text-gray-300 w-[96%]">
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <TitleTable title={t("contact_us")} />
          <div className="bg-Main text-white py-3 px-4 rounded-ss-full rounded-es-full w-fit">
            <MdEdit />
          </div>
        </div>
        <ul className="my-4">
          {ContactUsList.map((e, i) => (
            <li key={i} className="flex items-center gap-4 my-1">
              <e.icon className="text-Main" size={20} />
              <p className="text-lg">{e.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Profile;
