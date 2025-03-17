
import React from 'react';
import './Projects.css';
import code from '../assets/A PROJECT.png';

const Projects = () => {
  return (
    <div className="works-container" id="projects">
      <div className="works-wrapper">
        <div className="works-header">
          <h2>Projects</h2>
          <p>Check out some of my most recent work</p>
        </div>

        <div className="works-grid">
          <div className="project-card" style={{ backgroundImage: `url(${code})` }} >
            <div className="overlay">
              <span>Legal guidance mobile app</span>
              <p>Law Way is a team-developed mobile app providing accessible legal guidance for civil law
issues. It simplifies legal procedures, offers step-by-step legal advice, and helps users find
suitable lawyers. Key features include a chatbot, lawyer booking, and categorized legal
pathways, ensuring easy-to-understand legal assistance for marginalized and low-income
individuals.</p>
              <div className="btn-container">
                <a href="/"><button>Ongoing Project</button></a>
              </div>
            </div>
          </div>

          <div className="project-card" style={{ backgroundImage: `url(${code})` }}>
            <div className="overlay">
              <span>Full-Stack E-Commerce Website</span>
              <p>This full-stack e-commerce website provides a seamless shopping experience for electronic
products, featuring secure authentication, efficient order management, and a user-friendly
interface.</p>
              <div className="btn-container">
                <a href="https://github.com/Madubhashinie/Full-Stack_Project_01"><button>Code</button></a>
              </div>
            </div>
          </div>

          <div className="project-card" style={{ backgroundImage: `url(${code})` }}>
            <div className="overlay">
              <span>Healthcare Application</span>
              <p>This application is used to manage doctor availability and appointment slots, book
              doctors, and get doctor and patient information.</p>
              <div className="btn-container">
                <a href="https://github.com/Madubhashinie/Healthcare-Application"><button>Code</button></a>
              </div>
            </div>
          </div>

          <div className="project-card" style={{ backgroundImage: `url(${code})` }} >
            <div className="overlay">
              <span>Ticket Booking Application</span>
              <p>This application serves as a Real-Time Event Ticketing System, enabling customers to
              purchase tickets from Ticketpool and allowing vendors to add tickets to the Ticketpool.</p>
              <div className="btn-container">
                <a href="https://github.com/Madubhashinie/OOP-CW_w2051854_20231033"><button>Code</button></a>
              </div>
            </div>
          </div>

          <div className="project-card" style={{ backgroundImage: `url(${code})` }}>
            <div className="overlay">
              <span>Webpage for SDG's Goal 14</span>
              <p>Project description</p>
              <div className="btn-container">
                <a href="https://github.com/Madubhashinie/Webpage-for-SDG-s-Goal14"><button>Code</button></a>
              </div>
            </div>
          </div>


          <div className="project-card" style={{ backgroundImage: `url(${code})` }}>
            <div className="overlay">
              <span>Birthday Wish</span>
              <p>Project description</p>
              <div className="btn-container">
                <a href="https://github.com/Madubhashinie/Birthday-Wish"><button>Code</button></a>
              </div>
            </div>
          </div>

          <div className="project-card" style={{ backgroundImage: `url(${code})` }}>
            <div className="overlay">
              <span>Marketing website for Law-Way Mobile application</span>
              <p>Project description</p>
              <div className="btn-container">
                <a href="https://github.com/Madubhashinie/Marketing-website-for-Law-Way-Mobile-application"><button>Code</button></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;

