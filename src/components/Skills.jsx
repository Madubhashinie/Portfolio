import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <div className="skills-wrapper">
        <div className="skills-header">
          <h2>Skills</h2>
          <p>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
        </div>
        
        <div className="skills-grid">
          <div className="skill-card">
            <p>HTML</p>
          </div>
          <div className="skill-card">
            <p>CSS</p>
          </div>
          <div className="skill-card">
            <p>JavaScript</p>
          </div>
          <div className="skill-card">
            <p>React</p>
          </div>
          
          <div className="skill-card">
            <p>Java</p>
          </div>
          <div className="skill-card">
            <p>Python</p>
          </div>
          <div className="skill-card">
            <p>PHP</p>
          </div>
          <div className="skill-card">
            <p>SpringBoot</p>
          </div>
          <div className="skill-card">
            <p>Postman</p>
          </div>
          <div className="skill-card">
            <p>MySQL</p>
          </div>
          <div className="skill-card">
            <p>Mongodb</p>
          </div>
          <div className="skill-card">
            <p>Supabase</p>
          </div>
          <div className="skill-card">
            <p>SQLite</p>
          </div>
          <div className="skill-card">
            <p>Clerk</p>
          </div>
          <div className="skill-card">
            <p>Firebase</p>
          </div>
          <div className="skill-card">
            <p>Git</p>
          </div>
          <div className="skill-card">
            <p>GitHub</p>
          </div>
          <div className="skill-card">
            <p>Figma</p>
          </div>
          <div className="skill-card">
            <p>Node.js</p>
          </div>
          <div className="skill-card">
            <p>Express.js</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
