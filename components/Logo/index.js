import React from 'react';
import styled from 'styled-components';
import { View, Image } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';

const StyledView = styled(View)`
  height: 50px;
  background-color: ${({ theme }) => theme.greenD};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  height: 50px;
  width: 50px;
`;
const StyledText = styled(Paragraph)`
  margin-left: 10px;
  font-size: 30px;
  text-transform: uppercase;
`;
const Logo = () => (
  <StyledView>
    <StyledImage source={require('../../assets/logo.png')} />
    <StyledText>Rap-gra</StyledText>
  </StyledView>
);

export default Logo;
