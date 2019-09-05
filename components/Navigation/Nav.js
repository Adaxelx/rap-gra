import React from 'react';
import { View } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import styled from 'styled-components';
import { Link } from 'react-router-native';

const StyledView = styled(View)`
  width: 100%;
  background-color: ${({ theme }) => theme.greenD};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const StyledText = styled(Paragraph)`
  font-size: 18;
  padding: 5px;
`;

const Nav = () => (
  <StyledView>
    <Link underlayColor="transparent" to="/">
      <StyledText>Home</StyledText>
    </Link>
    <Link underlayColor="transparent" to="/songs">
      <StyledText>Piosenki</StyledText>
    </Link>
    <Link underlayColor="transparent" to="/concerts">
      <StyledText>Koncerty</StyledText>
    </Link>
    <Link underlayColor="transparent" to="/label">
      <StyledText>Wytwórnia</StyledText>
    </Link>
  </StyledView>
);

export default Nav;
