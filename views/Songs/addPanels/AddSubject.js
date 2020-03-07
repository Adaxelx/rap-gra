import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { Title, Button, Paragraph } from 'rap-gra/components';
import styled from 'styled-components';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';

/* eslint-disable no-underscore-dangle */

const StyledContainer = styled(View)`
  width: 95%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const StyledSubject = styled(TouchableOpacity)`
  width: 30%;
  height: 50px;
  background-color: ${({ theme }) => theme.greenL};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-left: 1.66%;
  margin-right: 1.66%;
`;
const StyledButton = styled(Button)`
  margin-bottom: 10px;
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
`;

const AddSubject = ({ open, onPress, openAddSong, subjects, subj, setSubj }) => {
  const goNext = () => {
    if (subj) {
      onPress();
      openAddSong();
    } else {
      Alert.alert('Nie wybrałeś tematu');
    }
  };

  // mapowanie tematów żeby je wyświetlić
  const setData = subjects.map(sub => (
    <StyledSubject
      key={sub}
      onPress={() => {
        setSubj(sub);
      }}
    >
      <StyledParagraph>{sub}</StyledParagraph>
    </StyledSubject>
  ));
  return (
    <AddPanel
      open={open}
      onPress={() => {
        setSubj('');
        onPress();
      }}
    >
      <Title>Wybierz temat</Title>
      <Paragraph>{`Wybrany temat to: ${subj}`}</Paragraph>
      <StyledContainer>{setData}</StyledContainer>
      <StyledButton onPress={goNext}>
        <Paragraph>Dalej</Paragraph>
      </StyledButton>
    </AddPanel>
  );
};

export default AddSubject;
