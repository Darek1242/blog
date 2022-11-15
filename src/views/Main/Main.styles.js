import styled from 'styled-components';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';
import { devices } from 'assets/styles/device';

export const Wrapper = styled(ViewWrapper)`
  ${Button} {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  Button:active {
    transform: scale(0.8);
  }
  @media ${devices.laptopM} {
    Button:active {
      transform: scale(0.9);
    }
    Button:hover {
      box-shadow: 0px 0px 20px -4px rgba(66, 68, 90, 1);
    }
  }
`;

export const MainTitle = styled.h1`
  font-family: 'Cyrvetica Extra Outline';
  font-size: 3.5rem;
  padding: 10px 0;
  @media ${devices.laptopM} {
    font-size: 4.5rem;
  }
`;
export const SubTitle = styled.p`
  font-family: 'Teko', sans-serif;
  font-size: 2.3rem;
  text-decoration: underline;
  line-height: 110%;
  margin-right: 50px;
  padding: 10px 0px;
  @media ${devices.laptopM} {
    font-size: 3rem;
  }
`;
export const MainContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 20px 0;
  @media ${devices.laptopM} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
