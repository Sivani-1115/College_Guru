import React, { useState } from 'react';
import CourseList from './components/Courses/CourseList';

import './App.css';

function App() {
  const [courses, setCourses] = useState([
    {
      title: 'MCA',
      fees: '₹1,00,000',
      examAccepted: 'NIMCET',
      numCourses: 1,
      tags: ['MCA'],
    },
    {
      title: 'MA',
      fees: '₹52,000',
      numCourses: 1,
      tags: ['MA in English'],
    },
    {
      title: 'Certificate',
      fees: '₹1,500 - 5,000',
      numCourses: 12,
      tags: [
        'Certificate in Java Programming',
        'Certificate in Oracle Database Administration',
      ],
    },
  ]);

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  return (
    <div className="app">
      <h1>Available Course in Our College</h1>
      {/* The AddCourseForm has been removed */}
      <CourseList courses={courses} />
    </div>
  );
}

export default App;
