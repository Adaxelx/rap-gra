import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';
import styled from 'styled-components';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';

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

const SubmitButton = styled(TouchableOpacity)`
  border: 2px solid black;
  height: 100%;
  margin-top: 10px;
  width: 40%;
  background-color: ${({ theme }) => theme.greenL};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledRowContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 7%;
  padding-bottom: 10px;
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
        <SubmitButton onPress={handleBack}>
          <Paragraph>Wstecz</Paragraph>
        </SubmitButton>
        <SubmitButton onPress={saveData}>
          <Paragraph>Dodaj piosenkę</Paragraph>
        </SubmitButton>
      </StyledRowContainer>
    </AddPanel>
  );
};

export default AddSubject;
