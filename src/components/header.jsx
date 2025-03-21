import React from "react";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container-fluid ">
          <img
            src="src\assets\Logocommunion.0485ada0760e4748313f.png"
            style={{ height: "40px" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="">
            <div className="collapse navbar-collapse  " id="navbarNavDropdown">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link a" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/events">
                    Events
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
