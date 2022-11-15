import styled from 'styled-components';
import { devices } from 'assets/styles/device';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${devices.laptopM} {
    flex-direction: row;
    height: 100vh;
  }
`;
