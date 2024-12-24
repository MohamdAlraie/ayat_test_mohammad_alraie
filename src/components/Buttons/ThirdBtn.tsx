interface ThirdBtnProps {
  title: string;
  color?: string;
}

const ThirdBtn = ({ title, color }: ThirdBtnProps) => {
  return (
    <div>
      <div
        className={`${color === "yellow" ? "bg-[#FFF9E9] text-yellow" : "bg-liteGreen text-Main"} font-bold text-[12px] rounded-full px-4 w-fit`}
      >
        {title}
      </div>
    </div>
  );
};

export default ThirdBtn;
