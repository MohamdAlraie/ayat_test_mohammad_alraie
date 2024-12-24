interface FilterBtnProps {
  title: string;
  color?: string;
}

const FilterBtn = ({ title, color }: FilterBtnProps) => {
  return (
    <div
      className={`flex items-center justify-center py-[6px] px-[8px] w-fit rounded-md m-[2px] ${color === "gray" ? "bg-[#ECEEF4] text-[#21536A21]" : color === "yellow" ? "border-yellow text-yellow bg-[#FFF9E9]" : color === "green" ? "bg-Main text-white" : "border-Main"} border`}
    >
      <span className="w-[47px] h-[22px] text-center">{title}</span>
    </div>
  );
};

export default FilterBtn;
