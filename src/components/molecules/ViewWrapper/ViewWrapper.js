import styled from 'styled-components';
import { devices } from 'assets/styles/device';

export const ViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media ${devices.tablet} {
    box-shadow: 0px 0px 7px 1px rgba(66, 68, 90, 1);
    border-radius: 20px;
    width: 700px;
    margin: 100px auto;
    padding: 50px;
  }
  @media ${devices.tabletM} {
    width: 850px;
    padding: 50px;
  }
`;
