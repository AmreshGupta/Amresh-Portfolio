import React from "react";
import "./ScrollAccordion.css";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Peoject5";
function Project() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      className="scrollspy-example  p-1 "
      style={{
        backgroundColor: "#57879aff",
        minHeight: "100%",
        minWidth: "100%",
        color: "black",
      }}
      tabIndex="6"
    >
      <div id="Project">
        <div className=" d-flex my-1 justify-content-center  p-4">
          <h1
            className="px-4 py-1"
            style={{
              fontWeight: "bolder",
            }}
          >
            Projects
          </h1>
        </div>
      </div>
      <div className="container scrole ">
        <Project1 />
        <Project2 />
        <Project3 />
        <Project5 />
        <Project4 />
      </div>
    </div>
  );
}

export default Project;
