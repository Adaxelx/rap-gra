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
import AppContext from 'rap-gra/context/context';

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

  return (
    <AppContext.Consumer>
      {context => (
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
              {context.state.songs.map(i => (
                <ListItem
                  key={i.title}
                  title={i.title}
                  place={i.place}
                  type={i.type}
                  earnings={i.earned}
                  fans={i.fans}
                  rate={i.rating}
                  value={i.views}
                />
              ))}
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
            songsL={context.state.songsL}
            songs={context.state.songs}
            onPress={() => setOpenSong(!openSong)}
            openSubject={() => setOpenSubject(!openSubject)}
          />
          <AddRecord
            open={openRec}
            song={song}
            setRec={setRec}
            onPress={() => setOpenRec(!openRec)}
            openSubject={() => setOpenRecSub(!openRecSub)}
            songsL={context.state.songsL}
          />
          <AddSubject
            open={openSubject}
            song={song}
            setFullSong={setFullSong}
            fullSong={fullSong}
            onPress={() => setOpenSubject(!openSubject)}
            openAddSong={() => setOpenSong(!openSong)}
            setSong={context.setSong}
            songsL={context.state.songsL}
            setLength={context.setLength}
            subjects={context.state.subjects}
          />
          <AddSongRec
            onPress={() => setOpenRecSub(!openRecSub)}
            open={openRecSub}
            setFullRec={setFullRec}
            rec={rec}
            fullRec={fullRec}
            openAddRec={() => setOpenRec(!openRec)}
            songs={context.state.songs}
            setId={setId}
            setRecord={context.setRecord}
            recordsL={context.state.recordsL}
            setLengthRec={context.setLengthRec}
          />
        </StyledContainer>
      )}
    </AppContext.Consumer>
  );
};
export default Songs;
