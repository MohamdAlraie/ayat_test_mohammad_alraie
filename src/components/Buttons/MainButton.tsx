import { useNavigate } from "react-router-dom";

interface MainButtonProps {
  title: string;
  color?: string;
  rout?: string;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const MainButton = ({
  title,
  type = "button",
  isLoading,
  disabled,
  className,
  color,
  rout,
  onClick,
}: MainButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      type={type}
      className={`mt-4 px-6 text-white ${color === "red" ? "bg-[#EE451F]" : color === "gray" ? "bg-[#FBFBFB] !text-dark border border-[#EAECF1]" : "bg-gradient-to-r from-[#00C069] to-[#00FFB0]"} hover:opacity-80 transition-all first-letter:uppercase tracking-widest shadow-md shadow-gray-100 rounded-full p-2 ${className}`}
      onClick={rout ? () => navigate(rout) : onClick}
    >
      <div className="min-h-6">{isLoading ? <div className="" /> : title}</div>
    </button>
  );
};

export default MainButton;
