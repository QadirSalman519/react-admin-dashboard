import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../Search";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { IoShieldHalf } from "react-icons/io5";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import Divider from "@mui/material/Divider";
import { MyContext } from "../../App";

const Header = ()=>{

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isOpenNotificationDrop, setisOpenNotificationDrop] = React.useState(false);
    const openMyAcc = Boolean(anchorEl);
    const openNotification = Boolean(isOpenNotificationDrop);

    const context = useContext(MyContext)

    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };

    const handleOpenNotificationDrop = () => {
        setisOpenNotificationDrop(true);
    };
    const handleCloseNotificationDrop = () => {
        setisOpenNotificationDrop(false);
    };

    return(

        <>
        <header className="d-flex align-items-center">
            <div className="container-fluid w-100">
                <div className="row d-flex align-items-center">

                    <div className="col-sm-2 part1">
                        <Link to={'/'} className="d-flex align-items-center logo"> 
                            <img src={logo}/>
                            <span className="ml-2">HOTASH</span>
                        </Link>
                    </div>

                    <div className="col-sm-3 d-flex align-items-center part2 pl-4">
                        <button className="rounded-circle mr-3" onClick={()=>context.setIsToggleSidbar(!context.isToggleSidebar)}> 
                            {
                                context.isToggleSidebar===false ? <MdMenuOpen /> : <MdOutlineMenu/>
                            }
                        </button>
                        <SearchBox/>
                    </div>

                    <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                        <button className="rounded-circle mr-3"><MdOutlineLightMode /></button>
                        <button className="rounded-circle mr-3"><MdOutlineShoppingCart /></button>
                        <button className="rounded-circle mr-3"><MdOutlineEmail /></button>

                        <div className="dropdownWrapper position-relative">
                            <button className="rounded-circle mr-3" onClick={handleOpenNotificationDrop}><FaRegBell /></button>
                            <Menu
                                anchorEl={isOpenNotificationDrop}
                                className="notifications dropdown_list"
                                id="notifications"
                                open={openNotification}
                                onClose={handleCloseNotificationDrop}
                                onClick={handleCloseNotificationDrop}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >

                                <div className="head pl-3 pb-0">
                                    <h4>Orders (12)</h4>
                                </div>
                                
                                <Divider className="mb-1"/>

                                <div className="scroll">
                                    <MenuItem onClick={handleCloseNotificationDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="dropdownInfo">
                                                <h4> 
                                                    <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                                                </h4>
                                                <p className="text-sky">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseNotificationDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="dropdownInfo">
                                                <h4> 
                                                    <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                                                </h4>
                                                <p className="text-sky">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseNotificationDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="dropdownInfo">
                                                <h4> 
                                                    <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                                                </h4>
                                                <p className="text-sky">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseNotificationDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="dropdownInfo">
                                                <h4> 
                                                    <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                                                </h4>
                                                <p className="text-sky">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseNotificationDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="dropdownInfo">
                                                <h4> 
                                                    <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                                                </h4>
                                                <p className="text-sky">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseNotificationDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="dropdownInfo">
                                                <h4> 
                                                    <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                                                </h4>
                                                <p className="text-sky">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseNotificationDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="dropdownInfo">
                                                <h4> 
                                                    <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                                                </h4>
                                                <p className="text-sky">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseNotificationDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="dropdownInfo">
                                                <h4> 
                                                    <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                                                </h4>
                                                <p className="text-sky">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseNotificationDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="dropdownInfo">
                                                <h4> 
                                                    <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                                                </h4>
                                                <p className="text-sky">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseNotificationDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="dropdownInfo">
                                                <h4> 
                                                    <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                                                </h4>
                                                <p className="text-sky">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseNotificationDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="dropdownInfo">
                                                <h4> 
                                                    <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                                                </h4>
                                                <p className="text-sky">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseNotificationDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="dropdownInfo">
                                                <h4> 
                                                    <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                                                </h4>
                                                <p className="text-sky">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </div>

                                <div className="pl-3 pr-3 w-100 pt-2 pb-1">
                                    <button className="btn-blue w-100">View All Notifications</button>
                                </div>

                            </Menu>
                        </div>

                        <div className="myAccWrapper">

                            <button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                                <div className="userImg">
                                    <span className="rounded-circle">
                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>
                                    </span>
                                </div>

                                <div className="userInfo">
                                    <h4>Rinku Verma</h4>
                                    <p className="mb-0">@rinku37</p>
                                </div>
                            </button>

                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={openMyAcc}
                                onClose={handleCloseMyAccDrop}
                                onClick={handleCloseMyAccDrop}
                            >
                                <MenuItem onClick={handleCloseMyAccDrop}>
                                <ListItemIcon>
                                    <PersonAdd/>
                                </ListItemIcon>
                                My Account
                                </MenuItem>
                                <MenuItem onClick={handleCloseMyAccDrop}>
                                <ListItemIcon>
                                    <IoShieldHalf/>
                                </ListItemIcon>
                                Reset Password
                                </MenuItem>
                                <MenuItem onClick={handleCloseMyAccDrop}>
                                <ListItemIcon>
                                    <Logout/>
                                </ListItemIcon>
                                Logout
                                </MenuItem>
                            </Menu>

                        </div>

                    </div>

                </div>
            </div>
        </header>
        </>
    )
}

export default Header;