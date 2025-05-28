import React, { useState } from 'react';
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

const ActivitiesSection = styled.section`
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
  }
`;

const ActivitiesRow = styled.div`
  display: flex;
  gap: 30px;
  overflow-x: auto;
  padding: 20px 0;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  -ms-overflow-style: auto;
  width: 100%;
  margin: 0 -20px;
  padding: 20px;
  
  &::-webkit-scrollbar {
    height: 8px;
    display: block;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #6c63ff;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #4a45b3;
  }
`;

const ActivityCard = styled.div`
  min-width: 300px;
  height: 400px;
  perspective: 1000px;
  scroll-snap-align: start;
  animation: ${fadeInUp} 0.5s ease;
  animation-fill-mode: both;
  animation-delay: ${props => props.delay}s;
  flex: 0 0 auto;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  transform: ${props => props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const CardFront = styled(CardFace)`
  background: white;
  display: flex;
  flex-direction: column;
`;

const CardBack = styled(CardFace)`
  background: linear-gradient(135deg, #6c63ff 0%, #4a45b3 100%);
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  color: white;
`;

const ActivityImage = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const ActivityContent = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ActivityTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 10px;
`;

const ActivityDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 15px;
`;

const ActivityMeta = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
`;

const ActivityBadge = styled.span`
  background: rgba(108, 99, 255, 0.1);
  color: #6c63ff;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
`;

const BackTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: white;
`;

const BackDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.9);
`;

const BackLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 10px 25px;
  border: 2px solid white;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: #6c63ff;
  }
`;

const Activities = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const activities = [
    {
      title: 'Marian Proficiency Award 2024–2025',
      description: 'Awarded the Marian Proficiency Award for achieving an SGPA of 9.08 in the MCA program at Marian College, Kuttikkanam.',
      backDescription: 'Recognized for academic excellence, continuous learning, and dedication to tech, AI, and data science.',
      image: './activities/marian-award.jpg',
      type: 'Achievement',
      date: '2025',
      link: 'https://www.linkedin.com/posts/activity-7307026388413308928-KUyg?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAADzXF1QBpb5gUXLMlqQHydCnYJmO8Jugu4E&utm_campaign=copy_link', // Add certificate or announcement link if available
      delay: 0.1
    },
    {
      title: 'National Seminar Presentation – AI for Medical Waste',
      description: 'Presented a paper on "AI-Driven Medical Waste Classification" at the National Seminar 2025 hosted by Marian Institute of Management.',
      backDescription: 'Explored AI solutions for sustainable waste management and circular economy practices.',
      image: './activities/seminar-presentation.jpg',
      type: 'Research',
      date: '2025',
      link: 'https://www.linkedin.com/posts/activity-7295421997222621184-p3qx?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAADzXF1QBpb5gUXLMlqQHydCnYJmO8Jugu4E&utm_campaign=copy_link', // Add conference proceedings or paper link if any
      delay: 0.2
    },
    {
      title: 'Graph Theory in Deadlock Detection – Video Presentation',
      description: "Released my first academic video on Graph Theory's application in deadlock detection, featured on Marian College's official YouTube channel.",
      backDescription: 'Explained deadlock handling using graph theory, real-world examples, and prevention strategies in OS.',
      image: './activities/graph-theory-video.jpeg',
      type: 'Presentation',
      date: '2024',
      link: 'https://youtu.be/tsMfnCAx5U0?si=3weM-DXLrQmMzBeX', // Replace with actual link
      delay: 0.3
    },
    {
      title: 'Django Session for BCA Students',
      description: 'Conducted a hands-on session on Django project creation for BCA students at Assumption Autonomous College.',
      backDescription: 'Shared practical Django insights and project tips as part of an extension activity from Marian College.',
      image: './activities/django-session.jpg',
      type: 'Teaching',
      date: '2024',
      link: 'https://www.linkedin.com/posts/activity-7295426555709648896-HIV7?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAADzXF1QBpb5gUXLMlqQHydCnYJmO8Jugu4E&utm_campaign=copy_link', // Add drive link or article if available
      delay: 0.4
    },
    {
      title: 'International Workshop – Data Visualization & Analytics',
      description: 'Completed an international workshop on Data Visualization using Excel, Power BI, Tableau, and Generative AI.',
      backDescription: 'Gained practical exposure to data analytics tools and techniques from global instructors.',
      image: './activities/data-viz-workshop.jpeg',
      type: 'Training',
      date: '2024',
      link: 'https://www.linkedin.com/posts/activity-7219365632243335168-wF3O?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAADzXF1QBpb5gUXLMlqQHydCnYJmO8Jugu4E&utm_campaign=copy_link', // Add certificate link if available
      delay: 0.5
    }
  ];  

  const handleCardClick = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <ActivitiesSection id="activities">
      <Container>
        <SectionTitle>Activities & Achievements</SectionTitle>
        <ActivitiesRow>
          {activities.map((activity, index) => (
            <ActivityCard 
              key={index} 
              delay={activity.delay}
              onClick={() => handleCardClick(index)}
            >
              <CardInner isFlipped={flippedCards[index]}>
                <CardFront>
                  <ActivityImage>
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x200?text=${encodeURIComponent(activity.title)}`;
                      }}
                    />
                  </ActivityImage>
                  <ActivityContent>
                    <div>
                      <ActivityTitle>{activity.title}</ActivityTitle>
                      <ActivityDescription>{activity.description}</ActivityDescription>
                    </div>
                    <ActivityMeta>
                      <ActivityBadge>{activity.type}</ActivityBadge>
                      <ActivityBadge>{activity.date}</ActivityBadge>
                    </ActivityMeta>
                  </ActivityContent>
                </CardFront>
                <CardBack>
                  <BackTitle>{activity.title}</BackTitle>
                  <BackDescription>{activity.backDescription}</BackDescription>
                  <BackLink 
                    href={activity.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </BackLink>
                </CardBack>
              </CardInner>
            </ActivityCard>
          ))}
        </ActivitiesRow>
      </Container>
    </ActivitiesSection>
  );
};

export default Activities; 
