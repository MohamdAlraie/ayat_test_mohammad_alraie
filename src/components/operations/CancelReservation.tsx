import { t } from "i18next";
import { useState } from "react";
import cancel from "../../assets/images/icons/cancel.svg";
import MainButton from "../Buttons/MainButton";
import Modal from "../common/Modal";
interface CancelReservationProps {
  onClick: () => void;
}

const CancelReservation = ({ onClick }: CancelReservationProps) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
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
            <MainButton title={t("yes")} color="red" onClick={onClick} />
            <MainButton
              title={t("cancel")}
              color="gray"
              onClick={() => setOpenModal(false)}
            />
          </div>
        </div>
      </Modal>
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
    </div>
  );
};

export default CancelReservation;
