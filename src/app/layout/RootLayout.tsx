import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/NavBar";
import Sidebar from "./SideBar";

const RootLayout = () => {
  return (
    <div className="flex max-h-[100dvh] max-w-[100dvw] gap-4 md:pe-6 md:ps-0 lg:gap-8 lg:pe-8 overflow-hidden">
      <Sidebar />
      <div className="flex max-w-[100dvw] grow flex-col px-4 md:grid md:max-w-[86vw] lg:max-w-[78vw] lg:px-0 xl:max-w-[82vw] 2xl:max-w-[84vw]">
        <Navbar />
        <div className="flex h-[73dvh] flex-col overflow-y-auto lg:h-[80dvh]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
