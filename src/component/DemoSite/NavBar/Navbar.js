import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
  <a  href="#"><i className="fa fa-fw fa-home"></i> Home</a>
  <a href="#"><i className="fa fa-fw fa-search"></i> Search</a>
  <a href="#"><i className="fa fa-fw fa-envelope"></i> Contact</a>
  <a href="#"><i className="fa fa-fw fa-user"></i> Login</a>
</div>
    </div>
  )
}

export default Navbar
