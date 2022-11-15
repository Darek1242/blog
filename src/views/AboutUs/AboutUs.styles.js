import styled from 'styled-components';
import { devices } from 'assets/styles/device';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { Content } from 'components/atoms/Content/Content';

export const Wrapper = styled(ViewWrapper)`
  @media ${devices.laptopM} {
    ${Title} {
      font-size: ${({ theme }) => theme.fontSize.xxxl};
    }
    ${Content} {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`;
