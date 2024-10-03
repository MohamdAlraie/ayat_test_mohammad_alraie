import { MdEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import background from "../../assets/images/logo.png";

interface ProductCardProps {
  description: string;
  available: string;
}

const ProductCard = ({ description, available }: ProductCardProps) => {
  return (
    <div className="relative bg-white border-[2px] shadow-md rounded-xl overflow-hidden w-[180px] mx-auto">
      <MdEdit size={20} className="absolute top-2 text-Main start-2" />
      <RiDeleteBinLine size={20} className="absolute top-2 text-Main end-2" />
      <img src={background} alt="" className="h-[120px] scale-95 mx-auto" />
      <div className="bg-blue-100 p-2">
        <p>{description}</p>
        <p className="text-Main">{available}</p>
      </div>
    </div>
  );
};

export default ProductCard;
