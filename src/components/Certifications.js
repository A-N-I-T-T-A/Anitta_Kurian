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

const CertificationsSection = styled.section`
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

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  padding: 20px 0;
`;

const CertificateCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.5s ease;
  animation-fill-mode: both;
  animation-delay: ${props => props.delay}s;
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(108, 99, 255, 0.1);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #6c63ff, #4a45b3);
  }
`;

const CertificateContent = styled.div`
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CertificateTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 15px;
  line-height: 1.4;
  transition: color 0.3s ease;

  ${CertificateCard}:hover & {
    color: #6c63ff;
  }
`;

const Issuer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  color: #666;
  font-size: 0.95rem;

  i {
    color: #6c63ff;
    font-size: 1.1rem;
  }
`;

const Date = styled.span`
  color: #6c63ff;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-block;
  padding: 4px 12px;
  background: rgba(108, 99, 255, 0.1);
  border-radius: 20px;
  margin-bottom: 20px;
  align-self: flex-start;
`;

const CertificateLink = styled.a`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #6c63ff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 20px;
  background: rgba(108, 99, 255, 0.05);
  align-self: flex-start;

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

const Certifications = () => {
  const certificates = [
    {
      title: 'Data Analysis Using Python- IBM Badge',
      issuer: 'IBM',
      date: 'May 2025',
      link: 'https://www.credly.com/badges/69fe3d51-6ba2-4651-b2dc-d45f614d4fc5/linked_in_profile',
      delay: 0.1
    },
    {
      title: 'Python 101 for Data Science',
      issuer: 'Cognitive Class',
      date: 'May 2025',
      link: 'https://courses.cognitiveclass.ai/certificates/fb779f94100948f8a8591cf3986032ea',
      delay: 0.2
    },
    {
      title: 'Machine Learning with Python',
      issuer: 'Cognitive Class',
      date: 'March 2025',
      link: 'https://courses.cognitiveclass.ai/certificates/87a262428b47492c967fb996025f1953',
      delay: 0.3
    },
    {
      title: 'Data Science Tools - IBM Badge',
      issuer: 'IBM',
      date: 'August 2024',
      link: 'https://www.credly.com/badges/4d824868-081d-47df-be5a-1db740cfbe48/linked_in_profile',
      delay: 0.4
    },
    {
      title: 'Data Science Methodology',
      issuer: 'Cognitive Class',
      date: 'October 2024',
      link: 'https://courses.cognitiveclass.ai/certificates/24c84fc434fd44cd8e92612263696359',
      delay: 0.5
    },
    {
      title: 'Python for Data Science and AI - IBM Badge',
      issuer: 'Coursera',
      date: 'July 2023',
      link: 'https://www.credly.com/badges/d1e178c5-24b9-4d36-adde-9e9a52be8c00/linked_in_profile',
      delay: 0.6
    }
  ];

  return (
    <CertificationsSection id="certifications">
      <Container>
        <SectionTitle>Certifications</SectionTitle>
        <CertificationsGrid>
          {certificates.map((cert, index) => (
            <CertificateCard key={index} delay={cert.delay}>
              <CertificateContent>
                <CertificateTitle>{cert.title}</CertificateTitle>
                <Issuer>
                  <i className="fas fa-building"></i>
                  {cert.issuer}
                </Issuer>
                <Date>{cert.date}</Date>
                <CertificateLink 
                  href={cert.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                  View Certificate
                </CertificateLink>
              </CertificateContent>
            </CertificateCard>
          ))}
        </CertificationsGrid>
      </Container>
    </CertificationsSection>
  );
};

export default Certifications; 