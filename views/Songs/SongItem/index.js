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

// Komponent do piosenek wybranych do płyty
const SongItem = ({ id, idActive, setIdActive, title, subject, rate }) => {
  const [active, setActive] = useState(false); // aktywny czy nie

  const handleClick = () => {
    setActive(!active);

    if (active === false) {
      // useState jest asynchroniczny więc wartośc będzie odwrotna do prawdziwej wartości dlatego false
      setIdActive([...idActive, id].sort()); // dodanie i posortowanie tablicy id(potem potrzebne do wyszukiwania)
    } else {
      // usuniecie elementu z tablicy
      const copy = idActive; // aktywne id
      const index = copy.findIndex(idA => id === idA); // znalezienie miejsca aktywnego id w tablicy
      copy.splice(index, 1); // usuniecie z tablicy elementu
      setIdActive(copy.sort()); // posortowanie tablicy
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
