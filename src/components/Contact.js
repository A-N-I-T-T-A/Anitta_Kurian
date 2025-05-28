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

const ContactSection = styled.section`
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

const ContactInfo = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  background: white;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  animation: ${fadeInUp} 1s ease 0.2s both;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(108, 99, 255, 0.1);
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #6c63ff, #4a45b3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const InfoText = styled.p`
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
  font-size: 1.1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;

const SocialLink = styled.a`
  color: #6c63ff;
  font-size: 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 15px;
  border-radius: 50%;
  background: rgba(108, 99, 255, 0.05);
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;

  &:hover {
    color: white;
    background: linear-gradient(135deg, #6c63ff, #4a45b3);
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 20px rgba(108, 99, 255, 0.2);
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Let's Connect</SectionTitle>
        <ContactInfo>
          <InfoTitle>Let's Connect</InfoTitle>
          <InfoText>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </InfoText>
          
          <SocialLinks>
            <SocialLink 
              href="https://linkedin.com/in/anittakurian" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              delay="0s"
            >
              <i className="fab fa-linkedin"></i>
            </SocialLink>
            <SocialLink 
              href="https://github.com/A-N-I-T-T-A" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              delay="0.2s"
            >
              <i className="fab fa-github"></i>
            </SocialLink>
            <SocialLink 
              href="mailto:anitta6238@gmail.com"
              aria-label="Email"
              delay="0.4s"
            >
              <i className="fas fa-envelope"></i>
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
      </Container>
    </ContactSection>
  );
};

export default Contact; 