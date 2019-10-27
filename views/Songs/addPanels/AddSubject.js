import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';
import styled from 'styled-components';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';
import { Button } from 'rap-gra/components/Button';

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

const StyledRowContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10%;
  padding-bottom: 10px;
`;

const StyledButton = styled(Button)`
  height: 100%;
`;

const subjects = ['Miłość', 'Wolność', 'Ziomki', 'Przyjaźń'];

const AddSubject = ({ visible, onPress, openAddSong, song, setFullSong }) => {
  const handleBack = () => {
    onPress();
    openAddSong();
  };

  const [subj, setSubj] = useState('');

  const saveData = () => {
    setFullSong({
      ...song,
      full: true,
      subject: subj,
    });
    onPress();
  };

  const setData = subjects.map(sub => (
    <StyledSubject key={sub} onPress={() => setSubj(sub)}>
      <Paragraph>{sub}</Paragraph>
    </StyledSubject>
  ));
  return (
    <AddPanel visible={visible} onPress={onPress}>
      <Title>Wybierz temat</Title>
      <Paragraph>{`Wybrany temat to: ${subj}`}</Paragraph>
      <StyledContainer>{setData}</StyledContainer>
      <StyledRowContainer>
        <StyledButton onPress={handleBack}>
          <Paragraph>Wstecz</Paragraph>
        </StyledButton>
        <StyledButton onPress={saveData}>
          <Paragraph>Dodaj piosenkę</Paragraph>
        </StyledButton>
      </StyledRowContainer>
    </AddPanel>
  );
};

export default AddSubject;
