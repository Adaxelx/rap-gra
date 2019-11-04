import React, { useState } from 'react';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';
import { View } from 'react-native';
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

const AddSongRec = ({ onPress, open, openAddRec, setId, songs }) => {
  const [idActive, setIdActive] = useState([]);

  const handleBack = () => {
    onPress();
    openAddRec();
  };

  const saveData = () => {
    onPress();
    setId(idActive);
  };

  console.log(songs[0]);

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
