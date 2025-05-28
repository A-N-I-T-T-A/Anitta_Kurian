import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(108, 99, 255, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(108, 99, 255, 0);
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  position: relative;
  background: url('/activities/marian-award.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  z-index: 2;
  position: relative;
  animation: ${fadeIn} 1s ease;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 80px;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 1rem;
  animation: ${fadeInDown} 1s ease;
  line-height: 1.1;
  letter-spacing: -0.02em;
  font-family: 'Playfair Display', 'Georgia', serif;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: clamp(1.1rem, 2.5vw, 1.8rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  animation: ${fadeInUp} 1s ease 0.2s both;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-weight: 300;
  line-height: 1.4;
  letter-spacing: 0.5px;
`;

const Description = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  animation: ${fadeInUp} 1s ease 0.4s both;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1.5s ease 0.6s both;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const Button = styled.a`
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-size: 1rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  min-width: 160px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover:before {
    left: 100%;
  }

  &.primary {
    background: linear-gradient(135deg, #6c63ff 0%, #5a52d5 100%);
    color: white;
    border: 2px solid transparent;
    box-shadow: 0 8px 25px rgba(108, 99, 255, 0.3);
    animation: ${pulse} 2s infinite;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(108, 99, 255, 0.4);
      background: linear-gradient(135deg, #5a52d5 0%, #4a42c5 100%);
    }

    &:active {
      transform: translateY(-1px);
    }
  }

  &.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: translateY(-1px);
    }
  }
`;

const SocialSection = styled.div`
  animation: ${fadeIn} 2s ease 0.8s both;
`;

const SocialLabel = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const SocialIcon = styled.a`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.8rem;
  transition: all 0.3s ease;
  padding: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${float} 3s ease-in-out infinite;

  &:nth-child(2) {
    animation-delay: -1s;
  }

  &:nth-child(3) {
    animation-delay: -2s;
  }

  &:hover {
    color: #6c63ff;
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 25px rgba(108, 99, 255, 0.3);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: ${fadeIn} 2s ease 1s both;

  &:before {
    content: '';
    display: block;
    width: 2px;
    height: 30px;
    background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.8));
    margin: 0 auto 10px;
    animation: ${float} 2s ease-in-out infinite;
  }

  &:after {
    content: 'Scroll Down';
    display: block;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.8rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    bottom: 20px;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContent>
        <Title>Anitta Kurian</Title>
        <Subtitle>Aspiring Data Scientist | AI Enthusiast | Python Developer</Subtitle>
        <Description>
          Passionate about transforming data into actionable insights and building 
          intelligent solutions that make a difference. Exploring the frontiers of 
          artificial intelligence and machine learning.
        </Description>
        
        <ButtonGroup>
          <Button 
            href="https://drive.google.com/file/d/1H6kqV6wONRqZyKjmlOQ6_lDlXJcQtJUB/view?usp=drive_link"
            className="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </Button>
          <Button 
            href="#contact"
            className="secondary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Connect
          </Button>
        </ButtonGroup>

        <SocialSection>
          <SocialLabel>Connect with me</SocialLabel>
          <SocialLinks>
            <SocialIcon 
              href="https://www.linkedin.com/in/anittakurian"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </SocialIcon>
            <SocialIcon 
              href="https://github.com/A-N-I-T-T-A"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </SocialIcon>
            <SocialIcon 
              href="mailto:anitta6238@gmail.com"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </SocialIcon>
          </SocialLinks>
        </SocialSection>
      </HeroContent>
      
      <ScrollIndicator />
    </HeroSection>
  );
};

export default Hero;