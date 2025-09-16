import React from "react";
function About() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      className="scrollspy-example  p-3 "
      style={{
        backgroundColor: "rgb(83, 131, 150)",
        minHeight: "90vh",
        color: "black",
      }}
      tabIndex="2"
    >
      <div id="About">
        <div className=" d-flex my-3 justify-content-center  p-3">
          <h1
            className="px-4 py-1"
            style={{
              fontWeight: "bolder",
            }}
          >
            About Me
          </h1>
        </div>
      </div>
      <div className="contener  m-2 ">
        <div className="container overflow-hidden text-center">
          <div className="row gx-5 ">
            <div className="col">
              <div
                className="p-3 m-1"
                style={{
                  backgroundColor: "#57879aff",
                  borderRadius: "9px",
                  border: "2px solid gray",
                  boxShadow: " 0px 0px 4px  white",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-award-fill"
                  viewBox="0 0 16 16"
                  style={{ color: "rgb(34, 33, 43)" }}
                >
                  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                </svg>
                <h5 style={{ fontWeight: "bold", color: "rgb(34, 33, 43)" }}>
                  Experience
                </h5>
                <h5>Fresher</h5>
              </div>
            </div>
            <div className="col">
              <div
                className="p-3 m-2"
                style={{
                  backgroundColor: "#57879aff",
                  borderRadius: "9px",
                  border: "2px solid gray",
                  boxShadow: " 0px 0px 4px  white",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-book-half"
                  viewBox="0 0 16 16"
                  style={{ color: "rgb(34, 33, 43)" }}
                >
                  <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                </svg>
                <h5 style={{ fontWeight: "bold", color: "rgb(34, 33, 43)" }}>
                  Completed
                </h5>
                <h5>5 + Project</h5>
              </div>
            </div>
            <div className="col">
              <div
                className="p-3 m-2"
                style={{
                  backgroundColor: "#57879aff",
                  borderRadius: "9px",
                  border: "2px solid gray",
                  boxShadow: " 0px 0px 4px  white",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-briefcase"
                  viewBox="0 0 16 16"
                  style={{ color: "rgb(34, 33, 43)" }}
                >
                  <path d="M6.5 0a.5.5 0 0 0-.5.5V2H3a1 1 0 0 0-1 1v1h12V3a1 1 0 0 0-1-1h-3V.5a.5.5 0 0 0-.5-.5h-4zM1 5v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5H1zm3 2h2v4H4V7zm6 0h2v4h-2V7z" />
                </svg>
                <h5 style={{ fontWeight: "bold", color: "rgb(34, 33, 43)" }}>
                  Professional
                </h5>
                <h5>Open to Work</h5>
              </div>
            </div>
            <div className="contener m-3">
              <h5
                className="m-2"
                style={{
                  textAlign: "justify",
                  fontWeight: "500",
                  color: "rgb(34, 33, 43)",
                }}
              >
                I am a Full Stack Web Developer with practical experience in
                creating web applications using HTML5, CSS3, JavaScript,
                React.js, Node.js, Express.js, and MongoDB. I have built
                multiple personal projects that demonstrate my ability to
                integrate front-end and back-end functionalities, handle APIs,
                and implement responsive design. I am familiar with Git for
                version control and enjoy collaborating in team environments. I
                quickly learn new tools and technologies and focus on writing
                clean, maintainable, and efficient code to deliver high-quality
                solutions.
              </h5>
              <a href="https://drive.google.com/file/d/1ppif10CAmeaDr4PG3kdG_HEFPdyPx8zj/view?usp=sharing">
                <button
                  type="button"
                  className="btn my-4 custom-btn "
                  style={{
                    borderRadius: "100px",
                    // borderColor: "#292727",
                    borderWidth: "5px",
                    // color: "#292727",
                    fontWeight: "600",
                  }}
                >
                  Resume Downlode
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
