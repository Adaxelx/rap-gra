import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';

const StyledButton = styled(TouchableOpacity)`
  background-color: transparent;
  height: 30px;
  width: 30px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const StyledClose = styled(Paragraph)`
  color: red;
  font-size: 25px;
`;

const CloseButton = ({ onPress }) => (
  <StyledButton outline onPress={onPress}>
    <StyledClose>X</StyledClose>
  </StyledButton>
);

export default CloseButton;
