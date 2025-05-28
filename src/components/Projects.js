import React, { useState, useEffect } from 'react';
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

const ProjectsSection = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
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
  position: relative;
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

const ProjectsContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 20px 60px;
  margin: 0 -20px;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const ProjectsRow = styled.div`
  display: flex;
  gap: 30px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 20px 0;
  animation: ${fadeInUp} 1s ease;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 350px;
  flex: 0 0 calc(50% - 15px);
  animation: ${fadeInUp} 0.5s ease;
  animation-fill-mode: both;
  animation-delay: ${props => props.delay}s;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(108, 99, 255, 0.1);
  }

  @media (max-width: 1200px) {
    min-width: 300px;
    flex: 0 0 calc(50% - 15px);
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 10;
  transition: all 0.3s ease;
  color: #6c63ff;
  font-size: 1.2rem;

  &:hover {
    background: #6c63ff;
    color: white;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 25px rgba(108, 99, 255, 0.3);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  &.prev {
    left: 0;
  }

  &.next {
    right: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f8f9fa;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${ProjectCard}:hover &:after {
    opacity: 1;
  }
`;

const ProjectContent = styled.div`
  padding: 30px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
  transition: color 0.3s ease;

  ${ProjectCard}:hover & {
    color: #6c63ff;
  }
`;

const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const TechBadge = styled.span`
  background: rgba(108, 99, 255, 0.1);
  color: #6c63ff;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(108, 99, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled.a`
  color: #6c63ff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 20px;
  background: rgba(108, 99, 255, 0.05);

  &:hover {
    background: rgba(108, 99, 255, 0.1);
    transform: translateX(5px);
  }

  i {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  &:hover i {
    transform: translateX(3px);
  }
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#6c63ff' : 'rgba(108, 99, 255, 0.2)'};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background: ${props => props.active ? '#6c63ff' : 'rgba(108, 99, 255, 0.4)'};
    transform: scale(1.2);
  }
`;

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const projects = [
    {
      title: 'MentorQuest – Skill-Based Mentorship Platform',
      description: 'Designed and developed a full-stack platform that connects mentees to mentors through skill-matching, scheduling, payments, and dashboards. Solves the real-world problem of fragmented mentoring systems by offering structured, personalized experiences.',
      image: './projects/mentorquest.png',
      techStack: ['React', 'Django REST Framework', 'PostgreSQL', 'JWT', 'Razorpay', 'Google OAuth'],
      github: ['https://github.com/A-N-I-T-T-A/MentorQuest_Frontend','https://github.com/A-N-I-T-T-A/MentorQuest_Backend'],
      demo: 'https://a-n-i-t-t-a.github.io/MentorQuest_Frontend/',
      delay: 0.2
    },    
    {
      title: 'Loan Default Prediction Web App',
      description: 'Built a Flask-based web application that uses Logistic Regression to predict loan approval status based on user financial data. Achieved 90% accuracy with real-time model result display and a clean Bootstrap UI.',
      image: './projects/loan-default-prediction.png',
      techStack: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'HTML', 'CSS', 'Bootstrap', 'Joblib'],
      github: 'https://github.com/A-N-I-T-T-A/Loan_Risk_Assessment.git',
      demo: 'https://loan-risk-assessment-ymdw.onrender.com/',
      delay: 0.3
    }, 
    {
      title: 'Credit Card Fraud Detection – KNN',
      description: 'Developed a fraud detection system using K-Nearest Neighbors that identifies suspicious credit card transactions based on time, amount, and behavior patterns. Includes a user-friendly Flask interface and dynamic prediction display.',
      image: './projects/fraud-detection-knn.png',
      techStack: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'Bootstrap', 'Joblib'],
      github: 'https://github.com/A-N-I-T-T-A/Credit_card_fraud_detection.git',
      demo: 'https://credit-card-fraud-detection-5s04.onrender.com/',
      delay: 0.4
    },    
    {
      title: 'Battery Life Estimator – Polynomial Regression',
      description: 'Created a model to predict battery health percentage based on charge cycles using Polynomial Regression (degree=3). Deployed with Flask, the app delivers interactive, real-time predictions with 99% test accuracy.',
      image: './projects/battery-life-estimation.png',
      techStack: ['Python', 'Flask', 'Scikit-learn', 'Joblib', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/A-N-I-T-T-A/Battery_Life_Estimator.git',
      demo: 'https://battery-life-estimator.onrender.com/',
      delay: 0.5
    },
    {
      title: 'Freelance Earnings Prediction',
      description: 'Built a machine learning model using Multiple Linear Regression to predict freelance income based on country, experience, hours, and platform. Deployed via Flask for interactive web use.',
      image: './projects/freelance-earnings.png',
      techStack: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy', 'Bootstrap'],
      github: 'https://github.com/A-N-I-T-T-A/Freelance_Earnings.git',
      demo: 'https://anitta12.pythonanywhere.com/',
      delay: 0.6
    },
    {
      title: 'Electricity Bill Predictor',
      description: 'My first machine learning project: predicted electricity bills using a Linear Regression model deployed via Flask. Focused on hands-on ML fundamentals and real-world deployment on PythonAnywhere.',
      image: './projects/electricity-bill-predictor.png',
      techStack: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy'],
      github: 'https://github.com/anitta-kurian/electricity-bill-predictor',
      demo: 'https://electricitybillpredictor.onrender.com',
      delay: 0.7
    },
    {
      title: 'DIY-Blog Platform',
      description: 'Full-featured blogging system built with Django. Supports user authentication, CRUD blog posts, comments, user profiles, and admin panel. Deployed on Render.',
      image: './projects/diy-blog.png',
      techStack: ['Django', 'HTML', 'Bootstrap', 'SQLite', 'Render'],
      github: 'https://github.com/A-N-I-T-T-A/DIY_Blog.git',
      demo: 'https://diy-blog.onrender.com/blog/',
      delay: 0.8
    },
    {
      title: 'Training Department Management System',
      description: 'Manages trainees, trainers, schedules, and projects with real-time alerts and department-based allocation logic.',
      image: './projects/training-department.jpeg',
      techStack: ['Django', 'HTML5', 'CSS', 'JavaScript', 'Bootstrap', 'SQL'],
      github: 'https://github.com/A-N-I-T-T-A/Training-Management.git',
      demo: '',
      delay: 0.9
    }            
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev => {
      if (prev <= 0) {
        return Math.ceil(projects.length / 2) - 1;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex(prev => {
      if (prev >= Math.ceil(projects.length / 2) - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const totalSlides = Math.ceil(projects.length / 2);

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsContainer>
          {!isMobile && (
            <>
              <NavigationButton className="prev" onClick={handlePrev} aria-label="Previous projects">
                <i className="fas fa-chevron-left"></i>
              </NavigationButton>
              <NavigationButton className="next" onClick={handleNext} aria-label="Next projects">
                <i className="fas fa-chevron-right"></i>
              </NavigationButton>
            </>
          )}
          <ProjectsRow style={{ transform: isMobile ? 'none' : `translateX(-${currentIndex * 100}%)` }}>
            {projects.map((project, index) => (
              <ProjectCard key={index} delay={project.delay}>
                <ProjectImage>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x200?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack>
                    {project.techStack.map((tech, techIndex) => (
                      <TechBadge key={techIndex}>{tech}</TechBadge>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    <ProjectLink 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                      GitHub
                    </ProjectLink>
                    <ProjectLink 
                      href={project.demo} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsRow>
          {!isMobile && (
            <CarouselDots>
              {Array.from({ length: totalSlides }).map((_, index) => (
                <Dot 
                  key={index}
                  active={index === currentIndex}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to projects ${index * 2 + 1}-${Math.min((index + 1) * 2, projects.length)}`}
                />
              ))}
            </CarouselDots>
          )}
        </ProjectsContainer>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 
