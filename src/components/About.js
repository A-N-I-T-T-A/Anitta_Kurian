import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 100px 0;
  background-color: #ffffff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    border: 2px solid #6c63ff;
    z-index: 1;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  position: relative;
  z-index: 2;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Content = styled.div`
  @media (max-width: 768px) {
    order: -1;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: #6c63ff;
  }

  @media (max-width: 768px) {
    &:after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 1.5rem;
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 2rem auto 0;
  }
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #444;
  font-size: 1rem;

  i {
    color: #6c63ff;
  }
`;

const Highlight = styled.span`
  color: #6c63ff;
  font-weight: 600;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #6c63ff;
    opacity: 0.3;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <ImageContainer>
          <ProfileImage src="./profile.jpeg" alt="Anitta Kurian" />
        </ImageContainer>
        <Content>
          <SectionTitle>About Me</SectionTitle>

          <Description>
            I'm <Highlight>Anitta Kurian</Highlight>, an <Highlight>MCA graduate (2026)</Highlight> 
            with a strong foundation in <Highlight>Python, Django, Frappe/ERPNext, SQL, and REST APIs</Highlight>.
          </Description>

          <Description>
            During my internship at <Highlight>Wahni IT Solutions, Kochi</Highlight>, I worked on 
            <Highlight>Frappe/ERPNext development</Highlight>, designing 10+ dynamic print formats, 
            building and testing 5+ REST APIs, and contributing across the software development lifecycle.
          </Description>

          <Description>
            I also gained hands-on development experience at <Highlight>Altos Technologies</Highlight>, 
            where I built a <Highlight>Django-based Training Management System</Highlight> and contributed 
            to live accounting software. I was also awarded the <Highlight>NSP PG Scholarship in April 2026</Highlight>.
          </Description>

          <SkillsList>
            <SkillItem>
              <i className="fas fa-check-circle"></i>
              Python & Backend Development
            </SkillItem>
            <SkillItem>
              <i className="fas fa-check-circle"></i>
              Django & Frappe/ERPNext
            </SkillItem>
            <SkillItem>
              <i className="fas fa-check-circle"></i>
              REST API Development & Testing
            </SkillItem>
            <SkillItem>
              <i className="fas fa-check-circle"></i>
              SQL & Database Management
            </SkillItem>
            <SkillItem>
              <i className="fas fa-check-circle"></i>
              Machine Learning & Data Science
            </SkillItem>
            <SkillItem>
              <i className="fas fa-check-circle"></i>
              Git & Software Development Lifecycle
            </SkillItem>
          </SkillsList>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About; 
