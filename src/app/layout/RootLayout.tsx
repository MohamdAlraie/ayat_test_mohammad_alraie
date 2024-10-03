import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import SideBar from "./SideBar";

const RootLayout = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col">
        <header>
          <Navbar />
        </header>
        <div className="flex">
          <nav aria-label="Sidebar navigation">
            <SideBar />
          </nav>
          <main className="w-full">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
