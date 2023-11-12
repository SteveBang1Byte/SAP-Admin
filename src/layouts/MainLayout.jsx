import { Outlet } from "react-router";
import SideNavigation from "./nivigation/SideNavigation";

const MainLayout = () => (
    <div className="flex" >
        <SideNavigation />
        <div className=" py-6 px-6 h-screen bg-white w-5/6 ">
            <Outlet />
        </div>
    </div>
);

export default MainLayout;