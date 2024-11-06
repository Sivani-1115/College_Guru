import React from 'react';
import { 
  CourseListWrapper, 
  CourseCard, 
  CourseHeader, 
  HeartIcon, 
  CourseDetails, 
  CourseActions, 
  PrimaryBtn, 
  SecondaryBtn, 
  DownloadBrochure, 
  Tags, 
  Tag 
} from './styledComponents';

const CourseList = ({ courses }) => {
  return (
    <CourseListWrapper>
      <h2>Courses Offered</h2>
      {courses.map((course, index) => (
        <CourseCard key={index}>
          <CourseHeader>
            <h3>{course.title}</h3>
            <HeartIcon>♡</HeartIcon>
          </CourseHeader>
          <CourseDetails>
            <p><strong>Fees (Yearly):</strong> {course.fees}</p>
            {course.examAccepted && (
              <p><strong>Exam Accepted:</strong> {course.examAccepted}</p>
            )}
            <p><strong>Number of courses:</strong> {course.numCourses}</p>
          </CourseDetails>
          <CourseActions>
            <PrimaryBtn>Talk to our Experts</PrimaryBtn>
            <SecondaryBtn>Get Free Counselling</SecondaryBtn>
          </CourseActions>
          <DownloadBrochure href="#">Download Brochure</DownloadBrochure>
          <Tags>
            {course.tags.map((tag, tagIndex) => (
              <Tag key={tagIndex}>{tag}</Tag>
            ))}
          </Tags>
        </CourseCard>
      ))}
    </CourseListWrapper>
  );
};

export default CourseList;
