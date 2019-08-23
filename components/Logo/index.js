import React from 'react';
import styled from 'styled-components';
import { View, Image, Text } from 'react-native';

const StyledView = styled(View)`
  height: 50px;
  background-color: #254432;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  height: 50px;
  width: 50px;
`;
const StyledText = styled(Text)`
  color: white;
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
