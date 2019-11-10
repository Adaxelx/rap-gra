import React, { useState } from 'react';
import { View, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';
import styled from 'styled-components';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';
import { Button } from 'rap-gra/components/Button';
import { checkSong } from 'rap-gra/views/Songs/Functions/checkSong';

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

const AddSubject = ({ open, onPress, openAddSong, song, setSong, songsL, setLength, subjects }) => {
  // Przejście wstecz
  const handleBack = () => {
    onPress();
    openAddSong();
  };

  const [subj, setSubj] = useState(''); // Wybór tematu

  // Funkcja zapisująca do AS - funkcja asynchroniczna
  const storeSong = async object => {
    const length = songsL === null ? 0 : songsL; // Jeżeli nie udało się pobrać ilości piosenek ustaw domyślnie na 0
    // Asynchroniczne pobranie z AS
    try {
      // Ustawienie otrzymanego obiektu na dany klucz w AS np song3
      await AsyncStorage.setItem(`song${parseInt(length, 10) + 1}`, JSON.stringify(object), () => {
        // Pobranie tego elementu i dodanie go do  stanu w App
        AsyncStorage.getItem(`song${parseInt(length, 10) + 1}`, (err, result) => {
          setSong(JSON.parse(result)); // Parse zeby zamienić JSON na obiekt
        });
      });
    } catch (error) {
      throw new Error(error);
    }
    try {
      // Ustalenie nowej ilości piosenek
      await AsyncStorage.setItem(`songsL`, `${parseInt(length, 10) + 1}`, () => {
        // Pobranie tej długości i dodanie jej do stanu
        AsyncStorage.getItem('songsL', (err, result) => {
          setLength(result);
        });
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  // Funkcja zapisująca dane
  const saveData = () => {
    // Jeżeli temat został wybrany
    if (subj) {
      // Dodaj przekalkulowaną piosenke do AS
      storeSong(
        // Funkcja przeliczająca dane piosenki na jej statystyki(wyświetlenia itp.)
        checkSong({
          ...song,
          full: true,
          subject: subj,
          id: songsL * 1 + 1,
        }),
      );
      // Zamknij okno
      onPress();
    } else Alert.alert('Nie wybrałeś tematu.');
  };

  // mapowanie tematów żeby je wyświetlić
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
