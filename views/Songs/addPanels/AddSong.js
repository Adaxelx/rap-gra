import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';
import styled from 'styled-components';
import { Input } from 'rap-gra/components/Input';
import Switch from 'rap-gra/components/Switch';
import Bar from 'rap-gra/components/Bar';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';
import { Button } from 'rap-gra/components/Button';

const StyledRowCon = styled(View)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 5%;
  align-items: center;
  justify-content: space-between;
`;

const AddSong = ({ open, onPress, setSong, openSubject, songsL, songs }) => {
  const [name, setName] = useState(`Piosenka ${songsL * 1 + 1}`);
  const [valueVid, setValueVid] = useState(0);
  const [valueStyle, setValueStyle] = useState(0);
  const [valueRhymes, setValueRhymes] = useState(0);
  const [valueBit, setValueBit] = useState(0);
  const [vid, setVid] = useState(false);

  const saveData = () => {
    let copy = false;
    songs.forEach(({ title }) => {
      if (copy !== true) {
        copy = title === name;
      }
    });
    if (copy) {
      Alert.alert('Stworzyłeś już taką piosenkę');
      return -1;
    }
    console.log(name.length);
    if (name.length <= 3 || name.length >= 30) {
      console.log('xd');
      Alert.alert('Tytuł powinien zamierać od 3 do 30 znaków');
      return -1;
    }
    setSong({
      full: false,
      name,
      values: {
        video: {
          active: vid,
          value: valueVid,
        },
        style: Math.floor(valueStyle),
        rhymes: Math.floor(valueRhymes),
        bit: Math.floor(valueBit),
      },
    });
    onPress();
    openSubject();
    return 0;
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
      <Button onPress={saveData}>
        <Paragraph>Dalej</Paragraph>
      </Button>
    </AddPanel>
  );
};

export default AddSong;
