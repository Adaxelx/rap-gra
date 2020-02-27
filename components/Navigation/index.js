import React from 'react';
import { View } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import styled from 'styled-components';
import { Link } from 'react-router-native';
import { path } from 'rap-gra/constants/routes';

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

const Navigation = () => {
  const { HOME, SONGS, CONCERTS, LABEL } = path;
  return (
    <StyledView>
      <Link underlayColor="transparent" to={HOME}>
        <StyledText>Home</StyledText>
      </Link>
      <Link underlayColor="transparent" to={SONGS}>
        <StyledText>Piosenki</StyledText>
      </Link>
      <Link underlayColor="transparent" to={CONCERTS}>
        <StyledText>Koncerty</StyledText>
      </Link>
      <Link underlayColor="transparent" to={LABEL}>
        <StyledText>Wytwórnia</StyledText>
      </Link>
    </StyledView>
  );
};

export default Navigation;
