function TitleTable({ title }: { title: string }) {
  return (
    <div className={"w-fit group mb-4"}>
      <h2 className={`text-2xl max-md:text-xl text-Secondary font-[550] mt-2`}>
        {title}
      </h2>
      <div
        className={`border-Main border-[2.5px] group-hover:w-4/5 transition-all duration-[0.5s] w-1/2 rounded-sm`}
      />
    </div>
  );
}
export default TitleTable;
