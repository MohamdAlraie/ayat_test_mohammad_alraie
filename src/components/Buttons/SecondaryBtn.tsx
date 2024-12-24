interface SecondaryBtnProps {
  title: string;
  color?: string;
}

const SecondaryBtn = ({ title, color }: SecondaryBtnProps) => {
  return (
    <div>
      <div
        className={`${color === "green" ? "bg-liteGreen text-Main py-2 px-5 text-[14px]" : color === "yellow" ? "bg-[#FFF9E9] text-yellow py-2 px-5 text-[14px]" : "text-[12px] bg-[#EAECF199] text-[#86909B] py-1 px-2"} font-semibold rounded-md w-fit`}
      >
        {title}
      </div>
    </div>
  );
};

export default SecondaryBtn;
