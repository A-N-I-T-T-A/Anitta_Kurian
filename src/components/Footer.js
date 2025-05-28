import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 50px 20px 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #fff;
`;

const FooterLink = styled.a`
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #6c63ff;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const SocialLink = styled.a`
  color: #ccc;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #6c63ff;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #ccc;
  font-size: 0.9rem;
`;

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterSection>
      <Container>
        <FooterGrid>
          <FooterColumn>
            <FooterTitle>Navigation</FooterTitle>
            <FooterLink href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
              About
            </FooterLink>
            <FooterLink href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
              Skills
            </FooterLink>
            <FooterLink href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
              Projects
            </FooterLink>
            <FooterLink href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Contact
            </FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Connect</FooterTitle>
            <FooterLink 
              href="https://linkedin.com/in/anittakurian" 
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </FooterLink>
            <FooterLink 
              href="https://github.com/A-N-I-T-T-A" 
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </FooterLink>
            <FooterLink href="mailto:anitta6238@gmail.com">
              Email
            </FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Resources</FooterTitle>
            <FooterLink 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Follow Me</FooterTitle>
            <SocialLinks>
              <SocialLink href="https://www.linkedin.com/in/anittakurian" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </SocialLink>
              <SocialLink href="https://github.com/A-N-I-T-T-A" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </SocialLink>
              <SocialLink href="mailto:anitta6238@gmail.com">
                <i className="fas fa-envelope"></i>
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
        </FooterGrid>

        <Copyright>
          © {new Date().getFullYear()} Anitta Kurian. All rights reserved.
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer; 