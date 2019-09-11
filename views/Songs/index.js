import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components';
import { Paragraph } from 'rap-gra/components/Paragraph';
import AddSong from 'rap-gra/views/Songs/addPanels/AddSong';
import AddSubject from 'rap-gra/views/Songs/addPanels/AddSubject';
import AddRecord from 'rap-gra/views/Songs/addPanels/AddRecord';
import AddSongRec from 'rap-gra/views/Songs/addPanels/AddSongRec';
import { Title } from 'rap-gra/components/Title';
import { Button } from 'rap-gra/components/Button';

const StyledContainer = styled(ScrollView)`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.greenL};
`;

const StyledRowContainer = styled(View)`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

const StyledButton = styled(Button)`
  height: 100%;
`;

const StyledLastSong = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.greenD};
  padding: 5px 0;
  margin-top: 10px;
  flex-grow: 1;
`;

const StyledSongTitle = styled(Paragraph)`
  width: 40%;
  font-size: 18px;
  text-align: center;
`;

const StyledP = styled(Paragraph)`
  width: 100%;
`;

const StyledStatsCon = styled(View)`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled(Title)`
  width: 100%;
  text-align: center;
`;

const StyledSubtitle = styled(Title)`
  font-size: 17px;
  width: 100%;
  text-align: center;
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
      <StyledTitle>Piosenki</StyledTitle>
      <StyledContainer>
        <>
          <StyledSubtitle>Ostatnie piosenki</StyledSubtitle>
          <StyledLastSong>
            <StyledSongTitle>Tytuł piosenki</StyledSongTitle>
            <StyledStatsCon>
              <StyledP>Przesłuchania: 10120231</StyledP>
              <StyledP>Zarobiła: 123103zł</StyledP>
              <StyledP>Miejsce na liście: 190</StyledP>
              <StyledP>Zdobytych fanów: 12312</StyledP>
            </StyledStatsCon>
          </StyledLastSong>
          <StyledLastSong>
            <StyledSongTitle>Tytuł piosenki</StyledSongTitle>
            <StyledStatsCon>
              <StyledP>Przesłuchania: 10120231</StyledP>
              <StyledP>Zarobiła: 123103zł</StyledP>
              <StyledP>Miejsce na liście: 190</StyledP>
              <StyledP>Zdobytych fanów: 12312</StyledP>
            </StyledStatsCon>
          </StyledLastSong>
          <StyledLastSong>
            <StyledSongTitle>Tytuł piosenki</StyledSongTitle>
            <StyledStatsCon>
              <StyledP>Przesłuchania: 10120231</StyledP>
              <StyledP>Zarobiła: 123103 zł</StyledP>
              <StyledP>Miejsce na liście: 190</StyledP>
              <StyledP>Zdobytych fanów: 12312</StyledP>
            </StyledStatsCon>
          </StyledLastSong>
          <StyledLastSong>
            <StyledSongTitle>Tytuł piosenki</StyledSongTitle>
            <StyledStatsCon>
              <StyledP>Przesłuchania: 10120231</StyledP>
              <StyledP>Zarobiła: 123103 zł</StyledP>
              <StyledP>Miejsce na liście: 190</StyledP>
              <StyledP>Zdobytych fanów: 12312</StyledP>
            </StyledStatsCon>
          </StyledLastSong>
          <StyledLastSong>
            <StyledSongTitle>Tytuł piosenki</StyledSongTitle>
            <StyledStatsCon>
              <StyledP>Przesłuchania: 10120231</StyledP>
              <StyledP>Zarobiła: 123103 zł</StyledP>
              <StyledP>Miejsce na liście: 190</StyledP>
              <StyledP>Zdobytych fanów: 12312</StyledP>
            </StyledStatsCon>
          </StyledLastSong>
          <StyledLastSong>
            <StyledSongTitle>Tytuł piosenki</StyledSongTitle>
            <StyledStatsCon>
              <StyledP>Przesłuchania: 10120231</StyledP>
              <StyledP>Zarobiła: 123103 zł</StyledP>
              <StyledP>Miejsce na liście: 190</StyledP>
              <StyledP>Zdobytych fanów: 12312</StyledP>
            </StyledStatsCon>
          </StyledLastSong>
        </>
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
