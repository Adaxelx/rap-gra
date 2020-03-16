import React from 'react';
import styled from 'styled-components';
import { RowContainer, Paragraph } from 'rap-gra/components';
import { View } from 'react-native';

/* eslint-disable no-restricted-properties */

const StyledSong = styled(RowContainer)`
  width: 100%;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.greenD};
  padding: 5px 0;
  margin-top: 10px;
  flex-grow: 1;
`;

const StyledSongTitle = styled(Paragraph)`
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

const StyledTitleCon = styled(View)`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const ListItem = ({ type, title, rate, earnings, place, fans, value, subject }) => {
  const calc = (n, d) => {
    if (n > 1000000) {
      let x = `${n}`.length;
      const dd = Math.pow(10, d);
      x -= x % 3;
      return Math.round((n * dd) / Math.pow(10, x)) / dd + ' kMGTPE'[x / 3];
    }
    return n;
  };
  // Sprawdzenie czy mamy doczynienie z plyta czy z piosenka, w zaleznosci od tego beda wyswietlac sie rozne rzeczy
  const cond = type === 'EP' || type === 'LP';
  return (
    <StyledSong>
      <StyledTitleCon>
        <StyledSongTitle>{title}</StyledSongTitle>
        <StyledSongTitle>{`(${subject})`}</StyledSongTitle>
      </StyledTitleCon>
      <StyledStatsCon>
        <StyledP>Ocena: {rate}/10</StyledP>
        <StyledP>
          {cond ? `Kupionych egzemplarzy: ${value}` : `Przesłuchań: ${calc(value, 1)}`}
        </StyledP>
        <StyledP>Zarobiła: {calc(earnings, 1)}zł</StyledP>
        <StyledP>{cond ? `Typ płyty: ${type}` : `Miejsce na liście: ${place}`}</StyledP>
        <StyledP>{cond ? `Tematyka to: ${subject}` : `Zdobytych fanów: ${calc(fans, 1)}`}</StyledP>
      </StyledStatsCon>
    </StyledSong>
  );
};

export default ListItem;
