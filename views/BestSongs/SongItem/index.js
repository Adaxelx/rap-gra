import React from 'react';
import styled from 'styled-components';
import { Paragraph, RowContainer, ColumnContainer } from 'rap-gra/components';

/* eslint-disable no-restricted-properties */

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

const SongItem = ({ performer, title, views, rating, place }) => {
  const calc = (n, d) => {
    let x = `${n}`.length;
    const dd = Math.pow(10, d);
    x -= x % 3;
    return Math.round((n * dd) / Math.pow(10, x)) / dd + ' kMGTPE'[x / 3];
  };

  return (
    <StyledCon>
      <StyledCC place>
        <StyledPlace>{place}</StyledPlace>
      </StyledCC>
      <StyledCC>
        <StyledTitle>{`${performer} - ${title}`}</StyledTitle>
        <StyledParagraph>{`Przesłuchania: ${calc(views, 1)}`}</StyledParagraph>
        <StyledParagraph>{`Ocena: ${rating}`}</StyledParagraph>
      </StyledCC>
    </StyledCon>
  );
};

export default SongItem;
