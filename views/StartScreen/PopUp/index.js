import React from 'react';
import styled from 'styled-components';
import { Modal, View } from 'react-native';
import CloseButton from 'rap-gra/components/CloseButton';
import { Title } from 'rap-gra/components/Title';
import Form from 'rap-gra/views/StartScreen/Form';
import { Paragraph } from 'rap-gra/components/Paragraph';

const StyledContainer = styled(View)`
  background-color: ${({ theme }) => theme.greenL};
  height: 100%;
  width: 100%;
  padding: 10px 0;
`;

const StyledWarning = styled(Paragraph)`
  color: yellow;
  text-align: center;
`;

const PopUp = ({ open, onPress }) => {
  return (
    <Modal animationType="slide" visible={open}>
      <StyledContainer>
        <CloseButton onPress={onPress} />
        <Title>Stwórz swoją niepowtarzalną postać!</Title>
        <StyledWarning>
          Uwaga! Jeżeli masz już postać zostatnie ona nadpisana przez postać, którą teraz utworzysz!
        </StyledWarning>
        <Form />
      </StyledContainer>
    </Modal>
  );
};

export default PopUp;
