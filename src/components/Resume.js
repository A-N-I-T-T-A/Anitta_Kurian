import React from 'react';
import styled from 'styled-components';

const ResumeSection = styled.section`
  padding: 100px 20px;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 50px;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: #6c63ff;
  }
`;

const ResumeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ResumeColumn = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const ColumnTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 10px;

  i {
    color: #6c63ff;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 30px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: #6c63ff;
    opacity: 0.3;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 30px;

  &:before {
    content: '';
    position: absolute;
    left: -34px;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #6c63ff;
  }
`;

const TimelineTitle = styled.h4`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 5px;
`;

const TimelineSubtitle = styled.h5`
  font-size: 1rem;
  color: #6c63ff;
  margin-bottom: 10px;
`;

const TimelineDate = styled.span`
  font-size: 0.9rem;
  color: #666;
  display: block;
  margin-bottom: 10px;
`;

const TimelineCGPA = styled.span`
  display: inline-block;
  background: rgba(108, 99, 255, 0.1);
  color: #6c63ff;
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  margin: 8px 0;
`;

const TimelineDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #6c63ff;
  color: white;
  padding: 12px 25px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  margin-top: 30px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a45b3;
  }

  i {
    font-size: 1.2rem;
  }
`;

const Resume = () => {
  const education = [
    {
      title: 'Master of Computer Applications',
      institution: 'Marian College, Kuttikkanam',
      date: '2024 - 2026',
      CGPA: '9.4',
      description: 'Specialized in Data Science, Machine Learning and Artificial Intelligence.'
    },
    {
      title: 'Bachelor of Computer Applications',
      institution: 'Assumption College, Changanacherry',
      date: '2020 - 2023',
      CGPA: '9.5',
      description: 'Focused on Software Development and Database Management.'
    }
  ];

  const experience = [
    {
      title: 'Data Science Intern',
      company: 'Cognifyz Technologies',
      date: 'Feb 2025 - Mar 2025',
      description: 'Hands on experience in Data Science and Machine Learning using Python and libraries like Numpy, Pandas, Scikit-learn, Matplotlib.'
    },
    {
      title: 'Python Developer(Trainee)',
      company: 'Altos Technologies',
      date: 'Sep 2023 - Jan 2024',
      description: 'Developed a Training Management System using Python and Django. Contributed to a live accounting project called Vyapar.'
    } 
  ];

  return (
    <ResumeSection id="resume">
      <Container>
        <SectionTitle>Resume</SectionTitle>
        <ResumeContent>
          <ResumeColumn>
            <ColumnTitle>
              <i className="fas fa-graduation-cap"></i>
              Education
            </ColumnTitle>
            <Timeline>
              {education.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <TimelineSubtitle>{item.institution}</TimelineSubtitle>
                  <TimelineDate>{item.date}</TimelineDate>
                  <TimelineCGPA>CGPA: {item.CGPA}</TimelineCGPA>
                  <TimelineDescription>{item.description}</TimelineDescription>
                </TimelineItem>
              ))}
            </Timeline>
          </ResumeColumn>

          <ResumeColumn>
            <ColumnTitle>
              <i className="fas fa-briefcase"></i>
              Experience
            </ColumnTitle>
            <Timeline>
              {experience.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <TimelineSubtitle>{item.company}</TimelineSubtitle>
                  <TimelineDate>{item.date}</TimelineDate>
                  <TimelineDescription>{item.description}</TimelineDescription>
                </TimelineItem>
              ))}
            </Timeline>
          </ResumeColumn>
        </ResumeContent>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <DownloadButton 
            href="https://drive.google.com/file/d/1H6kqV6wONRqZyKjmlOQ6_lDlXJcQtJUB/view?usp=drive_link" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-download"></i>
            Download Full Resume
          </DownloadButton>
        </div>
      </Container>
    </ResumeSection>
  );
};

export default Resume; 