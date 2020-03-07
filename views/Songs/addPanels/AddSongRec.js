import React, { useState } from 'react';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';
import { ScrollView, View, Alert, AsyncStorage } from 'react-native';
import { Title, Button, Paragraph } from 'rap-gra/components';
import SongItem from 'rap-gra/views/Songs/SongItem';
import styled from 'styled-components';
import { checkRec, addNewSubject } from 'rap-gra/views/Songs/Functions';

/* eslint-disable no-plusplus, array-callback-return, consistent-return */

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
  records,
  setCash,
  fans,
  newSub,
  subjects,
  setNewSub,
}) => {
  const [idActive, setIdActive] = useState([]); // ID aktywnych piosenek

  // Funkcja asynchroniczna zapisująca dane płyty
  const storeRec = async object => {
    try {
      // Dodanie płyty na odpowiednie miejsce w AS np. record3
      await AsyncStorage.setItem(`records`, JSON.stringify([...records, object]));
      await AsyncStorage.getItem('cash', (err, result) => {
        AsyncStorage.setItem('cash', `${result * 1 - rec.spend * 1 + object.sold * 20}`);
        setCash(result * 1 - rec.spend * 1 + object.sold * 20);
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  // Cofnięcie wstecz
  const handleBack = () => {
    onPress();
    openAddRec();
    setIdActive([]);
  };

  // Zapisanie płyty
  const saveData = () => {
    // Sprawdzenie czy została dodana wystarczająca ilość piosenek w zależności od typu min 6 max 9 dla EP, min 10, max 15 dla LP
    switch (rec.type) {
      case 'EP':
        if (idActive.length > 10) {
          Alert.alert('(Maksymalna ilość to: 9)Dodałeś za dużo piosenek');
          return -1;
        }
        if (idActive.length >= 6) {
          onPress();
          setId(idActive);
        } else {
          Alert.alert('(Minimalna ilość to: 6)Dodałeś za mało piosenek');
          return -1;
        }
        break;
      case 'LP':
        if (idActive.length >= 15) {
          Alert.alert('(Maksymalna ilość to: 15)Dodałeś za dużo piosenek');
          return -1;
        }
        if (idActive.length >= 10) {
          onPress();
          setId(idActive);
        } else {
          Alert.alert('(Minimalna ilość to: 10)Dodałeś za mało piosenek');
          return -1;
        }
        break;
      default:
        Alert.alert('Zły typ');
    }
    // Dodanie  tytułów aktywnych piosenek w zaleności od id.
    let i = 0;
    // zapisanie tematów, tytułów i ocen do tablic
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
    // const songsCopy = songs;
    // idActive.forEach(id => (songsCopy[id - 1] = { ...songsCopy[id - 1], used: true }));
    // AsyncStorage.setItem(`songs`, JSON.stringify(songsCopy));

    // sprawdzenie piosenki
    const recordChecked = checkRec(
      {
        ...rec,
        activeTitles,
        activeSubjects,
        activeRates,
      },
      records.length,
      fans,
    );
    if (subjects.length !== 17) {
      addNewSubject(newSub, recordChecked.type, subjects, setNewSub);
    }
    // Dodanie płyty do AS
    storeRec(recordChecked);
    setRecord(recordChecked);

    // zresetowanie tablicy
    setIdActive([]);
  };

  const items = [...songs].reverse().map(item => {
    if (!item.used) {
      return (
        <SongItem
          id={item.id}
          key={item.id}
          title={item.title}
          subject={item.subject}
          rate={item.rating}
          idActive={idActive}
          setIdActive={setIdActive}
        />
      );
    }
  });
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
