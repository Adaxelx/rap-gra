import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { Paragraph } from 'rap-gra/components/Paragraph';
import AddSong from 'rap-gra/views/Songs/addPanels/AddSong';
import AddSubject from 'rap-gra/views/Songs/addPanels/AddSubject';
import AddRecord from 'rap-gra/views/Songs/addPanels/AddRecord';
import AddSongRec from 'rap-gra/views/Songs/addPanels/AddSongRec';
import { Title } from 'rap-gra/components/Title';
import { Button } from 'rap-gra/components/Button';

const StyledContainer = styled(View)`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.greenL};
`;

const StyledRowContainer = styled(View)`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 15px 0px;
`;

const StyledButton = styled(Button)`
  height: 100%;
`;

const Songs = () => {
  const [openSong, setOpenSong] = useState(false);
  const [song, setSong] = useState({ full: false });
  const [fullSong, setFullSong] = useState({});
  const [openSubject, setOpenSubject] = useState(false);

  /* record state */

  const [openRec, setOpenRec] = useState(false);
  const [rec, setRec] = useState({ full: false });
  const [fullRec, setFullRec] = useState({});
  const [openRecSub, setOpenRecSub] = useState(false);

  return (
    <StyledContainer>
      <Title>Piosenki</Title>
      <StyledContainer>
        <StyledContainer>
          <Paragraph>Ostatnie piosenki</Paragraph>
        </StyledContainer>
        <StyledRowContainer>
          <StyledButton onPress={() => setOpenSong(!openSong)}>
            <Paragraph>Dodaj piosenkę</Paragraph>
          </StyledButton>
          <StyledButton onPress={() => setOpenRec(!openRec)}>
            <Paragraph>Stwórz płytę</Paragraph>
          </StyledButton>
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
        setRec={setRec}
        onPress={() => setOpenRec(!openRec)}
        openSubject={() => setOpenRecSub(!openRecSub)}
      />
      <AddSubject
        open={openSubject}
        song={song}
        setFullSong={setFullSong}
        fullSong={fullSong}
        onPress={() => setOpenSubject(!openSubject)}
        openAddSong={() => setOpenSong(!openSong)}
      />
      <AddSongRec
        onPress={() => setOpenRecSub(!openRecSub)}
        open={openRecSub}
        setFullRec={setFullRec}
        rec={rec}
        fullRec={fullRec}
        openAddRec={() => setOpenRec(!openRec)}
      />
    </StyledContainer>
  );
};

export default Songs;
