import React from 'react';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';
import { View, TouchableOpacity } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';
import styled from 'styled-components';

import { Button } from 'rap-gra/components/Button';

const StyledCon = styled(View)`
  flex-grow: 1;
  width: 100%;
  padding: 0 10px;
`;

const StyledSong = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({ theme }) => theme.greenL};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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

const AddSongRec = ({ onPress, open, openAddRec }) => {
  const handleBack = () => {
    onPress();
    openAddRec();
  };

  const saveData = () => {
    onPress();
  };
  return (
    <AddPanel onPress={onPress} open={open}>
      <Title>Wybierz piosenki:</Title>
      <StyledCon>
        <StyledSong>
          <Paragraph>Tytuł</Paragraph>
          <Paragraph>Tematyka: Miłość</Paragraph>
          <Paragraph>Ocena: 7/10</Paragraph>
        </StyledSong>
      </StyledCon>
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
