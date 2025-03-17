import React from "react";
import "./Contact.css";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p><MdOutlineEmail />  Email: madubhashinietharushi@gmail.com</p>
      <p><AiFillLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/tharushi-madubhashinie-0630b1295/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
      <p><FaGithub />     GitHub: <a href="https://github.com/Madubhashinie" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
    </section>
  );
};

export default Contact;
