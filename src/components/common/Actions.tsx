import { MdEdit, MdLinkOff } from "react-icons/md";

function Actions({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-2 text-xl text-Fourth ${className}`}
    >
      <MdLinkOff className="-rotate-45" />
      <MdEdit />
    </div>
  );
}
export default Actions;
