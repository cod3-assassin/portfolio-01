import React from "react";
import Navbar from "./components/Navbar";
import {
  About,
  Education,
  Skills,
  Projects,
  Footer,
} from "./components/ImportExport";

const App = () => {
  return (
    <div>
      <Navbar />

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="education">
        <Education />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
