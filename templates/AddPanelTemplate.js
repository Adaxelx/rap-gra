import React from 'react';
import { View, Modal } from 'react-native';
import styled from 'styled-components';
import CloseButton from 'rap-gra/components/CloseButton';

const StyledContainer = styled(View)`
  color: ${({ theme }) => theme.fontColor};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.greenD};
`;

const AddPanelTemplate = ({ children, open, onPress }) => (
  <Modal animationType="slide" visible={open}>
    <StyledContainer>
      <CloseButton onPress={onPress} />
      {children}
    </StyledContainer>
  </Modal>
);

export default AddPanelTemplate;
