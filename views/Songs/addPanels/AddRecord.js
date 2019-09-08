import React, { useState } from 'react';
import { View } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';
import Bar from 'rap-gra/components/Bar';
import styled, { css } from 'styled-components';
import Switch from 'rap-gra/components/Switch';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';
import { Input } from 'rap-gra/components/Input';

const StyledFormType = styled(View)`
  display: flex;
  align-items: center;
  width: 80%;
  margin-top: 10px;
  ${({ two }) =>
    two &&
    css`
      width: 50%;
      margin-top: 0;
    `}
`;

const StyledRowContainer = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AddRecord = ({ open, onPress }) => {
  const [type, setType] = useState(false);
  const [name, setName] = useState('Płyta1');
  const [preorder, setPreorder] = useState(false);
  const [cover, setCover] = useState(0);
  const [special, setSpecial] = useState(0);
  const [ads, setAds] = useState(0);
  return (
    <AddPanel open={open} onPress={onPress}>
      <Title>Stwórz płytę</Title>
      <Input onChangeText={text => setName(text)} value={name} />
      <StyledFormType two>
        <Paragraph>Rodzaj:</Paragraph>
        <StyledRowContainer>
          <Paragraph>EP</Paragraph>
          <Switch active={type} onPress={() => setType(!type)} />
          <Paragraph>LP</Paragraph>
        </StyledRowContainer>
      </StyledFormType>
      <StyledFormType>
        <StyledRowContainer>
          <Paragraph>Przedsprzedaż:</Paragraph>
          <Switch active={preorder} onPress={() => setPreorder(!preorder)} />
        </StyledRowContainer>
      </StyledFormType>
      <StyledFormType>
        <StyledRowContainer>
          <Paragraph>Edycja kolekcjonerska:</Paragraph>
          <Switch active={special} onPress={() => setSpecial(!special)} />
        </StyledRowContainer>
      </StyledFormType>
      <Bar title="Okładka" val1={`${Math.floor(cover)}zł`} value={cover} setValue={setCover} />
      <Bar title="Kampania reklamowa" val1={`${Math.floor(ads)}zł`} value={ads} setValue={setAds} />
    </AddPanel>
  );
};

export default AddRecord;
