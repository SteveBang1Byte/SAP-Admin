import { Outlet } from "react-router";
import SideNavigation from "./navigation/SideNavigation";
import Footer from "./Footer";

const MainLayout = () => (
  <>
    <div className="flex">
      <SideNavigation />
      <div className=" py-6 px-10 bg-white w-5/6">
        <Outlet />
      </div>
    
    </div>
    {/* Header */}
    <Footer />
  </>
);

export default MainLayout;
