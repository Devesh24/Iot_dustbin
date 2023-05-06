import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="nav_left">
            <div className="logo">
                    <img src="/assets/logo.png" alt="Swacch Bharat Mission" />
                </div>
            </div>
            <div className="nav_right">
                <div className='nav_right_inner'>
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT US</Link>
                    <Link to="/complains">REACH US</Link>
                </div>
                <div className="head_btn_grp">
                    <Link to="/login" className='btn login_btn'>
                        LOGIN
                    </Link>
                    <Link to="/register" className='btn reg_btn'>
                        REGISTER
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar