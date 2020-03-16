import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import { ColumnContainer, Paragraph, Title } from 'rap-gra/components';
import SongItem from 'rap-gra/views/BestSongs/SongItem';

const StyledContainer = styled(ColumnContainer)`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.greenL};
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
`;

const StyledItemsCon = styled(ColumnContainer)`
  flex-grow: 1;
`;

const StyledCC = styled(ColumnContainer)`
  margin: 10px 0;
`;

const StyledPB = styled(StyledParagraph)`
  font-size: 20px;
`;

const BestSongs = ({ bestSong, nick, bestList }) => {
  const items = bestList.map(({ performer, views, rating, title, place }) => (
    <SongItem
      key={place}
      performer={performer}
      views={views}
      rating={rating}
      title={title}
      place={place}
    />
  ));
  return (
    <ScrollView>
      <StyledContainer>
        <Title>Lista wszechczasów</Title>
        <StyledParagraph>
          Na tej liście znajduje się top10 piosenek z największą ilością przesłuchań i z oceną nie
          niższą niż 9.0. Uwaga! możesz mieć tylko jedną piosenkę na tej liście.
        </StyledParagraph>
        <StyledCC>
          <StyledPB>Twoja najlepsza piosenka:</StyledPB>
          {bestSong.views !== -1 ? (
            <SongItem
              views={bestSong.views}
              performer={nick}
              place={bestSong.place}
              rating={`${bestSong.rating}/10`}
              title={bestSong.title}
            />
          ) : (
            <StyledParagraph>{'Nie masz żadnej piosenki, która ma ocenę >=9'}</StyledParagraph>
          )}
        </StyledCC>
        <StyledPB>Lista:</StyledPB>
        <StyledItemsCon>{items}</StyledItemsCon>
      </StyledContainer>
    </ScrollView>
  );
};

export default BestSongs;
