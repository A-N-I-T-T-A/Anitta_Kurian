import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(108, 99, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(108, 99, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(108, 99, 255, 0);
  }
`;

const SkillsSection = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(#6c63ff 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.05;
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeInUp} 1s ease;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 50px;
  text-align: center;
  position: relative;
  animation: ${fadeInUp} 1s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #6c63ff, #4a45b3);
    animation: ${pulse} 2s infinite;
  }
`;

const SkillsRow = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: nowrap;
  animation: ${fadeInUp} 1s ease;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const SkillCategory = styled.div`
  background: white;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex: 1;
  min-width: 250px;
  max-width: 280px;
  animation: ${fadeInUp} 0.5s ease;
  animation-fill-mode: both;
  animation-delay: ${props => props.delay}s;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(108, 99, 255, 0.1);
  }

  @media (max-width: 1200px) {
    flex: 0 1 calc(50% - 20px);
    max-width: none;
  }

  @media (max-width: 768px) {
    flex: 0 1 100%;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 15px;

  i {
    color: #6c63ff;
    font-size: 1.5rem;
    animation: ${float} 3s ease-in-out infinite;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  color: #666;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 8px 12px;
  border-radius: 10px;
  background: rgba(108, 99, 255, 0.03);

  &:hover {
    background: rgba(108, 99, 255, 0.08);
    transform: translateX(5px);
  }

  i {
    margin-right: 10px;
    color: #6c63ff;
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  &:hover i {
    transform: scale(1.2);
  }
`;

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'fas fa-code',
      skills: ['Python', 'SQL', 'JavaScript', 'Java', 'HTML', 'CSS'],
      delay: 0.1
    },
    {
      title: 'Libraries & Data Analysis',
      icon: 'fas fa-book',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
      delay: 0.2
    },
    {
      title: 'Frameworks & UI',
      icon: 'fas fa-layer-group',
      skills: ['Django', 'Flask', 'React', 'Tkinter'],
      delay: 0.3
    },
    {
      title: 'Tools & Platforms',
      icon: 'fas fa-tools',
      skills: ['Power BI', 'Jupyter Notebook', 'Git & GitHub', 'VS Code', 'Render', 'MySQL'],
      delay: 0.4
    }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <SkillsRow>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} delay={category.delay}>
              <CategoryTitle>
                <i className={category.icon}></i>
                {category.title}
              </CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>
                    <i className="fas fa-check-circle"></i>
                    {skill}
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsRow>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 