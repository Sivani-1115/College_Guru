import React from 'react';
import './CourseList.css';

const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
      <h2>Courses Offered</h2>
      {courses.map((course, index) => (
        <div className="course-card" key={index}>
          <div className="course-header">
            <h3>{course.title}</h3>
            <div className="heart-icon">♡</div>
          </div>
          <div className="course-details">
            <p><strong>Fees (Yearly):</strong> {course.fees}</p>
            {course.examAccepted && (
              <p><strong>Exam Accepted:</strong> {course.examAccepted}</p>
            )}
            <p><strong>Number of courses:</strong> {course.numCourses}</p>
          </div>
          <div className="course-actions">
            <button className="primary-btn">Talk to our Experts</button>
            <button className="secondary-btn">Get Free Counselling</button>
          </div>
          <a href="#" className="download-brochure">Download Brochure</a>
          <div className="tags">
            {course.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
