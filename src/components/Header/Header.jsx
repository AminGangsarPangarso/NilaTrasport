// import logo from "../images/Logo.png";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { Button, Nav, NavDropdown, Navbar } from "react-bootstrap"; // Mengaktifkan kembali import Button
import { faTextWidth } from "@fortawesome/free-solid-svg-icons";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <p className="font-bold">Nila Transport</p>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  exact
                  to="/"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  activeClassName="active"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/cars"
                  activeClassName="active"
                >
                  Cars
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/reservation"
                  activeClassName="active"
                >
                  Reservation
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  activeClassName="active"
                >
                  Contact
                </NavLink>
              </li>
              {/* <Button className="variant-contained" variant="contained">
                <NavLink className="nav-link" to="/login" activeClassName="active">
                 Login
                </NavLink>
              </Button> Mengaktifkan kembali tombol login */}
              <Navbar.Collapse>
                <NavDropdown title="Account" id="basic-nav-dropdown">
                  <NavLink href="#action/3.1">
                    Sign In
                  </NavLink>
                  <NavLink href="#action/3.2 " >
                    Sign Up
                  </NavLink>
                </NavDropdown>
              </Navbar.Collapse>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
