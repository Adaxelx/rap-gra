import React from 'react';
import { View, TouchableOpacity, Modal } from 'react-native';
import styled from 'styled-components';
import { Paragraph } from 'rap-gra/components/Paragraph';

const StyledContainer = styled(View)`
  color: ${({ theme }) => theme.fontColor};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.greenD};
`;

const StyledCloseButton = styled(TouchableOpacity)`
  background-color: transparent;
  height: 30px;
  width: 30px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLabel = styled(Paragraph)`
  color: red;
  font-size: 25px;
`;

const AddPanelTemplate = ({ children, open, onPress }) => (
  <Modal animationType="slide" visible={open}>
    <StyledContainer>
      <StyledCloseButton onPress={onPress} outline>
        <>
          <StyledLabel>X</StyledLabel>
        </>
      </StyledCloseButton>
      {children}
    </StyledContainer>
  </Modal>
);

export default AddPanelTemplate;
