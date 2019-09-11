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

const id = ['12', '16', '13', '14', '18', '32', '53'];

const AddSongRec = ({ onPress, open, openAddRec, setId }) => {
  const [idActive, setIdActive] = useState([]);

  const handleBack = () => {
    onPress();
    openAddRec();
  };

  const saveData = () => {
    onPress();
    setId(idActive);
  };

  const items = id.map(item => (
    <SongItem id={item} key={item} idActive={idActive} setIdActive={setIdActive} />
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
