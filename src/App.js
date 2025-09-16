import "./App.css";
import Navebar from "./component/Navebar";
import Home from "./component/Home";
import About from "./component/About";
import Skill from "./component/Skill";
import Tools from "./component/Tools";
import Academic from "./component/Academic";
import Project from "./component/Project";
import Contact from "./component/Contact";

// import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Navebar />

      <Home />
      <About />
      <Skill />
      <Tools />
      <Project />
      <Academic />

      <Contact />

      <footer
        className="bg-dark d-flex justify-content-center py-2"
        style={{ color: "whitesmoke", fontFamily: "serif,system-ui,cursive" }}
      >
        {" "}
        <h6>Designed and build by Amresh Kumar, 2025 © All rights reserved.</h6>
      </footer>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
