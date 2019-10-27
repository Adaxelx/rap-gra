import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import { Paragraph } from 'rap-gra/components/Paragraph';
import AddSong from 'rap-gra/views/Songs/addPanels/AddSong';
import AddSubject from 'rap-gra/views/Songs/addPanels/AddSubject';
import AddRecord from 'rap-gra/views/Songs/addPanels/AddRecord';
import AddSongRec from 'rap-gra/views/Songs/addPanels/AddSongRec';
import { Title } from 'rap-gra/components/Title';
import { Button } from 'rap-gra/components/Button';
import { Link } from 'react-router-native';
import { RowContainer } from 'rap-gra/components/RowContainer';
import ListItem from 'rap-gra/views/Songs/ListItem';

const StyledContainer = styled(ScrollView)`
  flex-grow: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.greenL};
`;

const StyledRowContainer = styled(RowContainer)`
  width: 100%;
  height: 70px;
  padding: 15px;
`;

const StyledButton = styled(Button)`
  height: 100%;
`;

const StyledTitle = styled(Title)`
  width: 100%;
  text-align: center;
  margin-bottom: 0;
`;

const StyledSubtitle = styled(Title)`
  font-size: 17px;
  width: 100%;
  text-align: center;
`;

const StyledLink = styled(Link)`
  border: 2px solid ${({ theme }) => theme.greenD};
  padding: 5px;
`;

const data = [
  {
    type: 'song',
    title: 'Piosenka5',
    value: '120232',
    earnings: '12313123',
    place: '210',
    fans: '12344',
    rate: '9/10',
  },
  {
    type: 'song',
    title: 'Piosenka4',
    value: '120232',
    earnings: '12313123',
    place: '210',
    fans: '12344',
    rate: '9/10',
  },
  {
    type: 'song',
    title: 'Piosenka3',
    value: '120232',
    earnings: '12313123',
    place: '210',
    fans: '12344',
    rate: '9/10',
  },
  {
    type: 'record',
    title: 'Piosenka2',
    value: '120232',
    earnings: '12313123',
    place: '210',
    fans: '12344',
    rate: '9/10',
  },
];

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

  /* */

  const [id, setId] = useState([]);

  const mapData = data.map(i => (
    <ListItem
      key={i.title}
      title={i.title}
      place={i.place}
      type={i.type}
      value={i.value}
      earnings={i.earnings}
      fans={i.fans}
      rate={i.rate}
    />
  ));

  return (
    <StyledContainer id={id}>
      <StyledTitle>Piosenki</StyledTitle>
      <StyledContainer>
        <>
          <StyledRowContainer>
            <StyledButton onPress={() => setOpenSong(!openSong)}>
              <Paragraph>Dodaj piosenkę</Paragraph>
            </StyledButton>
            <StyledButton onPress={() => setOpenRec(!openRec)}>
              <Paragraph>Stwórz płytę</Paragraph>
            </StyledButton>
          </StyledRowContainer>
          <StyledSubtitle>Ostatnie piosenki</StyledSubtitle>
          {mapData}
        </>
        <StyledRowContainer>
          <StyledLink underlayColor="transparent" to="/allsongs">
            <Paragraph>Wszystkie piosenki</Paragraph>
          </StyledLink>
          <StyledLink underlayColor="transparent" to="/allrecords">
            <Paragraph>Wszystkie płyty</Paragraph>
          </StyledLink>
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
        setId={setId}
      />
    </StyledContainer>
  );
};

export default Songs;
