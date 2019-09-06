import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';
import styled, { css } from 'styled-components';
import { Input } from 'rap-gra/components/Input';
import Switch from 'rap-gra/components/Switch';
import Bar from 'rap-gra/components/Bar';

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

const StyledCloseButton = styled(TouchableOpacity)`
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

const StyledRowCon = styled(View)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 5%;
  align-items: center;
  justify-content: space-between;
`;

const SubmitButton = styled(TouchableOpacity)`
  border: 2px solid black;
  height: 7%;
  margin-top: 10px;
  width: 50%;
  background-color: ${({ theme }) => theme.greenL};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddSong = ({ open, onPress }) => {
  const [name, setName] = useState(`Piosenka 1`);
  const [valueVid, setValueVid] = useState(0);
  const [valueStyle, setValueStyle] = useState(0);
  const [valueRhymes, setValueRhymes] = useState(0);
  const [valueBit, setValueBit] = useState(0);
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
        <StyledRowCon>
          <Paragraph>Teledysk</Paragraph>
          <Switch onPress={() => setVid(!vid)} active={vid} />
        </StyledRowCon>
        {vid ? (
          <>
            <Bar
              title="Wydatki"
              val1={`${Math.floor((valueVid / 200) * 1000 * 0.1)}zł`}
              value={valueVid}
              setValue={setValueVid}
            />
          </>
        ) : null}

        <Bar title="Styl" val1="wolny" val2="szybki" value={valueStyle} setValue={setValueStyle} />
        <Bar title="Rymy" val1="mało" val2="dużo" value={valueRhymes} setValue={setValueRhymes} />
        <Bar title="Bit" val1="poważny" val2="imprezowy" value={valueBit} setValue={setValueBit} />
        <SubmitButton>
          <Paragraph>Dodaj piosenkę</Paragraph>
        </SubmitButton>
      </StyledContainer>
    </>
  );
};

export default AddSong;
