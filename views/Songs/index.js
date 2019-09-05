import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import styled, { css } from 'styled-components';
import { Title } from '../../components/Title';
import AddSong from './addPanels/AddSong';

const StyledContainer = styled(View)`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #5c826b;
  ${({ open }) =>
    open &&
    css`
      flex-grow: 3;
    `}
`;

const StyledRowContainer = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 15px 0px;
`;

const Songs = () => {
  const [openSong, setOpenSong] = useState(false);
  const [openRec, setOpenRec] = useState(false);

  return (
    <StyledContainer main>
      <Title>Piosenki</Title>
      <StyledContainer>
        <StyledContainer last>
          <Text>Ostatnie piosenki</Text>
        </StyledContainer>
        <StyledRowContainer>
          <Button onPress={() => setOpenSong(!openSong)} title="Dodaj piosenkę" />
          <Button onPress={() => setOpenRec(!openRec)} title="Stwórz płytę" />
        </StyledRowContainer>
      </StyledContainer>
      <AddSong open={openSong} />
    </StyledContainer>
  );
};

export default Songs;
