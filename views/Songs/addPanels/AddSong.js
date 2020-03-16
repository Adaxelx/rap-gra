import React, { useState } from 'react';
import { View, Alert, AsyncStorage } from 'react-native';
import styled from 'styled-components';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';
import { Button, Bar, Switch, Input, Title, Paragraph } from 'rap-gra/components';
import { checkSong } from 'rap-gra/views/Songs/Functions/checkSong';

const StyledRowCon = styled(View)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 5%;
  align-items: center;
  justify-content: space-between;
`;

const StyledButtonCon = styled(View)`
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

const StyledFlex = styled(View)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const AddSong = ({
  open,
  onPress,
  setSong,
  openSubject,
  songs,
  subj,
  stats,
  setStats,
  setSubj,
  setBestSong,
  changeBestList,
  nick,
}) => {
  // Nazwa piosenki(Początkowa ustalona w zalezności od ilości piosenek). *1 przy songsL jest dlatego że songsL jest stringiem i pomnożenie przez 1 zamienia tą wartość na inta.
  const [title, setTitle] = useState(`Piosenka ${songs.length + 1}`);

  const [valueVid, setValueVid] = useState(0); // Pieniądze wydane na teledysk
  const [valueStyle, setValueStyle] = useState(0); // Jaki styl
  const [valueRhymes, setValueRhymes] = useState(0); // Ilość rymów
  const [valueBit, setValueBit] = useState(0); // Jaki bit
  const [vid, setVid] = useState(false); // Teledysk: tak czy nie

  const clearState = () => {
    setValueVid(0);
    setValueStyle(0);
    setValueRhymes(0);
    setValueBit(0);
    setVid(false);
  };

  const handleBack = () => {
    onPress();
    openSubject();
  };

  // Funkcja zapisująca do AS - funkcja asynchroniczna
  const storeSong = async object => {
    try {
      // Ustawienie otrzymanego obiektu na dany klucz w AS np song3
      await AsyncStorage.setItem(`songs`, JSON.stringify([...songs, object]));
      setSong(object);
    } catch (error) {
      throw new Error(error);
    }
  };

  const saveData = () => {
    let copy = false; // Czy jest taka piosoenka czy nie
    songs.forEach(song => {
      // Jeżeli nie było kopii sprawdz czy teraz jest to kopia
      if (copy !== true) {
        copy = title === song.title;
      }
    });
    // Jeżeli jest to kopia wyświetl komunikat i nie zapisuj danych
    if (copy) {
      Alert.alert('Stworzyłeś już taką piosenkę');
      return -1;
    }
    // Jeżeli nazwa jest za krótka lub za długa wyświetl komunikat i nie zapisuj danych
    if (title.length <= 3 || title.length >= 30) {
      Alert.alert('Tytuł powinien zamierać od 3 do 30 znaków');
      return -1;
    }
    // Jeżeli wszystko jest okej zapisz dane do stanu

    // Dodaj przekalkulowaną piosenke do AS
    storeSong(
      // Funkcja przeliczająca dane piosenki na jej statystyki(wyświetlenia itp.)
      checkSong(
        {
          title,
          values: {
            video: {
              active: vid,
              value: valueVid,
            },
            style: Math.floor(valueStyle),
            rhymes: Math.floor(valueRhymes),
            bit: Math.floor(valueBit),
          },
          subject: subj,
          id: songs.length + 1,
        },
        stats,
        setStats,
        setBestSong,
        changeBestList,
        nick,
      ),
    );
    // Zamknij okno
    onPress();
    // Czyszczenie stanu
    clearState();
    setSubj('');
    return 0;
  };

  return (
    <AddPanel
      open={open}
      onPress={() => {
        setSubj('');
        onPress();
      }}
    >
      <Title>Dodaj piosenkę</Title>
      <StyledFlex>
        <Input onChangeText={text => setTitle(text)} value={title} />
        <StyledRowCon>
          <Paragraph>Teledysk</Paragraph>
          <Switch onPress={() => setVid(!vid)} active={vid} />
        </StyledRowCon>
        {vid ? (
          <>
            <Bar
              title="Wydatki"
              val1={`${Math.floor((valueVid / 200) * 1000 * 0.1)}zł`}
              value={valueVid}
              setValue={setValueVid}
            />
          </>
        ) : null}
        <Bar title="Styl" val1="wolny" val2="szybki" value={valueStyle} setValue={setValueStyle} />
        <Bar title="Rymy" val1="mało" val2="dużo" value={valueRhymes} setValue={setValueRhymes} />
        <Bar title="Bit" val1="poważny" val2="imprezowy" value={valueBit} setValue={setValueBit} />
      </StyledFlex>
      <StyledButtonCon>
        <StyledButton onPress={handleBack}>
          <Paragraph>Wstecz</Paragraph>
        </StyledButton>
        <StyledButton onPress={saveData}>
          <Paragraph>Dodaj piosenke</Paragraph>
        </StyledButton>
      </StyledButtonCon>
    </AddPanel>
  );
};

export default AddSong;
