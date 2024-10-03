interface RoutIconProps {
  Icon: React.ComponentType;
  isActive?: boolean;
}

const RoutIcon = ({ Icon, isActive }: RoutIconProps) => {
  return (
    <div
      className={`w-fit ${
        isActive ? "text-Main bg-white" : "text-gray-400 bg-gray-200"
      }  hover:text-Main shadow-lg hover:bg-white text-xl px-5 py-3 transition-all rounded-lg`}
    >
      <Icon />
    </div>
  );
};

export default RoutIcon;
