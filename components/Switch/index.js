import React from 'react';
import styled, { css } from 'styled-components';
import { View, TouchableOpacity } from 'react-native';

const StyledView = styled(TouchableOpacity)`
  width: 60px;
  height: 30px;
  border: 2px solid black;
  border-radius: 20px;
  background-color: #ff8f8f;
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.greenL};
    `}
`;

const Ball = styled(View)`
  height: 22px;
  width: 22px;
  background-color: red;
  left: 2px;
  position: absolute;
  top: 2px;
  border-radius: 100px;
  ${({ active }) =>
    active &&
    css`
      background-color: green;
      transform: translateX(30px);
    `}
`;

const Switch = ({ onPress, active }) => (
  <StyledView onPress={onPress} active={active}>
    <Ball active={active} />
  </StyledView>
);

export default Switch;
