import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Animation keyframes
const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(108, 99, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(108, 99, 255, 0);
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${slideDown} 0.8s ease;

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 70px;
  }
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 800;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: -0.5px;
  position: relative;
  
  background: linear-gradient(135deg, #6c63ff 0%, #333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.2);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #6c63ff, #5a52d5);
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: #ffffff;
    padding: 30px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    gap: 25px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    animation: ${fadeIn} 0.3s ease;
  }
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 8px 16px;
  border-radius: 25px;
  letter-spacing: 0.5px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(108, 99, 255, 0.1), rgba(108, 99, 255, 0.05));
    border-radius: 25px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    color: #6c63ff;
    transform: translateY(-2px);
    text-shadow: 0 2px 8px rgba(108, 99, 255, 0.3);
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #6c63ff, #5a52d5);
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 80%;
  }

  @media (max-width: 768px) {
    color: #333;
    font-size: 1.1rem;
    padding: 12px 20px;
    width: 100%;
    text-align: center;
    background: rgba(108, 99, 255, 0.05);
    border: 1px solid rgba(108, 99, 255, 0.1);

    &:hover {
      background: rgba(108, 99, 255, 0.1);
      color: #6c63ff;
      transform: scale(1.02);
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: ${({ isOpen }) => 
    isOpen 
      ? 'rgba(108, 99, 255, 0.1)' 
      : 'rgba(0, 0, 0, 0.05)'
  };

  @media (max-width: 768px) {
    display: flex;
  }

  &:hover {
    background: rgba(108, 99, 255, 0.1);
    transform: scale(1.05);
  }

  span {
    width: 28px;
    height: 3px;
    background: #333;
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: center;

    &:nth-child(1) {
      transform: ${({ isOpen }) => 
        isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'rotate(0)'
      };
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'scale(0)' : 'scale(1)'};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => 
        isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'rotate(0)'
      };
    }
  }
`;

const ContactButton = styled.a`
  display: none;
  padding: 10px 25px;
  background: linear-gradient(135deg, #6c63ff 0%, #5a52d5 100%);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.5px;
  border: 2px solid transparent;
  animation: ${pulse} 3s infinite;

  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 25px rgba(108, 99, 255, 0.4);
    background: linear-gradient(135deg, #5a52d5 0%, #4a42c5 100%);
  }

  &:active {
    transform: translateY(0) scale(1.02);
  }

  @media (min-width: 1024px) {
    display: inline-block;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 0;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsOpen(false);
    }
  };

  return (
    <Nav scrolled={scrolled}>
      <Logo 
        href="#" 
        scrolled={scrolled}
        onClick={(e) => { 
          e.preventDefault(); 
          scrollToSection('hero'); 
        }}
      >
        Anitta Kurian
      </Logo>
      
      <NavContainer>
        <NavLinks isOpen={isOpen}>
          <NavLink 
            href="#about" 
            scrolled={scrolled}
            onClick={(e) => { 
              e.preventDefault(); 
              scrollToSection('about'); 
            }}
          >
            About
          </NavLink>
          <NavLink 
            href="#skills" 
            scrolled={scrolled}
            onClick={(e) => { 
              e.preventDefault(); 
              scrollToSection('skills'); 
            }}
          >
            Skills
          </NavLink>
          <NavLink 
            href="#projects" 
            scrolled={scrolled}
            onClick={(e) => { 
              e.preventDefault(); 
              scrollToSection('projects'); 
            }}
          >
            Projects
          </NavLink>
          <NavLink 
            href="#certifications" 
            scrolled={scrolled}
            onClick={(e) => { 
              e.preventDefault(); 
              scrollToSection('certifications'); 
            }}
          >
            Certifications
          </NavLink>
          <NavLink 
            href="#activities" 
            scrolled={scrolled}
            onClick={(e) => { 
              e.preventDefault(); 
              scrollToSection('activities'); 
            }}
          >
            Activities
          </NavLink>
          <NavLink 
            href="#contact" 
            scrolled={scrolled}
            onClick={(e) => { 
              e.preventDefault(); 
              scrollToSection('contact'); 
            }}
          >
            Contact
          </NavLink>
        </NavLinks>

        <ContactButton
          href="#contact"
          onClick={(e) => { 
            e.preventDefault(); 
            scrollToSection('contact'); 
          }}
        >
          Hire Me
        </ContactButton>

        <Hamburger 
          onClick={toggleMenu}
          scrolled={scrolled}
          isOpen={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;