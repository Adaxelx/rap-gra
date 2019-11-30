import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';
import Bar from 'rap-gra/components/Bar';
import styled, { css } from 'styled-components';
import Switch from 'rap-gra/components/Switch';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';
import { Input } from 'rap-gra/components/Input';
import { Button } from 'rap-gra/components/Button';

const StyledFormType = styled(View)`
  display: flex;
  align-items: center;
  width: 80%;
  margin-top: 10px;
  ${({ two }) =>
    two &&
    css`
      width: 50%;
      margin-top: 0;
    `}
`;

const StyledRowContainer = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AddRecord = ({ open, onPress, setRec, openSubject, songsL, recordsL }) => {
  const [type, setType] = useState(false); // Wybór typu płyty (LP - true lub EP - false)
  const [title, setTitle] = useState(`Płyta ${recordsL * 1 + 1}`); // Nazwa płyty
  const [preorder, setPreorder] = useState(false); // Czy będzie preorder
  const [cover, setCover] = useState(0); // Wydatki na okładkę płyty
  const [special, setSpecial] = useState(false); // Wydatki na edycje specjalną
  const [ads, setAds] = useState(0); // Wydatki na promocję

  useEffect(() => {
    // Zaktualizowanie tytułu gdy nazwy piosenek nie zgadzają się(Po dodaniu piosenki)
    if (title !== `Płyta ${recordsL * 1 + 1}`) {
      setTitle(`Płyta ${recordsL * 1 + 1}`);
    }
  });

  // Zapisanie danych do przejścia dalej
  const saveData = () => {
    const typeRec = type ? 'LP' : 'EP'; // Opisane przy stanie type

    // Dodanie piosenki(nie skończonej) do stanu
    setRec({
      full: false,
      title,
      type: typeRec,
      preorder,
      special,
      cover,
      ads,
    });
    setSpecial(false);
    setCover(0);
    setPreorder(false);
    setAds(0);
    setType(false);

    // Sprawdzenie czy moesz zrobić piosenke(dla EP - minimum 6 piosenek stworzonych dla LP - 10)
    if (songsL >= 6 && typeRec === 'EP') {
      onPress();
      openSubject();
    } else if (songsL <= 6 && typeRec === 'EP')
      Alert.alert('Aby stworzyć EPke musisz mieć conajmniej 6 piosenek');
    if (songsL >= 10 && typeRec === 'LP') {
      onPress();
      openSubject();
    } else if (songsL <= 10 && typeRec === 'LP')
      Alert.alert('Aby stworzyć LP musisz mieć conajmniej 10 piosenek');
  };
  return (
    <AddPanel open={open} onPress={onPress}>
      <Title>Stwórz płytę</Title>
      <Input onChangeText={text => setTitle(text)} value={title} />
      <StyledFormType two>
        <Paragraph>Rodzaj:</Paragraph>
        <StyledRowContainer>
          <Paragraph>EP</Paragraph>
          <Switch active={type} onPress={() => setType(!type)} />
          <Paragraph>LP</Paragraph>
        </StyledRowContainer>
      </StyledFormType>
      <StyledFormType>
        <StyledRowContainer>
          <Paragraph>Przedsprzedaż:</Paragraph>
          <Switch active={preorder} onPress={() => setPreorder(!preorder)} />
        </StyledRowContainer>
      </StyledFormType>
      <StyledFormType>
        <StyledRowContainer>
          <Paragraph>Edycja kolekcjonerska:</Paragraph>
          <Switch active={special} onPress={() => setSpecial(!special)} />
        </StyledRowContainer>
      </StyledFormType>
      <Bar title="Okładka" val1={`${Math.floor(cover)}zł`} value={cover} setValue={setCover} />
      <Bar title="Kampania reklamowa" val1={`${Math.floor(ads)}zł`} value={ads} setValue={setAds} />
      <Paragraph>Wydasz: 1230 zł</Paragraph>
      <Button onPress={saveData}>
        <Paragraph>Dalej</Paragraph>
      </Button>
    </AddPanel>
  );
};

export default AddRecord;
