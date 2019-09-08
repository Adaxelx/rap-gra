import React, { useState } from 'react';
import { View, Button } from 'react-native';
import styled, { css } from 'styled-components';
import { Paragraph } from 'rap-gra/components/Paragraph';
import AddSong from 'rap-gra/views/Songs/addPanels/AddSong';
import AddSubject from 'rap-gra/views/Songs/addPanels/AddSubject';
import AddRecord from 'rap-gra/views/Songs/addPanels/AddRecord';
import { Title } from 'rap-gra/components/Title';

const StyledContainer = styled(View)`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.greenL};
  ${({ open }) =>
    open &&
    css`
      flex-grow: 3;
    `};
`;

const StyledRowContainer = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 15px 0px;
`;

const StyledButton = styled(Button)``;

const Songs = () => {
  const [openSong, setOpenSong] = useState(false);
  const [openRec, setOpenRec] = useState(false);
  const [song, setSong] = useState({ full: false });
  const [fullSong, setFullSong] = useState({});
  const [openSubject, setOpenSubject] = useState(false);

  return (
    <StyledContainer main>
      <Title>Piosenki</Title>
      <StyledContainer>
        <StyledContainer last>
          <Paragraph>Ostatnie piosenki</Paragraph>
        </StyledContainer>
        <StyledRowContainer>
          <StyledButton onPress={() => setOpenSong(!openSong)} title="Dodaj piosenkę" />
          <StyledButton onPress={() => setOpenRec(!openRec)} title="Stwórz płytę" />
        </StyledRowContainer>
      </StyledContainer>
      <AddSong
        open={openSong}
        setSong={setSong}
        onPress={() => setOpenSong(!openSong)}
        openSubject={() => setOpenSubject(!openSubject)}
      />
      <AddRecord
        open={openRec}
        song={song}
        setSong={setSong}
        onPress={() => setOpenRec(!openRec)}
      />
      <AddSubject
        open={openSubject}
        song={song}
        setFullSong={setFullSong}
        fullSong={fullSong}
        onPress={() => setOpenSubject(!openSubject)}
        openAddSong={() => setOpenSong(!openSong)}
      />
    </StyledContainer>
  );
};

export default Songs;
