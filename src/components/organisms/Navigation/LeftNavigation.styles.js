import styled from 'styled-components';
import { devices } from 'assets/styles/device';
import { NavLink } from 'react-router-dom';

export const LinksMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.Latte};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  transition: transform 0.3s ease-in-out;
  img {
    width: 100px;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media ${devices.tablet} {
    width: 30%;
  }
  @media ${devices.laptopM} {
    transform: translateX(0);
    width: 100%;
    height: 150px;
    background: transparent;
    img {
      width: 150px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  @media ${devices.laptopM} {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 100px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Passion One', cursive;
  padding: 10px 0;
  color: black;
  font-size: 2.5rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s linear;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.hoverLink};
  }
  &:active {
    transform: scale(0.95);
  }
  @media ${devices.mobileL} {
    font-size: 3rem;
    margin-left: 10px;
  }
  @media ${devices.laptopM} {
    padding: 0 20px;
  }
`;
