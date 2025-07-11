import { useState } from "react";
import DashboardBox from "./components/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoTimerOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import {HiDotsVertical} from "react-icons/hi"
import { Chart } from "react-google-charts";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { FaPencilAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import Pagination from '@mui/material/Pagination';

export const data = [
    ["Task", "Hours per Day"],
    ["Work", 10],
    ["Eat", 2],
    ["Commute", 2],
    ["Sleep", 8],
];

export const options = {
    backgroundColor: "transparent",
    'chartArea': {'width':'90%', 'height':'90%'}
};

const Dashboard = ()=>{

    const [anchorEl, setAnchorEl] = useState(null);
    const [showBy, setShowBy] = useState('');
    const [categoryBy, setCategoryBy] = useState('');
    const [brandBy, setBrandBy] = useState('');
    const open = Boolean(anchorEl);
    const ITEM_HEIGHT = 48;
    
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };
    
    return(
        <>
        <div className="right-content w-100">
            <div className="row dashboardBoxWrapperRow">
                <div className="col-md-8">
                    <div className="dashboardBoxWrapper d-flex">
                        <DashboardBox color={["#1da256","#48d483"]} icon={<FaUserCircle/>} grow={true}/>
                        <DashboardBox color={["#c012e2","#eb64fe"]} icon={<FaUserCircle/>} grow={false}/>
                        <DashboardBox color={["#2c78e5","#60aff5"]} icon={<FaUserCircle/>} grow={true}/>
                        <DashboardBox color={["#e1950e","#f3cd29"]} icon={<FaUserCircle/>} grow={false}/>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="box graphBox">
                        <h4>Total Sales</h4>

                        <div className="d-flex align-items-center w-100 bottomEle">
                            <h6 className="text-white mb-0 mt-0">Last Month</h6>
                            <div className="ml-auto">
                                <Button className="ml-auto toggleIcon" onClick={handleClick}><HiDotsVertical/></Button>
                                <Menu
                                    className="dropdown_menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    slotProps={{
                                    paper: {
                                        style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '20ch',
                                        },
                                    },
                                    list: {
                                        'aria-labelledby': 'long-button',
                                    },
                                    }}
                                    >
                                    <MenuItem onClick={handleClose}>
                                        <IoTimerOutline/> Last Day
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <IoTimerOutline/> Last Day
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <IoTimerOutline/> Last Day
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <IoTimerOutline/> Last Day
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>

                            <Chart
                            chartType="PieChart"
                            data={data}
                            width={"100%"}
                            height="240px"
                            options={options}
                            />
                    </div>
                </div>

            </div>

            <div className="card shadow border-0 p-3 mt-4">
                <h3 className="hd">Best Selling Products</h3>

                <div className="row cardFilters mt-3">
                    <div className="col-md-4">
                        <h4>SHOW BY</h4>
                        <FormControl size="small" className="w-100">
                            <Select
                            value={showBy}
                            onChange={(e)=>setShowBy(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-4">
                        <h4>CATEGORY BY</h4>
                        <FormControl size="small" className="w-100">
                            <Select
                            value={categoryBy}
                            onChange={(e)=>setCategoryBy(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-4">
                        <h4>BRAND BY</h4>
                        <FormControl size="small" className="w-100">
                            <Select
                            value={brandBy}
                            onChange={(e)=>setBrandBy(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                </div>

            </div>

            <div className="table-responsive">
                <table className="table table-bordered v-align">
                    <thead className="thead-dark">
                        <tr>
                            <th>UID</th>
                            <th style={{ width:'300px' }}>PRODUCT</th>
                            <th>CATEGORY</th>
                            <th>BRAND</th>
                            <th>PRICE</th>
                            <th>STOCK</th>
                            <th>RATING</th>
                            <th>ORDER</th>
                            <th>SALES</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#1</td>
                            <td>
                                <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                    </div>
                                    <div className="info pl-0">
                                        <h6>Tops and skirt set for Fem....</h6>
                                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                    </div>
                                </div>
                            </td>
                            <td>Womans</td>
                            <td>Richman</td>
                            <td>
                                <div style={{ width:'70px' }}>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$21.00</span>
                                </div>
                            </td>
                            <td>Stock</td>
                            <td>4.9(16)</td>
                            <td>380</td>
                            <td>$38k</td>
                            <td>
                                <div className="actions d-flex align-items-center">
                                    <Button className="secondary" color="secondary"><FaPencilAlt /></Button>
                                    <Button className="success" color="success"><FaEye /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                    </div>
                                    <div className="info pl-0">
                                        <h6>Tops and skirt set for Fem....</h6>
                                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                    </div>
                                </div>
                            </td>
                            <td>Womans</td>
                            <td>Richman</td>
                            <td>
                                <div style={{ width:'70px' }}>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$21.00</span>
                                </div>
                            </td>
                            <td>Stock</td>
                            <td>4.9(16)</td>
                            <td>380</td>
                            <td>$38k</td>
                            <td>
                                <div className="actions d-flex align-items-center">
                                    <Button className="secondary" color="secondary"><FaPencilAlt /></Button>
                                    <Button className="success" color="success"><FaEye /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                    </div>
                                    <div className="info pl-0">
                                        <h6>Tops and skirt set for Fem....</h6>
                                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                    </div>
                                </div>
                            </td>
                            <td>Womans</td>
                            <td>Richman</td>
                            <td>
                                <div style={{ width:'70px' }}>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$21.00</span>
                                </div>
                            </td>
                            <td>Stock</td>
                            <td>4.9(16)</td>
                            <td>380</td>
                            <td>$38k</td>
                            <td>
                                <div className="actions d-flex align-items-center">
                                    <Button className="secondary" color="secondary"><FaPencilAlt /></Button>
                                    <Button className="success" color="success"><FaEye /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                    </div>
                                    <div className="info pl-0">
                                        <h6>Tops and skirt set for Fem....</h6>
                                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                    </div>
                                </div>
                            </td>
                            <td>Womans</td>
                            <td>Richman</td>
                            <td>
                                <div style={{ width:'70px' }}>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$21.00</span>
                                </div>
                            </td>
                            <td>Stock</td>
                            <td>4.9(16)</td>
                            <td>380</td>
                            <td>$38k</td>
                            <td>
                                <div className="actions d-flex align-items-center">
                                    <Button className="secondary" color="secondary"><FaPencilAlt /></Button>
                                    <Button className="success" color="success"><FaEye /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                    </div>
                                    <div className="info pl-0">
                                        <h6>Tops and skirt set for Fem....</h6>
                                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                    </div>
                                </div>
                            </td>
                            <td>Womans</td>
                            <td>Richman</td>
                            <td>
                                <div style={{ width:'70px' }}>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$21.00</span>
                                </div>
                            </td>
                            <td>Stock</td>
                            <td>4.9(16)</td>
                            <td>380</td>
                            <td>$38k</td>
                            <td>
                                <div className="actions d-flex align-items-center">
                                    <Button className="secondary" color="secondary"><FaPencilAlt /></Button>
                                    <Button className="success" color="success"><FaEye /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                    </div>
                                    <div className="info pl-0">
                                        <h6>Tops and skirt set for Fem....</h6>
                                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                    </div>
                                </div>
                            </td>
                            <td>Womans</td>
                            <td>Richman</td>
                            <td>
                                <div style={{ width:'70px' }}>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$21.00</span>
                                </div>
                            </td>
                            <td>Stock</td>
                            <td>4.9(16)</td>
                            <td>380</td>
                            <td>$38k</td>
                            <td>
                                <div className="actions d-flex align-items-center">
                                    <Button className="secondary" color="secondary"><FaPencilAlt /></Button>
                                    <Button className="success" color="success"><FaEye /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                    </div>
                                    <div className="info pl-0">
                                        <h6>Tops and skirt set for Fem....</h6>
                                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                    </div>
                                </div>
                            </td>
                            <td>Womans</td>
                            <td>Richman</td>
                            <td>
                                <div style={{ width:'70px' }}>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$21.00</span>
                                </div>
                            </td>
                            <td>Stock</td>
                            <td>4.9(16)</td>
                            <td>380</td>
                            <td>$38k</td>
                            <td>
                                <div className="actions d-flex align-items-center">
                                    <Button className="secondary" color="secondary"><FaPencilAlt /></Button>
                                    <Button className="success" color="success"><FaEye /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                    </div>
                                    <div className="info pl-0">
                                        <h6>Tops and skirt set for Fem....</h6>
                                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                    </div>
                                </div>
                            </td>
                            <td>Womans</td>
                            <td>Richman</td>
                            <td>
                                <div style={{ width:'70px' }}>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$21.00</span>
                                </div>
                            </td>
                            <td>Stock</td>
                            <td>4.9(16)</td>
                            <td>380</td>
                            <td>$38k</td>
                            <td>
                                <div className="actions d-flex align-items-center">
                                    <Button className="secondary" color="secondary"><FaPencilAlt /></Button>
                                    <Button className="success" color="success"><FaEye /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                    </div>
                                    <div className="info pl-0">
                                        <h6>Tops and skirt set for Fem....</h6>
                                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                    </div>
                                </div>
                            </td>
                            <td>Womans</td>
                            <td>Richman</td>
                            <td>
                                <div style={{ width:'70px' }}>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$21.00</span>
                                </div>
                            </td>
                            <td>Stock</td>
                            <td>4.9(16)</td>
                            <td>380</td>
                            <td>$38k</td>
                            <td>
                                <div className="actions d-flex align-items-center">
                                    <Button className="secondary" color="secondary"><FaPencilAlt /></Button>
                                    <Button className="success" color="success"><FaEye /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                    </div>
                                    <div className="info pl-0">
                                        <h6>Tops and skirt set for Fem....</h6>
                                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                    </div>
                                </div>
                            </td>
                            <td>Womans</td>
                            <td>Richman</td>
                            <td>
                                <div style={{ width:'70px' }}>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$21.00</span>
                                </div>
                            </td>
                            <td>Stock</td>
                            <td>4.9(16)</td>
                            <td>380</td>
                            <td>$38k</td>
                            <td>
                                <div className="actions d-flex align-items-center">
                                    <Button className="secondary" color="secondary"><FaPencilAlt /></Button>
                                    <Button className="success" color="success"><FaEye /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                    </div>
                                    <div className="info pl-0">
                                        <h6>Tops and skirt set for Fem....</h6>
                                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                    </div>
                                </div>
                            </td>
                            <td>Womans</td>
                            <td>Richman</td>
                            <td>
                                <div style={{ width:'70px' }}>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$21.00</span>
                                </div>
                            </td>
                            <td>Stock</td>
                            <td>4.9(16)</td>
                            <td>380</td>
                            <td>$38k</td>
                            <td>
                                <div className="actions d-flex align-items-center">
                                    <Button className="secondary" color="secondary"><FaPencilAlt /></Button>
                                    <Button className="success" color="success"><FaEye /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                    </div>
                                    <div className="info pl-0">
                                        <h6>Tops and skirt set for Fem....</h6>
                                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                    </div>
                                </div>
                            </td>
                            <td>Womans</td>
                            <td>Richman</td>
                            <td>
                                <div style={{ width:'70px' }}>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$21.00</span>
                                </div>
                            </td>
                            <td>Stock</td>
                            <td>4.9(16)</td>
                            <td>380</td>
                            <td>$38k</td>
                            <td>
                                <div className="actions d-flex align-items-center">
                                    <Button className="secondary" color="secondary"><FaPencilAlt /></Button>
                                    <Button className="success" color="success"><FaEye /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                    </div>
                                    <div className="info pl-0">
                                        <h6>Tops and skirt set for Fem....</h6>
                                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                    </div>
                                </div>
                            </td>
                            <td>Womans</td>
                            <td>Richman</td>
                            <td>
                                <div style={{ width:'70px' }}>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$21.00</span>
                                </div>
                            </td>
                            <td>Stock</td>
                            <td>4.9(16)</td>
                            <td>380</td>
                            <td>$38k</td>
                            <td>
                                <div className="actions d-flex align-items-center">
                                    <Button className="secondary" color="secondary"><FaPencilAlt /></Button>
                                    <Button className="success" color="success"><FaEye /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                    </div>
                                    <div className="info pl-0">
                                        <h6>Tops and skirt set for Fem....</h6>
                                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                    </div>
                                </div>
                            </td>
                            <td>Womans</td>
                            <td>Richman</td>
                            <td>
                                <div style={{ width:'70px' }}>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$21.00</span>
                                </div>
                            </td>
                            <td>Stock</td>
                            <td>4.9(16)</td>
                            <td>380</td>
                            <td>$38k</td>
                            <td>
                                <div className="actions d-flex align-items-center">
                                    <Button className="secondary" color="secondary"><FaPencilAlt /></Button>
                                    <Button className="success" color="success"><FaEye /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                    </div>
                                    <div className="info pl-0">
                                        <h6>Tops and skirt set for Fem....</h6>
                                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                    </div>
                                </div>
                            </td>
                            <td>Womans</td>
                            <td>Richman</td>
                            <td>
                                <div style={{ width:'70px' }}>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$21.00</span>
                                </div>
                            </td>
                            <td>Stock</td>
                            <td>4.9(16)</td>
                            <td>380</td>
                            <td>$38k</td>
                            <td>
                                <div className="actions d-flex align-items-center">
                                    <Button className="secondary" color="secondary"><FaPencilAlt /></Button>
                                    <Button className="success" color="success"><FaEye /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                    </div>
                                    <div className="info pl-0">
                                        <h6>Tops and skirt set for Fem....</h6>
                                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                    </div>
                                </div>
                            </td>
                            <td>Womans</td>
                            <td>Richman</td>
                            <td>
                                <div style={{ width:'70px' }}>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$21.00</span>
                                </div>
                            </td>
                            <td>Stock</td>
                            <td>4.9(16)</td>
                            <td>380</td>
                            <td>$38k</td>
                            <td>
                                <div className="actions d-flex align-items-center">
                                    <Button className="secondary" color="secondary"><FaPencilAlt /></Button>
                                    <Button className="success" color="success"><FaEye /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                    </div>
                                    <div className="info pl-0">
                                        <h6>Tops and skirt set for Fem....</h6>
                                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                    </div>
                                </div>
                            </td>
                            <td>Womans</td>
                            <td>Richman</td>
                            <td>
                                <div style={{ width:'70px' }}>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$21.00</span>
                                </div>
                            </td>
                            <td>Stock</td>
                            <td>4.9(16)</td>
                            <td>380</td>
                            <td>$38k</td>
                            <td>
                                <div className="actions d-flex align-items-center">
                                    <Button className="secondary" color="secondary"><FaPencilAlt /></Button>
                                    <Button className="success" color="success"><FaEye /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                    </div>
                                    <div className="info pl-0">
                                        <h6>Tops and skirt set for Fem....</h6>
                                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                    </div>
                                </div>
                            </td>
                            <td>Womans</td>
                            <td>Richman</td>
                            <td>
                                <div style={{ width:'70px' }}>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$21.00</span>
                                </div>
                            </td>
                            <td>Stock</td>
                            <td>4.9(16)</td>
                            <td>380</td>
                            <td>$38k</td>
                            <td>
                                <div className="actions d-flex align-items-center">
                                    <Button className="secondary" color="secondary"><FaPencilAlt /></Button>
                                    <Button className="success" color="success"><FaEye /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="d-flex tableFooter">
                    <Pagination count={100} showFirstButton showLastButton color="primary" className="pagination" />
                </div>
            </div>

        </div>

        </>
    )
}

export default Dashboard;