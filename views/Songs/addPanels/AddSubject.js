import React, { useState } from 'react';
import { View, TouchableOpacity, AsyncStorage } from 'react-native';
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

const AddSubject = ({
  open,
  onPress,
  openAddSong,
  song,
  setFullSong,
  setSong,
  songsL,
  setLength,
}) => {
  const handleBack = () => {
    onPress();
    openAddSong();
  };

  const [subj, setSubj] = useState('');

  const storeSong = async object => {
    const number = songsL === null ? 0 : songsL;
    try {
      await AsyncStorage.setItem(`song${parseInt(number, 10) + 1}`, JSON.stringify(object), () => {
        AsyncStorage.getItem(`song${parseInt(number, 10) + 1}`, (err, result) => {
          setSong(JSON.parse(result));
        });
      });
    } catch (error) {
      throw new Error(error);
    }
    try {
      await AsyncStorage.setItem(`songsL`, `${parseInt(number, 10) + 1}`, () => {
        AsyncStorage.getItem('songsL', (err, result) => {
          setLength(result);
        });
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  const saveData = () => {
    setFullSong({
      ...song,
      full: true,
      subject: subj,
    });
    onPress();
    storeSong({
      ...song,
      full: true,
      subject: subj,
    });
  };

  const setData = subjects.map(sub => (
    <StyledSubject key={sub} onPress={() => setSubj(sub)}>
      <Paragraph>{sub}</Paragraph>
    </StyledSubject>
  ));
  return (
    <AddPanel open={open} onPress={onPress}>
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
