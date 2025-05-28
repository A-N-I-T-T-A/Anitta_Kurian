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
          <ProfileImage src="./profile.jpg" alt="Anitta Kurian" />
        </ImageContainer>
        <Content>
          <SectionTitle>About Me</SectionTitle>
          <Description>
            I'm <Highlight>Anitta Kurian</Highlight>, a dedicated and passionate tech enthusiast currently pursuing my <Highlight>Master of Computer Applications (MCA)</Highlight> at <Highlight>Marian College, Kuttikkanam</Highlight> (<Highlight>M.G. University</Highlight>), expected to graduate in 2026. With a strong foundation in <Highlight>Python</Highlight>, <Highlight>Django</Highlight>, and <Highlight>data science tools</Highlight>.
          </Description>
          <Description>
            During my training at <Highlight>Altos Technologies</Highlight>, <Highlight>Kochi Infopark</Highlight>, I developed a <Highlight>Training Management System</Highlight> and contributed to a live accounting project called <Highlight>Vyapar</Highlight>.
          </Description>
          <Description>
            I enjoy solving real-world problems through <Highlight>intelligent systems</Highlight>, blending <Highlight>backend development</Highlight> with <Highlight>data science</Highlight> to create meaningful impact.
          </Description>
          <SkillsList>
            <SkillItem>
              <i className="fas fa-check-circle"></i>
              Python & Django Development
            </SkillItem>
            <SkillItem>
              <i className="fas fa-check-circle"></i>
              Data Analysis & Visualization
            </SkillItem>
            <SkillItem>
              <i className="fas fa-check-circle"></i>
              Machine Learning Fundamentals
            </SkillItem>
            <SkillItem>
              <i className="fas fa-check-circle"></i>
              React & Web Technologies
            </SkillItem>
            <SkillItem>
              <i className="fas fa-check-circle"></i>
              SQL & Power BI
            </SkillItem>
            <SkillItem>
              <i className="fas fa-check-circle"></i>
              Git & GitHub
            </SkillItem>
          </SkillsList>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About; 
