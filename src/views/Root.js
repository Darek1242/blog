import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Wrapper } from './Root.styles';
import Main from './Main/Main';
import AboutUs from './AboutUs/AboutUs';
import Blog from './Blog/Blog';
import MainTemplates from 'components/templates/MainTemplates/MainTemplates';

const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplates>
        <Wrapper>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="blog" element={<Blog />} />
          </Routes>
        </Wrapper>
      </MainTemplates>
    </ThemeProvider>
  </Router>
);

export default Root;
