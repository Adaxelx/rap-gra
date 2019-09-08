import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';
import styled from 'styled-components';
import { Input } from 'rap-gra/components/Input';
import Switch from 'rap-gra/components/Switch';
import Bar from 'rap-gra/components/Bar';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';

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

const AddSong = ({ open, onPress, setSong, openSubject }) => {
  const [name, setName] = useState(`Piosenka 1`);
  const [valueVid, setValueVid] = useState(0);
  const [valueStyle, setValueStyle] = useState(0);
  const [valueRhymes, setValueRhymes] = useState(0);
  const [valueBit, setValueBit] = useState(0);
  const [vid, setVid] = useState(false);

  const saveData = () => {
    setSong({
      full: false,
      name,
      values: {
        video: {
          active: vid,
          value: valueVid,
        },
        style: valueStyle,
        rhymes: valueRhymes,
        bit: valueBit,
      },
    });
    onPress();
    openSubject();
  };

  return (
    <AddPanel open={open} onPress={onPress}>
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
      <SubmitButton onPress={saveData}>
        <Paragraph>Dalej</Paragraph>
      </SubmitButton>
    </AddPanel>
  );
};

export default AddSong;
