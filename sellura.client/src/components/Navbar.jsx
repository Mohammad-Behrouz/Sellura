import { useState } from 'react'
import { Link, resolvePath } from 'react-router-dom'

function Navbar() {
    const[Manager,setManager] = useState({
        name : "متین توکلی" , 
        role : "مدیر سیستم"
    })
    return (
        <nav className="navbar dashboard-container bgc-lineaer">
            <div id="top-header-nav">
                <i className="fa-solid fa-bell"></i>
                <i className="fa-solid fa-message"></i>
            </div>
            <div id='nav-profile'>
                <img src="/Images/dashboard/profile.png" alt="" />
                <h3 style={{color : "white !important"}}>{Manager.name}</h3>
                <span>{Manager.role}</span>
            </div>
            <div id='nav-list'>
                <Link to="/Dashboard"><i className="fa-solid fa-coins"></i>مالی  </Link>
                <Link to="/WareHouse"><i className="fa-solid fa-warehouse"></i>انبار </Link>
                <Link to="/Shops"><i className="fa-solid fa-shop"></i>فروشگاه ها </Link>
                <Link to="/Vehicles"><i className="fa-solid fa-car"></i>خودرو ها </Link>
                <Link to="/Employee"><i className="fa-solid fa-user-tie"></i>کارمند ها </Link>
                <Link to="/Products"><i className="fa-solid fa-box"></i>کالا ها </Link>
                <Link to="/Customers"><i className="fa-solid fa-users"></i>مشتری ها </Link>
                <Link to="/Account"><i className="fa-solid fa-user"></i>حساب کاربری </Link>
            </div>
        </nav>
    )
}

export default Navbar
