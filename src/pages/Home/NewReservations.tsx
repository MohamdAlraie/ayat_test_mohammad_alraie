import { t } from "i18next";
import FilterBtn from "../../components/Buttons/FilterBtn";
import { Col, Row } from "../../components/GridSystem";
import ThirdBtn from "../../components/Buttons/ThirdBtn";
import GenderRadioSelect from "../../components/common/GenderRadioSelect";
import { useForm, FormProvider } from "react-hook-form";
import GeneralInput from "../../components/common/GeneralInput";
import male from "../../assets/images/icons/male.svg";
import female from "../../assets/images/icons/female.svg";
import MainButton from "../../components/Buttons/MainButton";

function NewReservations() {
  const methods = useForm();

  const colors = ["gray", "green", ""];
  const filterButtons = Array.from({ length: 44 }, (_, index) => ({
    title: (index + 1).toString(),
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  // Filter all green buttons
  const greenButtons = filterButtons.filter((btn) => btn.color === "green");

  const firstHalf = filterButtons.slice(0, 22);
  const secondHalf = filterButtons.slice(22);

  return (
    <FormProvider {...methods}>
      <div className="flex gap-3">
        <div className="w-[340px] shrink-0 box min-h-full">
          <h2 className="font-semibold text-lg">{t("choose_your_seats")}</h2>
          <div className="flex items-center gap-2 flex-wrap mb-3 mt-1">
            {greenButtons.map((btn, idx) => (
              <ThirdBtn key={`green-${idx}`} title={btn.title} />
            ))}
          </div>
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
          <GenderRadioSelect name="Gender" />
        </div>
        <div className="box w-full overflow-y-auto">
          <div className="flex items-center gap-2 justify-between my-1">
            <ThirdBtn title="Seat Number 17" />
            <div className="flex items-center gap-2 text-[#6EC3E4]">
              {t("male")}
              <img src={male} alt="male" />
            </div>
          </div>
          <GeneralInput name="ff" label="ddd" placeholder="dd" />
          <div className="flex items-center gap-2 justify-between my-1">
            <ThirdBtn title="Seat Number 17" />
            <div className="flex items-center gap-2 text-[#6EC3E4]">
              {t("male")}
              <img src={male} alt="male" />
            </div>
          </div>
          <GeneralInput name="ff" label="ddd" placeholder="dd" />
          <div className="flex items-center gap-2 justify-between my-1">
            <ThirdBtn title="Seat Number 17" />
            <div className="flex items-center gap-2 text-[#6EC3E4]">
              {t("male")}
              <img src={male} alt="male" />
            </div>
          </div>
          <GeneralInput name="ff" label="ddd" placeholder="dd" />
          <div className="flex items-center gap-2 justify-between my-1">
            <ThirdBtn title="Seat Number 17" />
            <div className="flex items-center gap-2 text-[#6EC3E4]">
              {t("male")}
              <img src={male} alt="male" />
            </div>
          </div>
          <GeneralInput name="ff" label="ddd" placeholder="dd" />
          <div className="flex items-center gap-2 justify-between my-1">
            <ThirdBtn title="Seat Number 17" />
            <div className="flex items-center gap-2 text-[#D46EE4]">
              {t("female")}
              <img src={female} alt="female" />
            </div>
          </div>
          <GeneralInput name="ff" label="ddd" placeholder="dd" />
          <MainButton title="continue" />
        </div>
      </div>
    </FormProvider>
  );
}

export default NewReservations;
