import TitleTable from "../Titles/TitleTable";

interface MainWrapProps {
  title: string;
  children: React.ReactNode;
}

const MainWrap = ({ title, children }: MainWrapProps) => {
  return (
    <div className="w-full bg-white shadow-sm mb-5 rounded-2xl p-4 relative">
      <TitleTable title={title} />
      {children}
    </div>
  );
};

export default MainWrap;
