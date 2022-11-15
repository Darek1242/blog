import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.Latte};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 10px -4px rgba(66, 68, 90, 1);
  align-self: flex-end;
  margin-top: 30px;
`;
