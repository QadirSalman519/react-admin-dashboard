import Button from "@mui/material/Button";
import { RxDashboard } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MyContext } from "../../App";


const Sidebar = ()=>{

    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubMenu, setIsToggleSubMenu] = useState(false);

    const context = useContext(MyContext)

    const isOpenSubMenu=(index)=>{
        setActiveTab(index)
        setIsToggleSubMenu(!isToggleSubMenu)
    }

    return(
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===0 ? 'active' : ''}`}>
                                <span className="icon"><RxDashboard/></span>
                                Dashboard
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab===1 && isToggleSubMenu===true ? 'active' : ''}`} onClick={()=>isOpenSubMenu(1)}>
                            <span className="icon"><MdOutlineProductionQuantityLimits/></span>
                            Products
                            <span className="arrow"><FaAngleRight/></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab===1 && isToggleSubMenu===true ? 'colapse' : 'colapsed'}`}>
                            <ul className="submenu">
                                <li><Link to="#">Product List</Link></li>
                                <li><Link to="#">Product View</Link></li>
                                <li><Link to="#">Product Upload</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===2 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(2)}>
                                <span className="icon"><FaCartPlus/></span>
                                Orders
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===3 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(3)}>
                                <span className="icon"><MdMessage/></span>
                                Messages
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===4 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(4)}>
                                <span className="icon"><FaBell/></span>
                                Notifications
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===5 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(5)}>
                                <span className="icon"><FaGear/></span>
                                Settings
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li> 

                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===6 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(6)}>
                                <span className="icon"><RxDashboard/></span>
                                Dashboard
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab===7 && isToggleSubMenu===true ? 'active' : ''}`} onClick={()=>isOpenSubMenu(7)}>
                            <span className="icon"><MdOutlineProductionQuantityLimits/></span>
                            Products
                            <span className="arrow"><FaAngleRight/></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab===7 && isToggleSubMenu===true ? 'colapse' : 'colapsed'}`}>
                            <ul className="submenu">
                                <li><Link to="#">Product List</Link></li>
                                <li><Link to="#">Product View</Link></li>
                                <li><Link to="#">Product Upload</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===8 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(8)}>
                                <span className="icon"><FaCartPlus/></span>
                                Orders
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===9 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(9)}>
                                <span className="icon"><MdMessage/></span>
                                Messages
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===10 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(10)}>
                                <span className="icon"><FaBell/></span>
                                Notifications
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===11 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(11)}>
                                <span className="icon"><FaGear/></span>
                                Settings
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li> 

                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===12 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(12)}>
                                <span className="icon"><RxDashboard/></span>
                                Dashboard
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===13 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(13)}>
                                <span className="icon"><FaCartPlus/></span>
                                Orders
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===14 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(14)}>
                                <span className="icon"><MdMessage/></span>
                                Messages
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===15 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(15)}>
                                <span className="icon"><FaBell/></span>
                                Notifications
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===16 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(16)}>
                                <span className="icon"><FaGear/></span>
                                Settings
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li> 

                </ul>

                <br />
                <div className="logoutWrapper">
                    <div className="logoutBox">
                        <Button variant="contained"> <RiLogoutCircleRLine/> Logout</Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidebar;