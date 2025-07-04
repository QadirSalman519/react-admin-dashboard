import Button from "@mui/material/Button";
import { RxDashboard } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const Sidebar = ()=>{
    return(
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Button className="w-100">
                            <span className="icon"><RxDashboard/></span>
                            Dashboard
                            <span className="arrow"><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className="w-100">
                            <span className="icon"><MdOutlineProductionQuantityLimits/></span>
                            Products
                            <span className="arrow"><FaAngleRight/></span>
                        </Button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;