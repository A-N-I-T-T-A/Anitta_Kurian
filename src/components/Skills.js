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
  max-width: 1400px;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  align-items: start;
  animation: ${fadeInUp} 1s ease;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const SkillCategory = styled.div`
  background: white;
  padding: 30px 25px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: ${fadeInUp} 0.5s ease;
  animation-fill-mode: both;
  animation-delay: ${props => props.delay}s;
  border: 1px solid rgba(108, 99, 255, 0.1);

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(108, 99, 255, 0.15);
    border-color: rgba(108, 99, 255, 0.2);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  min-height: 60px;
  align-items: flex-start;
  padding-top: 5px;

  i {
    color: #6c63ff;
    font-size: 1.4rem;
    animation: ${float} 3s ease-in-out infinite;
    flex-shrink: 0;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  color: #666;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  padding: 10px 15px;
  border-radius: 12px;
  background: rgba(108, 99, 255, 0.03);
  border: 1px solid rgba(108, 99, 255, 0.05);
  font-weight: 500;

  &:hover {
    background: rgba(108, 99, 255, 0.08);
    transform: translateX(5px);
    border-color: rgba(108, 99, 255, 0.1);
  }

  i {
    margin-right: 12px;
    color: #6c63ff;
    font-size: 1rem;
    transition: transform 0.3s ease;
    flex-shrink: 0;
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
      title: 'Libraries & ML Frameworks',
      icon: 'fas fa-brain',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
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
      skills: ['Power BI', 'Jupyter Notebook', 'Git & GitHub', 'VS Code', 'Render', 'MySQL', 'PythonAnywhere', 'IBM Watson Studio'],
      delay: 0.4
    },
    {
      title: 'Core Data Skills',
      icon: 'fas fa-chart-line',
      skills: ['Data Preprocessing', 'Model Training & Evaluation', 'Feature Engineering', 'Regression & Classification', 'Cross-validation', 'ML Model Deployment'],
      delay: 0.5
    }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <SkillsGrid>
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
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
