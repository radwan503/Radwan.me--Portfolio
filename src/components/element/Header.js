import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const match = currentPath.match(/^\/[a-zA-Z]+/);
  const basePath = match ? match[0] : "/";
  console.log(basePath);
  return (
    <Navbar
      id="navbarId"
      expand="lg"
      className="bg-dark-blue py-2"
      sticky="top"
    >
      <div className="container">
        <Navbar.Brand href="/" className="logo">
          <span className="logo-icon">R</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            {basePath !== "/preview" ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href={location == "/service" ? "/service" : "/"}>
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={location == "/service" ? "/service" : "/#portfolio"}>
                    PROJECT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={location == "/service" ? "/service" : "/#skill"}>
                    SKILL
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/service">
                    SERVICE
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={location == "/service" ? "/service" : "/#contact"}>
                    CONTACT
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/" title="Comming Soon">
                    Blog
                  </a>
                </li>
              </>
            )}
            <li className="nav-item">
              <a
                href="tel:01873843384"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success btn-download text-white my-3 my-sm-0"
                type="button"
                title="01873843384"
              >
                Telegram
              </a>
            </li>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
