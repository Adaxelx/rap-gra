import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';
import styled from 'styled-components';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';
import { Button } from 'rap-gra/components/Button';

/* eslint-disable no-underscore-dangle */

const StyledContainer = styled(View)`
  width: 95%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
`;
const StyledButton = styled(Button)`
  margin-bottom: 10px;
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
      <Paragraph>{sub}</Paragraph>
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
