import styled from 'styled-components';
import { devices } from 'assets/styles/device';
import Wave from 'assets/images/wave.svg';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${devices.laptopM} {
    background-image: url(${Wave});
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;
