import "../Loading/Loading.css";

interface MainButtonProps {
  title: string;
  type?: string;
  isLoading?: boolean;
  onClick?: () => void;
}

const MainButton = ({ title, type, isLoading, onClick }: MainButtonProps) => {
  return (
    <button
      type={type || "button"}
      className="mt-4 w-full bg-white border-2 border-Main rounded-lg text-Main hover:bg-Main hover:text-white transition-all first-letter:uppercase tracking-widest shadow-md shadow-gray-500 p-2"
      onClick={onClick}
    >
      <div className="min-h-6">
        {isLoading ? <div className="loopCircle w-5 mx-auto" /> : title}
      </div>
    </button>
  );
};

export default MainButton;
