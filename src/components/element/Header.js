import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Navbar id="navbarId" expand="lg" className="bg-dark-blue py-2" sticky="top">
      <div className="container">
        <Navbar.Brand as={Link} to="/" className="logo">
          <span className="logo-icon">R</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            {currentPath.startsWith("/preview") ? (
              <li className="nav-item">
                <Link className="nav-link" to="/" title="Coming Soon">
                  Blog
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#portfolio">
                    PROJECT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#skill">
                    SKILL
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/service">
                    WHAT I OFFER
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#contact">
                    CONTACT
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
