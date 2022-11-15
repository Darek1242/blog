import styled from 'styled-components';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { Content } from 'components/atoms/Content/Content';
import { devices } from 'assets/styles/device';

export const Wrapper = styled(ViewWrapper)`
  align-items: center;
  h3 {
    padding: 0 10px;
  }
  img {
    width: 300px;
    border-radius: 25px 25px 0 0;
  }
  ${Title} {
    padding: 10px;
  }
  ${Content} {
    padding: 10px;
  }

  @media ${devices.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 720px;
  }

  @media ${devices.tabletM} {
    width: 900px;
    justify-content: space-around;
  }
  @media ${devices.laptopM} {
    padding: 15px;
    overflow-y: scroll;
    width: 1200px;
    height: 700px;
    justify-content: space-around;
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.Latte};
      border: 5px solid transparent;
      border-radius: 8px;
      background-clip: padding-box;
    }
    &::-webkit-scrollbar {
      width: 16px;
    }
    /* &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    } */
    /* &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.Latte};
      border-radius: 10px;
    } */
  }
`;

export const ArticleWrapper = styled.div`
  margin: 25px 0px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0px 0px 7px 1px rgba(66, 68, 90, 1);
  border-radius: 25px;
  width: 300px;
  height: 350px;
`;
