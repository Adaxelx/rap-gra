import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import { ColumnContainer, Paragraph, Title } from 'rap-gra/components';
import bestlist from 'rap-gra/constants/bestlist';
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

const BestSongs = () => {
  const items = bestlist.map(({ performer, views, rate, title, place }) => (
    <SongItem
      key={place}
      performer={performer}
      views={views}
      rate={rate}
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
          niższą niż 9.0
        </StyledParagraph>
        <StyledItemsCon>{items}</StyledItemsCon>
      </StyledContainer>
    </ScrollView>
  );
};

export default BestSongs;
