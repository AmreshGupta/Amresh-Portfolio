import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const socialLinks = [
  {
    name: "Linkedin",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    link: "https://www.linkedin.com/in/amresh-kumar-481a2424b/",
  },
  {
    name: "Github",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    link: "https://github.com/AmreshGupta",
  },
  {
    name: "Leetcode",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    link: "https://leetcode.com/u/Amresh8292/",
  },
  {
    name: "Codechef",
    icon: "https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.png",
    link: "https://www.codechef.com/users/kumargupta5424",
  },
  {
    name: "Email",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
    link: "mailto:kumargupta5424@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
    link: "https://wa.me/917654526860",
  },
];

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ywki3v1", //service key
        "template_bmnkt0p", // Template ID
        form.current,
        "4KfZFQl0zlacdasj0" // Public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          alert("Something went wrong!");
          console.log(error.text);
        }
      );
  };
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
      <div id="Contact">
        <div className=" d-flex my-3 justify-content-center  p-3">
          <h1
            className="px-4 py-1"
            style={{
              fontWeight: "bolder",
            }}
          >
            Contact Me
          </h1>
        </div>
      </div>
      {/* Image aur Form ko ek row me side-by-side kar diya */}
      <div className="container my-4">
        <div className="row align-items-center">
          {/* Left side image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <div
              className="mx-auto mx-5 p-1"
              style={{
                maxWidth: "40vw",
                height: "inharit",
                overflow: "hidden",
              }}
            >
              <img
                src="/image/whatsappQR.png"
                className="img-fluid"
                style={{
                  objectFit: "cover",
                  height: "inharit",
                  width: "20vw",
                  boxShadow: "0px 0px 8px black",
                }}
                alt="emailbox"
              />
            </div>
            {/* icon liya hai */}
            <div className="container my-4">
              <a
                className="px-2 blink"
                style={{ color: "black" }}
                href="https://github.com/AmreshGupta"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
              <a
                className="px-4 blink"
                style={{ color: "black" }}
                href="https://www.linkedin.com/in/amresh-kumar-481a2424b/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            </div>
            {/* icon in dono ke bich me */}
          </div>

          {/* Right side form */}
          <div className="col-md-6">
            <div
              className="my-3"
              style={{
                backgroundColor: "rgba(182, 222, 238, 0.8)",
                borderRadius: "20px",
                maxWidth: "100%",
                maxHeight: "fit-content",
                boxShadow: "0px 0px 6px black",
              }}
            >
              {/* yeha me link add kar rha hu */}
              {/* return ( */}
              <div className="container py-4">
                <div className="row px-5 py-4 g-3">
                  {socialLinks.map((item, index) => (
                    <div className="col-12 col-md-6" key={index}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                        style={{ color: "black" }}
                      >
                        <div className="social-card">
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="icon-img"
                          />
                          <span className="social-text"> {item.name}</span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              {/* ); */}
              {/* isake bich me */}
              <form
                ref={form}
                onSubmit={sendEmail}
                className="mx-auto py-3 pb-3 px-5"
                style={{
                  maxWidth: "100%",
                }}
              >
                {/* Name */}
                <div className="m-2">
                  <input
                    name="name"
                    type="text"
                    className="form-control p-2"
                    id="name"
                    placeholder="Enter your name"
                    required
                    style={{
                      textTransform: "capitalize",
                      backgroundColor: "rgba(145, 171, 180, 1)",
                      border: "2px solid gray",
                      fontWeight: "bolde",
                    }}
                  />
                </div>

                {/* Email + Phone */}
                <div className="row mb-2 p-2">
                  <div className="col-md-6 my-1">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                      style={{
                        textTransform: "capitalize",
                        backgroundColor: "rgba(145, 171, 180, 1)",
                        border: "2px solid gray",
                        fontWeight: "bolde",
                      }}
                    />
                  </div>
                  <div className="col-md-6 my-1">
                    <input
                      name="phone"
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter your phone number"
                      required
                      style={{
                        textTransform: "capitalize",
                        backgroundColor: "rgba(145, 171, 180, 1)",
                        border: "2px solid gray",
                        fontWeight: "bolde",
                      }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="m-2">
                  <textarea
                    name="Message"
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Write your message"
                    required
                    style={{
                      textTransform: "capitalize",
                      backgroundColor: "rgba(145, 171, 180, 1)",
                      border: "2px solid gray",
                      fontWeight: "bolde",
                    }}
                  ></textarea>
                </div>

                {/* Submit Button (small, right side) */}
                <div className="d-flex justify-content-end p-2 ">
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "rgb(83, 131, 150)",
                      boxShadow: "1px -1px 4px black",
                      fontWeight: "bolder",
                      fontSize: "large",
                    }}
                    className="btn btn-sm p-2"
                  >
                    Send Query
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
