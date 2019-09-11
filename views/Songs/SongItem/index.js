import { TouchableOpacity } from 'react-native';
import React from 'react';
import styled from 'styled-components';
import { Paragraph } from 'rap-gra/components/Paragraph';

const StyledSong = styled(TouchableOpacity)`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.greenL};
`;

const StyledTitle = styled(Paragraph)`
  width: 100%;
  text-align: center;
`;

const SongItem = () => {
  return (
    <StyledSong>
      <StyledTitle>Siema siema kurna witam</StyledTitle>
      <Paragraph>Tematyka: Miłość</Paragraph>
      <Paragraph>Ocena: 7/10</Paragraph>
    </StyledSong>
  );
};

export default SongItem;
