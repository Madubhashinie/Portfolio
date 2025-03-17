import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills"
import AcademicDetails from "./components/AcademicDetails";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills/>
      <Projects />
      <AcademicDetails/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
