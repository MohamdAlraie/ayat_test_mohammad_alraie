import { useParams } from "react-router-dom";
import TripCard from "../../components/Cards/TripCard";
import { Col, Row } from "../../components/GridSystem";
import calender from "../../assets/images/icons/calendar.svg";
import arrow from "../../assets/images/icons/arrow.svg";

function Trips() {
  const { tripName } = useParams();
  return (
    <div className="box min-h-full overflow-y-auto">
      <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
        <h1 className="font-bold text-xl first-letter:uppercase">{tripName}</h1>
        <div className="flex items-center gap-1 text-sm">
          <img src={calender} alt="calender" />
          <p>Today</p>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <div className="border border-dashed my-4" />
      <Row>
        {Array.from({ length: 12 }).map((_, index) => (
          <Col lg={3} md={4} xs={6}>
            <TripCard rout={`/home/trip_details/${index}`} isBus={false} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Trips;
