import React from 'react';
import { Navbar, Nav } from "react-bootstrap";


export default function Header() {
    return (
        <Navbar bg="transparent" expand="lg" className="shadow py-3">
            <div className="container">
                <Navbar.Brand href="#home" className="logo"><span className="logo-icon">R</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SKILL</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-success btn-download text-white my-3 my-sm-0" type="submit">Search</button>
                        </li>

                    </Nav>
                </Navbar.Collapse>
            </div >
        </Navbar>

    )
}

