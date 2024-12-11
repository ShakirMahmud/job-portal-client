import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const HomeLayout = () => {
    return (
        <div className="w-4/5 mx-auto">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default HomeLayout;