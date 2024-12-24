import { useNavigate } from "react-router-dom";
import SecondaryBtn from "../Buttons/SecondaryBtn";
import DateFromTo from "../DateFromTo";
interface TripCardProps {
  isBus?: boolean;
  rout: string;
}

const TripCard = ({ isBus = true, rout }: TripCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden cursor-pointer" onClick={() => navigate(rout)}>
      <div className="border rounded-2xl p-2 w-[300px]">
        {/* <div className="flex items-center gap-2">
          <SecondaryBtn title="Tuesday 14/05" />
          <SecondaryBtn title="4:30 h" />
        </div> */}
        <DateFromTo isBus={isBus} />
        <div className="flex items-center">
          <div className="border-r w-[24px] h-[24px] -translate-x-6 bg-white rounded-full" />
          <div className="border border-dashed w-full my-2" />
          <div className="border-l w-[24px] h-[24px] translate-x-6 bg-white rounded-full" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <SecondaryBtn color="green" title="12 Seat available" />
          <SecondaryBtn color="yellow" title="12 Seat unpaid" />
        </div>
      </div>
    </div>
  );
};

export default TripCard;
