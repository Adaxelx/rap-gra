import React from 'react';
import styled from 'styled-components';
import { RowContainer } from 'rap-gra/components/RowContainer';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { View } from 'react-native';

const StyledSong = styled(RowContainer)`
  width: 100%;
  justify-content: space-between;
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

const ListItem = ({ type, title, rate, earnings, place, fans, value }) => {
  return (
    <StyledSong>
      <StyledSongTitle>{title}</StyledSongTitle>
      <StyledStatsCon>
        <StyledP>Ocena: {rate}</StyledP>
        <StyledP>
          {type === 'record' ? `Kupionych egzemplarzy: ${value}` : `Przesłuchań: ${value}`}
        </StyledP>
        <StyledP>Zarobiła: {earnings}</StyledP>
        <StyledP>Miejsce na liście: {place}</StyledP>
        <StyledP>Zdobytych fanów: {fans}</StyledP>
      </StyledStatsCon>
    </StyledSong>
  );
};

export default ListItem;
