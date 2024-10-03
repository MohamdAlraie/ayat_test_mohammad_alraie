interface TitlePageProps {
  title?: string[];
  Icon?: React.ComponentType;
  index?: number
}

const TitlePage = ({ title = [], Icon, index }: TitlePageProps) => {
  return (
    <div className="flex gap-1 items-center font-semibold mb-4">
      {Icon && <Icon className="text-Main text-lg mx-1" />}
      {title.map((e, i) => (
        <div
          key={i}
          onClick={() => window.history.go(i + 1 - title.length)}
          className={`${i === index ? "text-Main" : "text-Secondary"}`}
        >
          {i === 0 ? e : `» ${e}`}
        </div>
      ))}
    </div>
  );
};

export default TitlePage;
