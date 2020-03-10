import React from 'react';
import styled from 'styled-components';
import { Paragraph, RowContainer, ColumnContainer } from 'rap-gra/components';

const StyledCon = styled(RowContainer)`
  width: 80%;
  margin: 5px 0;
`;

const StyledCC = styled(ColumnContainer)`
  width: ${({ place }) => (place ? '20%' : '80%')};
  background-color: ${({ place, theme }) => (place ? theme.greenD : 'transparent')};
  margin-right: ${({ place }) => (place ? '10px;' : '0')};
`;

const StyledPlace = styled(Paragraph)`
  font-size: 30px;
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
`;

const StyledTitle = styled(Paragraph)`
  font-size: 20px;
  text-align: center;
  color: gold;
`;

const SongItem = ({ performer, title, views, rate, place }) => {
  return (
    <StyledCon>
      <StyledCC place>
        <StyledPlace>{place}</StyledPlace>
      </StyledCC>
      <StyledCC>
        <StyledTitle>{`${performer} - ${title}`}</StyledTitle>
        <StyledParagraph>{`Przesłuchania: ${views}`}</StyledParagraph>
        <StyledParagraph>{`Ocena: ${rate}`}</StyledParagraph>
      </StyledCC>
    </StyledCon>
  );
};

export default SongItem;
