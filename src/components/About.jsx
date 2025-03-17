import React from "react";
import "./About.css"; 
import dp from '../assets/dp.jpeg'
import { FaDownload } from "react-icons/fa";
import pdf from "../assets/Tharushi_Madubhashinie_CV_March.pdf"

const About = () => {
  return (
    <section id="about">
      <div>
        <h2>About Me</h2>
        <p>
          Hi! I'm Tharushi Madubhashinie.
          I am a second-year software engineering undergraduate at the University of Westminster with a
strong passion for software development and full-stack technologies. Enthusiastic about building
efficient systems and continuously expanding my knowledge through academic studies and
hands-on projects. 
        </p>
        <a href={pdf} download className="download-btn">
      <FaDownload />
      Download Resume
    </a>
    
      </div>
      <img src={dp} alt="Tharushi Madubhashinie" />
    </section>
  );
};

export default About;
