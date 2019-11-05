import React, { useState } from 'react';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';
import { View, Alert } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';
import SongItem from 'rap-gra/views/Songs/SongItem';
import styled from 'styled-components';

import { Button } from 'rap-gra/components/Button';

const StyledCon = styled(View)`
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

const AddSongRec = ({ onPress, open, openAddRec, setId, songs, rec }) => {
  const [idActive, setIdActive] = useState([]);

  const handleBack = () => {
    onPress();
    openAddRec();
  };

  const saveData = () => {
    switch (rec.type) {
      case 'EP':
        if (idActive.length >= 6) {
          onPress();
          setId(idActive);
        } else {
          Alert.alert('Dodałeś za mało piosenek(Minimalna ilość to: 6');
        }
        break;
      case 'LP':
        if (idActive.length >= 10) {
          onPress();
          setId(idActive);
        } else {
          Alert.alert('Dodałeś za mało piosenek(Minimalna ilość to: 10');
        }
        break;
      default:
        Alert.alert('Zły typ');
    }
  };

  const items = songs.map(item => (
    <SongItem
      id={item.id}
      key={item.id}
      title={item.title}
      subject={item.type}
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
          <Paragraph>Dodaj piosenkę</Paragraph>
        </StyledButton>
      </StyledRowContainer>
    </AddPanel>
  );
};

export default AddSongRec;
