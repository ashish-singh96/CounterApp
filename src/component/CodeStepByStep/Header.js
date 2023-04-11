import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                <Nav className="mr-auto nav_bar_wrapper">
                    <Link to="/addproduct" style={{ font: "message-box" }}>Add Product</Link>
                    <Link to="/updateproduct" style={{ font: "message-box" }}>Update Product</Link>
                    <Link to="/login" style={{ font: "message-box" }}>Login</Link>
                    <Link to="/register" style={{ font: "message-box" }}>Register</Link>
                </Nav>
                <form className="form-inline my-2 my-lg-0 search">
                    <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0 searchbutton" type="submit">Search</button>
                </form>
            </Navbar>
        </div>
    )
}

export default Header