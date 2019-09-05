import React, { useState } from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';
import styled, { css } from 'styled-components';
import { Input } from 'rap-gra/components/Input';
import Switch from 'rap-gra/components/Switch';

const StyledContainer = styled(View)`
  position: absolute;
  color: ${({ theme }) => theme.fontColor};
  bottom: 20;
  left: 20;
  right: 20;
  top: 20;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.greenD};

  transform: translateX(-1000px);
  ${({ open }) =>
    open &&
    css`
      transform: translateX(0);
    `};
`;

const StyledCloseButton = styled(TouchableHighlight)`
  background-color: transparent;
  height: 30px;
  width: 30px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLabel = styled(Paragraph)`
  color: red;
  font-size: 25px;
`;

const StyledCurtain = styled(View)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.8;
  transform: translateX(-1000px);
  ${({ open }) =>
    open &&
    css`
      transform: translateX(0);
    `};
`;

const AddSong = ({ open, onPress }) => {
  const [name, setName] = useState(`Piosenka 1`);
  const [vid, setVid] = useState(false);
  return (
    <>
      <StyledCurtain open={open} />
      <StyledContainer open={open}>
        <StyledCloseButton onPress={onPress} outline>
          <>
            <StyledLabel>X</StyledLabel>
          </>
        </StyledCloseButton>
        <Title>Dodaj piosenkę</Title>
        <Input onChangeText={text => setName(text)} value={name} />
        <Switch onPress={() => setVid(!vid)} active={vid} />
      </StyledContainer>
    </>
  );
};

export default AddSong;
