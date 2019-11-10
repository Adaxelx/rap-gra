import { TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Paragraph } from 'rap-gra/components/Paragraph';

const StyledSong = styled(TouchableOpacity)`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.greenL};

  ${({ active }) =>
    active &&
    css`
      background-color: black;
    `}
`;

const StyledTitle = styled(Paragraph)`
  width: 100%;
  text-align: center;
`;

const SongItem = ({ id, idActive, setIdActive, title, subject, rate }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    if (!active) {
      setIdActive([...idActive, id]);
    } else {
      const copy = idActive;
      const index = copy.findIndex(idA => id === idA);
      copy.splice(index, 1);
      setIdActive(copy);
    }
  };

  return (
    <StyledSong active={active} onPress={handleClick}>
      <StyledTitle>{title}</StyledTitle>
      <Paragraph>Temat: {subject}</Paragraph>
      <Paragraph>Ocena: {rate}/10</Paragraph>
    </StyledSong>
  );
};

export default SongItem;
