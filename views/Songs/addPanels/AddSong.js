import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';
import styled from 'styled-components';
import { Input } from 'rap-gra/components/Input';
import Switch from 'rap-gra/components/Switch';
import Bar from 'rap-gra/components/Bar';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';
import { Button } from 'rap-gra/components/Button';

const StyledRowCon = styled(View)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 5%;
  align-items: center;
  justify-content: space-between;
`;

const AddSong = ({ open, onPress, setSong, openSubject, songsL, songs }) => {
  // Nazwa piosenki(Początkowa ustalona w zalezności od ilości piosenek). *1 przy songsL jest dlatego że songsL jest stringiem i pomnożenie przez 1 zamienia tą wartość na inta.
  const [title, setTitle] = useState(`Piosenka ${songsL * 1 + 1}`);

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

  useEffect(() => {
    // Zaktualizowanie tytułu gdy nazwy piosenek nie zgadzają się(Po dodaniu piosenki)
    if (title !== `Piosenka ${songsL * 1 + 1}`) {
      setTitle(`Piosenka ${songsL * 1 + 1}`);
    }
  });

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
    setSong({
      full: false,
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
    });
    // Czyszczenie stanu
    clearState();
    // Zamknij okno
    onPress();
    // Otwórz kolejne okno
    openSubject();
    return 0;
  };

  return (
    <AddPanel open={open} onPress={onPress}>
      <Title>Dodaj piosenkę</Title>
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
      {/* Przy kliknięciu dalej zapisz dane */}
      <Button onPress={saveData}>
        <Paragraph>Dalej</Paragraph>
      </Button>
    </AddPanel>
  );
};

export default AddSong;
