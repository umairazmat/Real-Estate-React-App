import React from "react";
import "./Navcss.css";
import Logo from "../Assets/Logo.png";
function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-5">
          <a className="navbar-brand" href="#">
            <img src={Logo} />
          </a>
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item px-3">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link">Contact Us</a>
              </li>
              <button
                style={{ fontSize: "14px" }}
                type="button"
                class="btn btn-sm btn-outline-primary px-4 mx-4 mt-1"
              >
                Sign In
              </button>
              <button
                style={{ fontSize: "14px" }}
                type="button"
                class="btn btn-sm btn-primary px-4 mx-4 mt-1"
              >
                Sign Up
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
