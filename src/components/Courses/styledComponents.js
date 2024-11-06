import styled from 'styled-components';

export const CourseListWrapper = styled.div`
  padding: 20px;
`;

export const CourseCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
`;

export const CourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeartIcon = styled.div`
  cursor: pointer;
`;

export const CourseDetails = styled.div`
  margin: 10px 0;
`;

export const CourseActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const PrimaryBtn = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;

export const SecondaryBtn = styled.button`
  background-color: white;
  color: #007bff;
  border: 1px solid #007bff;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;

export const DownloadBrochure = styled.a`
  color: #007bff;
  display: block;
  margin-top: 10px;
  text-decoration: none;
`;

export const Tags = styled.div`
  margin-top: 10px;
`;

export const Tag = styled.span`
  background-color: #f0f0f0;
  color: #333;
  padding: 5px 10px;
  margin: 5px 5px 0 0;
  border-radius: 4px;
  display: inline-block;
`;
