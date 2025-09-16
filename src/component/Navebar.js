import React from "react";

function Navebar() {
  return (
    <>
      <nav
        id="navbar-example2"
        className="navbar navbar-expand-lg   px-4"
        style={{
          position: "fixed",
          top: "0",
          width: "100vw",
          zIndex: "1",
          boxShadow: "0px 1px 4px white",
          backgroundColor: "#9cccdfff",
        }}
      >
        <div className="container-fluid  ">
          <a
            className="navbar-brand "
            href="/"
            style={{ fontWeight: "bolder" }}
          >
            Amre<span style={{ color: "rgba(96, 93, 93, 1)" }}>sh</span>
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
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#Home"
                  style={{ fontWeight: "bold" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#About"
                  style={{ fontWeight: "bold" }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#Skill"
                  style={{ fontWeight: "bold" }}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#Tools"
                  style={{ fontWeight: "bold" }}
                >
                  Tools
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#Project"
                  style={{ fontWeight: "bold" }}
                >
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  aria-disabled="true"
                  href="#Academics"
                  style={{ fontWeight: "bold" }}
                >
                  Academics
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  aria-disabled="true"
                  href="#Contact"
                  style={{ fontWeight: "bold" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navebar;
