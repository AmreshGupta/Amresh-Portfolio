import React from "react";
function Tools() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      className="scrollspy-example  p-3 "
      style={{
        backgroundColor: "rgb(83, 131, 150)",
        minHeight: "60vh",
        minWidth: "100vw",
        color: "black",
      }}
      tabIndex="4"
    >
      <div id="Tools">
        <div className=" d-flex my-1 justify-content-center  p-4">
          <h1
            className="px-4 py-1"
            style={{
              fontWeight: "bolder",
            }}
          >
            Tools
          </h1>
        </div>
      </div>
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
          <div className="col">
            <div
              className="px-3 py-2 m-3"
              style={{
                backgroundColor: "rgb(83, 131, 150)",
                borderRadius: "30px",

                boxShadow: " 0px 0px 10px white",
              }}
            >
              <img
                src="/image/vscode.png"
                className=" img-fluid rounded "
                alt="Award"
                style={{ backgroundColor: "transparent" }}
              />
              <h5
                className="m-1"
                style={{ fontWeight: "bold", color: "rgb(34, 33, 43)" }}
              >
                VS Code
              </h5>
            </div>
          </div>
          <div className="col">
            <div
              className="px-3 py-4 m-3"
              style={{
                backgroundColor: "rgb(83, 131, 150)",
                borderRadius: "30px",

                boxShadow: " 0px 0px 10px white",
              }}
            >
              <img
                src="/image/git.png"
                className=" img-fluid rounded "
                alt="Award"
                style={{ backgroundColor: "transparent" }}
              />
              <h5
                className=" py-3"
                style={{ fontWeight: "bold", color: "rgb(34, 33, 43)" }}
              >
                Git
              </h5>
            </div>
          </div>
          <div className="col">
            <div
              className="px-3 py-2 m-3"
              style={{
                backgroundColor: "rgb(83, 131, 150)",
                borderRadius: "30px",

                boxShadow: " 0px 0px 10px white",
              }}
            >
              <img
                src="/image/postman.png"
                className=" img-fluid rounded "
                alt="Award"
                style={{ backgroundColor: "transparent" }}
              />
              <h5
                className="m-1"
                style={{ fontWeight: "bold", color: "rgb(34, 33, 43)" }}
              >
                Postman
              </h5>
            </div>
          </div>
          <div className="col">
            <div
              className="px-3 py-2 m-3"
              style={{
                backgroundColor: "rgb(83, 131, 150)",
                borderRadius: "30px",

                boxShadow: " 0px 0px 10px white",
              }}
            >
              <img
                src="/image/canva.jpg"
                className=" img-fluid rounded "
                alt="Award"
                style={{ backgroundColor: "transparent" }}
              />
              <h5
                className="m-1"
                style={{ fontWeight: "bold", color: "rgb(34, 33, 43)" }}
              >
                Canva
              </h5>
            </div>
          </div>
          <div className="col">
            <div
              className="px-3 py-2 m-3"
              style={{
                backgroundColor: "rgb(83, 131, 150)",
                borderRadius: "30px",

                boxShadow: " 0px 0px 10px white",
              }}
            >
              <img
                src="/image/Netlify.png"
                className=" img-fluid rounded "
                alt="Award"
                style={{ backgroundColor: "transparent" }}
              />
              <h5
                className="m-1"
                style={{ fontWeight: "bold", color: "rgb(34, 33, 43)" }}
              >
                Netlify
              </h5>
            </div>
          </div>
          <div className="col">
            <div
              className="px-3 py-2 m-3"
              style={{
                backgroundColor: "rgb(83, 131, 150)",
                borderRadius: "30px",

                boxShadow: " 0px 0px 10px white",
              }}
            >
              <img
                src="/image/render.png"
                className=" img-fluid rounded "
                alt="Award"
                style={{ backgroundColor: "transparent" }}
              />
              <h5
                className="m-1"
                style={{ fontWeight: "bold", color: "rgb(34, 33, 43)" }}
              >
                Render
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
