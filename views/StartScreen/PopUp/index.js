import React from 'react';
import styled from 'styled-components';
import { Modal, View } from 'react-native';
import { Title, Paragraph, CloseButton } from 'rap-gra/components';
import Form from 'rap-gra/views/StartScreen/Form';
import AppContext from 'rap-gra/context/context';

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
    <AppContext.Consumer>
      {context => (
        <Modal animationType="slide" visible={open}>
          <StyledContainer>
            <CloseButton onPress={onPress} />
            <Title>Stwórz swoją niepowtarzalną postać!</Title>
            <StyledWarning>
              Uwaga! Jeżeli masz już postać zostatnie ona nadpisana przez postać, którą teraz
              utworzysz!
            </StyledWarning>
            <Form component={context.state.component} />
          </StyledContainer>
        </Modal>
      )}
    </AppContext.Consumer>
  );
};

export default PopUp;
