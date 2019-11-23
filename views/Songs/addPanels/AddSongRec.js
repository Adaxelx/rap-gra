import React, { useState } from 'react';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';
import { ScrollView, View, Alert, AsyncStorage } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';
import SongItem from 'rap-gra/views/Songs/SongItem';
import styled from 'styled-components';
import { checkRec } from 'rap-gra/views/Songs/Functions/checkRec';

import { Button } from 'rap-gra/components/Button';

/* eslint-disable no-plusplus */

const StyledCon = styled(ScrollView)`
  flex-grow: 1;
  width: 100%;
  padding: 0 10px;
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

const AddSongRec = ({
  onPress,
  open,
  openAddRec,
  setId,
  songs,
  rec,
  setRecord,
  recordsL,
  setLengthRec,
}) => {
  const [idActive, setIdActive] = useState([]); // ID aktywnych piosenek

  // Funkcja asynchroniczna zapisująca dane płyty
  const storeRec = async object => {
    const length = recordsL; // ilość płyt pobrana z AS

    try {
      // Dodanie płyty na odpowiednie miejsce w AS np. record3
      await AsyncStorage.setItem(
        `record${parseInt(length, 10) + 1}`,
        JSON.stringify(object),
        () => {
          // Pobranie tej płyty z AS i dodanie do tablicy w App.
          AsyncStorage.getItem(`record${parseInt(length, 10) + 1}`, (err, result) => {
            setRecord(JSON.parse(result));
          });
        },
      );
    } catch (error) {
      throw new Error(error);
    }
    try {
      // Dodanie ilości płyt do AS
      await AsyncStorage.setItem(`recordsL`, `${parseInt(length, 10) + 1}`, () => {
        // Pobranie ilości płyt z AS i dodanie do stanu w App
        AsyncStorage.getItem('recordsL', (err, result) => {
          setLengthRec(result);
        });
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  // Cofnięcie wstecz
  const handleBack = () => {
    onPress();
    openAddRec();
  };

  // Zapisanie płyty
  const saveData = () => {
    // Sprawdzenie czy została dodana wystarczająca ilość piosenek w zależności od typu
    switch (rec.type) {
      case 'EP':
        if (idActive.length > 10) {
          Alert.alert('(Maksymalna ilość to: 9)Dodałeś za dużo piosenek');
        } else if (idActive.length >= 6) {
          onPress();
          setId(idActive);
        } else {
          Alert.alert('(Minimalna ilość to: 6)Dodałeś za mało piosenek');
        }
        break;
      case 'LP':
        if (idActive.length >= 15) {
          Alert.alert('(Maksymalna ilość to: 15)Dodałeś za dużo piosenek');
        } else if (idActive.length >= 10) {
          onPress();
          setId(idActive);
        } else {
          Alert.alert('(Minimalna ilość to: 10)Dodałeś za mało piosenek');
        }
        break;
      default:
        Alert.alert('Zły typ');
    }
    // Dodanie  tytułów aktywnych piosenek w zaleności od id.
    let i = 0;
    const activeTitles = [];
    const activeSubjects = [];
    const activeRates = [];
    songs.forEach(song => {
      if (song.id === idActive[i]) {
        activeTitles.push(song.title);
        activeSubjects.push(song.subject);
        activeRates.push(song.rating);
        i++;
      }
    });

    // Dodanie płyty do AS
    storeRec(
      checkRec(
        {
          ...rec,
          activeTitles,
          activeSubjects,
          activeRates,
        },
        recordsL,
      ),
    );
    setIdActive([]);
  };

  const items = [...songs]
    .reverse()
    .map(item => (
      <SongItem
        id={item.id}
        key={item.id}
        title={item.title}
        subject={item.subject}
        rate={item.rating}
        idActive={idActive}
        setIdActive={setIdActive}
      />
    ));
  return (
    <AddPanel onPress={onPress} open={open}>
      <Title>Wybierz piosenki:</Title>
      <StyledCon>{items}</StyledCon>
      <StyledRowContainer>
        <StyledButton onPress={handleBack}>
          <Paragraph>Wstecz</Paragraph>
        </StyledButton>
        <StyledButton onPress={saveData}>
          <Paragraph>Dodaj płytę</Paragraph>
        </StyledButton>
      </StyledRowContainer>
    </AddPanel>
  );
};

export default AddSongRec;
