import React from 'react';
import { View, TouchableOpacity, Dimensions, Modal } from 'react-native';
import styled, { css } from 'styled-components';
import { Paragraph } from 'rap-gra/components/Paragraph';

const StyledContainer = styled(Modal)`
  position: absolute;
  color: ${({ theme }) => theme.fontColor};
  ${({ top }) => (top ? 'top:20' : 'bottom:20')};
  left: 20;
  right: 20;
  ${({ top }) => (top ? 'height:90%' : `height: ${Dimensions.get('window').height - 125}px`)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.greenD};

  transform: translateX(-1000px);
  ${({ open }) =>
    open &&
    css`
      transform: translateX(0);
    `};
`;

const StyledCloseButton = styled(TouchableOpacity)`
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
`;

const StyledCurtain = styled(View)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.8;
  transform: translateX(-1000px);
  ${({ open }) =>
    open &&
    css`
      transform: translateX(0);
    `};
`;

const StyledLabel = styled(Paragraph)`
  color: red;
  font-size: 25px;
`;

const AddPanelTemplate = ({ children, visible, onPress }) => (
  <>
    <StyledCurtain />
    <StyledContainer animationType="slide" visible={visible}>
      <StyledCloseButton onPress={onPress} outline>
        <>
          <StyledLabel>X</StyledLabel>
        </>
      </StyledCloseButton>
      {children}
    </StyledContainer>
  </>
);

export default AddPanelTemplate;
