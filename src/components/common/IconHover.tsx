import { ReactNode } from "react";
import { Tooltip } from "react-tooltip";

function IconHover({
  children,
  id,
  noHover,
  content,
}: {
  children: ReactNode;
  id?: string;
  noHover?: boolean;
  content: string;
}) {
  return (
    <>
      <div
        id={id || content}
        className={`${
          noHover ? "" : "bg-gray-200 hover:bg-gray-300"
        } bg-white text-xl w-fit p-2 text-[#d0dbe5] hover:text-Secondary rounded-full cursor-pointer transition-all`}
      >
        {children}
      </div>
      <Tooltip anchorSelect={`#${id || content}`} content={content} />
    </>
  );
}
export default IconHover;
