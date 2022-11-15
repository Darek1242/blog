import React from 'react';
import { LinksMenu, StyledLink, Container } from './LeftNavigation.styles';
import Logo from 'assets/images/logoCM.png';

const LeftNavigation = ({ open }) => {
  return (
    <LinksMenu open={open}>
      <img src={Logo} alt="logo" />
      <Container>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="aboutus">About us</StyledLink>
        <StyledLink to="blog">Blog</StyledLink>
        <StyledLink>Contact</StyledLink>
      </Container>
    </LinksMenu>
  );
};

export default LeftNavigation;
