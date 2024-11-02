import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navber from "../Navber";





const Rooted = () => {
    return (
        <div>
            
            <div className="max-w-[1200px] mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
           
            
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Rooted;