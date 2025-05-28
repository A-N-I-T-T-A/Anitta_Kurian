import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Activities from './components/Activities';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #ffffff;
    color: #333333;
    line-height: 1.6;
  }

  html {
    scroll-behavior: smooth;
  }
`;

const AppContainer = styled.div`
  overflow-x: hidden;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Activities />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

export default App;
