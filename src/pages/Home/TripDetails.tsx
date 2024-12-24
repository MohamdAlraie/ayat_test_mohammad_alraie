import { t } from "i18next";
import { useState } from "react";
import cancel from "../../assets/images/icons/cancel.svg";
import download from "../../assets/images/icons/download.svg";
import noData from "../../assets/images/icons/noData.svg";
import paid from "../../assets/images/icons/paid.svg";
import user from "../../assets/images/icons/userProfile.svg";
import FilterBtn from "../../components/Buttons/FilterBtn";
import MainButton from "../../components/Buttons/MainButton";
import SecondaryBtn from "../../components/Buttons/SecondaryBtn";
import Modal from "../../components/common/Modal";
import Table from "../../components/common/Table";
import DateFromTo from "../../components/DateFromTo";
import { Col, Row } from "../../components/GridSystem";

function TripDetails() {
  const [openModal, setOpenModal] = useState(false);
  const colors = ["gray", "yellow", "blue"];
  const filterButtons = Array.from({ length: 44 }, (_, index) => ({
    title: (index + 1).toString(),
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
  const firstHalf = filterButtons.slice(0, 22);
  const secondHalf = filterButtons.slice(22); 

  const rows = [
    {
      User_Name: (
        <div className="flex items-center gap-2 text-black">
          <img src={user} alt="user" />
          <p>Najeeb Shbib</p>
        </div>
      ),
      Gender: "Male",
      Seat_Number: "10",
      Payment: <span className="text-yellow">unpaid</span>,
      PaymentStatus: "unpaid",
    },
    {
      User_Name: (
        <div className="flex items-center gap-2 text-black">
          <div className="bg-liteGreen w-[44px] h-[44px] flex items-center justify-center rounded-full">
            <img src={noData} alt="noData" />
          </div>
          <p>Najeeb Shbib</p>
        </div>
      ),
      Gender: "Male",
      Seat_Number: "10",
      Payment: (
        <div className="flex items-center gap-1">
          <img src={paid} alt="paid" />
          <span className="text-Main">paid</span>
        </div>
      ),
      PaymentStatus: "paid",
    },
  ];

  const headers = [
    { label: "User Name", key: "User_Name" },
    { label: "Gender", key: "Gender" },
    { label: "Seat Number", key: "Seat_Number" },
    { label: "Payment", key: "Payment" },
  ];

  const operations = [
    (row: any) => (
      <button
        className="flex items-center gap-1"
        type="button"
        onClick={() => alert(`Downloading for ${getUserName(row.User_Name)}`)}
      >
        <div className="bg-liteGreen w-[44px] h-[44px] flex items-center justify-center rounded-2xl">
          <img src={download} alt="download" />
        </div>
        <span>{t("download")}</span>
      </button>
    ),
    (row: any) => (
      <button
        className="flex items-center gap-1"
        type="button"
        onClick={() =>
          alert(`Marking as paid for ${getUserName(row.User_Name)}`)
        }
      >
        <div className="bg-liteGreen w-[44px] h-[44px] flex items-center justify-center rounded-2xl">
          <img src={paid} alt="paid" />
        </div>
        <span>{t("paid")}</span>
      </button>
    ),
    (row: any) => (
      <button
        className="flex items-center gap-1"
        type="button"
        onClick={() => setOpenModal(true)}
      >
        <div className="bg-pink w-[44px] h-[44px] flex items-center justify-center rounded-2xl">
          <img src={cancel} alt="cancel" />
        </div>
        <span>{t("cancel_reservation")}</span>
      </button>
    ),
  ];

  const getUserName = (userNameElement: JSX.Element): string => {
    const children = userNameElement.props.children;
    if (Array.isArray(children)) {
      const nameElement = children.find(
        (child) => React.isValidElement(child) && child.type === "p"
      );
      return nameElement ? (nameElement.props.children as string) : "Unknown";
    }
    return "Unknown";
  };
  const shouldShowOperations = (row: any) => row.PaymentStatus === "unpaid";
  return (
    <div className="flex gap-3">
      <div className="w-[340px] shrink-0 box min-h-full">
        <DateFromTo isBus={false} />
        <div className="flex justify-around items-center gap-2">
          <Row className="w-[140px]">
            {firstHalf.map((btn, idx) => (
              <Col sm={6} key={`first-${idx}`}>
                <FilterBtn title={btn.title} color={btn.color} />
              </Col>
            ))}
          </Row>
          <Row className="w-[140px]">
            {secondHalf.map((btn, idx) => (
              <Col sm={6} key={`second-${idx}`}>
                <FilterBtn title={btn.title} color={btn.color} />
              </Col>
            ))}
          </Row>
        </div>
        <div className="flex items-center gap-5 my-2">
          <SecondaryBtn color="green" title="12 Seat available" />
          <SecondaryBtn color="yellow" title="12 Seat unpaid" />
        </div>
        <p className="text-center text-[14px] font-bold">12.000 syp</p>
      </div>
      <div className="w-full overflow-y-auto">
        <Table
          headers={headers}
          rows={rows}
          rout="/home/trip_details/2/new_reservations"
          title="reservations"
          operations={operations}
          shouldShowOperations={shouldShowOperations}
        />
      </div>
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        className="!w-[340px]"
      >
        <div className="text-center">
          <div className="bg-pink w-[98px] h-[98px] rounded-3xl mx-auto flex items-center justify-center">
            <img src={cancel} alt="cancel" className="w-[40px] h-[40px]" />
          </div>
          <p className="text-xl my-2">{t("cancellation_of_reservation")}</p>
          <p className="text-silver">
            {t("are_you_sure_you_want_to_cancel_the_reservation")}
          </p>
          <div className="flex flex-col">
            <MainButton
              title={t("yes")}
              color="red"
              onClick={() =>
                alert(
                  `Cancelling reservation for ${getUserName(row.User_Name)}`
                )
              }
            />
            <MainButton
              title={t("cancel")}
              color="gray"
              onClick={() => setOpenModal(false)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default TripDetails;
