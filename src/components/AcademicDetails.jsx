import React from "react";
import "./AcademicDetails.css";

const AcademicDetails = () => {
  const academicDetails = [
    {
      subject: "Software Development I",
      exams: [
        { name: "Coursework", marks: 70 },
        { name: "In-Class Test", marks: 87 },
      ],
    },
    {
      subject: "Software Development II",
      exams: [
        { name: "Coursework", marks: 74 },
        { name: "In-Class Test", marks: 76 },
      ],
    },
    {
      subject: "Mathematics for Computing",
      exams: [
        { name: "In-Class Test 1", marks: 96 },
        { name: "In-Class Test 2", marks: 96 }
      ],
    },
    {
        subject: "Web Design and Development",
        exams: [
          { name: "Coursework Group", marks: 64 },
          { name: "In-Class Test", marks: 94 },
        ],
      },
      {
        subject: "Computer Systems Fundamentals",
        exams: [
          { name: "In-Class Test 1", marks: 100 },
          { name: "In-Class Test 2", marks: 95 }
        ],
      },
      {
        subject: "Trends in Computer Science",
        exams: [
          { name: "Coursework Group", marks: 53 },
          { name: "Portfolio", marks: 74 }
        ],
      },
     
      {
        subject: "Object Oriented Programming",
        exams: [
          { name: "Exam ", marks: 84 },
          { name: "Lab test", marks: 45.55 },
        ],
      },
      {
        subject: "Database Systems",
        exams: [
          { name: "In-class test", marks: 100 },
          { name: "Coursework Submission", marks: 79.99 },
        ],
      },
      {
        subject: "Software Engineering Principles and Practice",
        exams: [
          { name: "Coursework Submission 1", marks: 77 },
          { name: "Coursework Submission 2", marks: 74 },
        ],
      },
      {
        subject: "Software Development Group Project ",
        exams: [
          { name: "CW 1 report", marks: 58 },
          
        ],
      },
      {
        subject: "Server-Side Web Development",
        exams: [
          
        ],
      },
      {
        subject: "Algorithms: Theory, Design and Implementation",
        exams: [
          
        ],
      },
  ];

  return (
    <section className="academic-container" id="academic">
      <h2>Academic Details</h2>
      <div className="academic-details">
        {academicDetails.map((subjectDetails, index) => (
          <div className="subject-card" key={index}>
            <h3 className="subject-title">{subjectDetails.subject}</h3>
            <ul className="exam-list">
              {subjectDetails.exams.map((exam, examIndex) => (
                <li className="exam-item" key={examIndex}>
                  <span className="exam-name">{exam.name}</span>
                  <span className="exam-marks">{exam.marks} Marks</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicDetails;
