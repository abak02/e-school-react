import React from "react";
import logo from "../../ICON/Logo.png";
import "./Header.css";
const Header = () => {
  const buttonStyle = {
    border: "none",
    borderRadius: "33px",
    padding: "8px 28px 8px 28px",
    background: "#21B573",
    color: "white",
  };
  return (
    <section className="bgColor">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <img
            style={{ height: "50px"}}
            src={logo}
            alt="logo"
          />
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
            <div className="row ms-auto  ">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item me-2">
                  <a
                    className="nav-link  "
                    aria-current="page"
                    href="Home"
                  >
                    Books
                  </a>
                </li>
                <li className="nav-item me-2 ">
                  <a className="nav-link" href="courses">
                    Courses
                  </a>
                </li>
                <li className="nav-item me-2 ">
                  <a className="nav-link" href="others">
                    Others
                  </a>
                </li>
                <li className="nav-item me-2 ">
                  <a className="nav-link" href="blogs">
                    Blogs
                  </a>
                </li>
                <li>
                  <button className="me-5 hover" style={buttonStyle}>
                    Sign in
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </section>
  );
};

export default Header;
