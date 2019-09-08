import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';
import styled from 'styled-components';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';
import { Button } from 'rap-gra/components/Button';

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

const AddSubject = ({ open, onPress, openAddSong, song, setFullSong }) => {
  const handleBack = () => {
    onPress();
    openAddSong();
  };

  const saveData = () => {
    setFullSong({
      ...song,
      full: true,
      subject: 'Miłość',
    });
    onPress();
  };
  return (
    <AddPanel open={open} onPress={onPress}>
      <Title>Wybierz temat</Title>
      <StyledContainer>
        <StyledSubject>
          <Paragraph>Miłość</Paragraph>
        </StyledSubject>
        <StyledSubject>
          <Paragraph>Miłość</Paragraph>
        </StyledSubject>
        <StyledSubject>
          <Paragraph>Miłość</Paragraph>
        </StyledSubject>
        <StyledSubject>
          <Paragraph>Miłość</Paragraph>
        </StyledSubject>
      </StyledContainer>
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
