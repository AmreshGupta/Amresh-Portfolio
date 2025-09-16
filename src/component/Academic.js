import React from "react";
import "./Acd.css";
const academics = [
  {
    year: "2021-2025",
    title: "Bachelor of Technology - B.Tech",
    institute: "Oriental institute of science and technology Bhopal",
    grade: "7.5 CGPA",
    logo: "/image/clglogo.jpg",
    discreption:
      "I completed my B.Tech in Computer Science and Engineering from OIST, Bhopal. My coursework included Data Structures, Algorithms, OOP, DBMS, Web Development, and Software Engineering. I also participated in workshops and technical events that enhanced my skills and contributed to my professional growth.", // apna logo ka path de
  },
  {
    year: "2019-2020",
    title: "BSEB(XII) - PCM",
    institute: "M. R. DAS High School CUM Inter College Bahuara Math Saran",
    grade: "67.5%",
    logo: "/image/schoollogo.png",
    discreption:
      "I completed my Class 12 education from M. R. DAS High School CUM Inter College, Bahuara Math, Saran under the BSEB board, where I studied Physics, Chemistry, and Mathematics (PCM).",
  },
  {
    year: "2017-2018",
    title: "BSEB(X)",
    institute: "M. R. S. D. High School Bahuara Math Saran",
    grade: "58.9%",
    logo: "/image/schoollogo.png",
    discreption:
      "I completed my Class 10 education from M. R. S. D. High School , Bahuara Math, Saran under the BSEB board, where I studied Physics, Chemistry, and Mathematics (PCM).",
  },
];

function Academic() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      className="scrollspy-example  p-3 "
      style={{
        backgroundColor: "rgb(83, 131, 150)",
        height: "100%",
        minWidth: "100vw",
        color: "black",
      }}
      tabIndex="7"
    >
      <div id="Academics">
        <div className=" d-flex my-1 justify-content-center  p-4">
          <h1
            className="px-4 m-2"
            style={{
              fontWeight: "bolder",
            }}
          >
            Academic Qualifications
          </h1>
        </div>
        <p
          className=" d-flex my-1 text-muted justify-content-center "
          style={{ fontWeight: "bold" }}
        >
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>
      {/* yeha se mene lagya hau  */}

      <div className="container py-4">
        <div
          className="position-relative timeline-container"
          style={{ zIndex: 0 }}
        >
          {/* Center vertical line */}
          <div
            className="timeline-line"
            style={{ width: "4px", backgroundColor: "rgba(53, 46, 51, 0.8)" }}
          ></div>

          {academics.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div className="row timeline-item" key={idx}>
                {/* Left/Right alternate cards */}
                <div className={`col-md-6 ${isLeft ? "" : "order-md-2"}`}>
                  <div
                    className="card academic-card p-3 shadow-sm"
                    style={{ backgroundColor: "rgba(182, 222, 238, 0.8)" }}
                  >
                    <div className="d-flex align-items-center mb-2">
                      <img
                        src={item.logo}
                        alt="logo"
                        className="me-3 academic-logo"
                      />
                      <div>
                        <h5 className="mb-1" style={{ fontWeight: "bold" }}>
                          {item.title}
                        </h5>
                        <small
                          className=" d-block"
                          style={{
                            color: "rgba(118, 5, 77, 0.8)",
                            fontWeight: "bold",
                          }}
                        >
                          {item.institute}
                        </small>
                      </div>
                      <span
                        className="badge ms-auto"
                        style={{ color: "black" }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <p className="mb-0">
                      <strong>Grade:</strong> {item.grade}
                      <small className=" d-block">{item.discreption}</small>
                    </p>
                  </div>
                </div>

                {/* Dot in middle */}
                <div className="col-md-6 d-flex justify-content-center align-items-center d-none d-md-flex">
                  <div
                    className="timeline-dot"
                    style={{ backgroundColor: "transparent", border: "none" }}
                  ></div>
                </div>

                {/* Mobile dot */}
                <div className="col-12 d-flex justify-content-center d-md-none mb-2">
                  <div
                    className="timeline-dot"
                    style={{ backgroundColor: "transparent", border: "none" }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Academic;
