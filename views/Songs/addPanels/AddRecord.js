import React, { useState } from 'react';
import { View } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';
import styled from 'styled-components';
import Switch from 'rap-gra/components/Switch';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';

const StyledFormType = styled(View)`
  height: 10%;
  display: flex;
  align-items: center;
  width: 50%;
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
  return (
    <AddPanel open={open} onPress={onPress}>
      <Title>Stwórz płytę</Title>
      <StyledFormType>
        <Paragraph>Rodzaj:</Paragraph>
        <StyledRowContainer>
          <Paragraph>EP</Paragraph>
          <Switch active={type} onPress={() => setType(!type)} />
          <Paragraph>LP</Paragraph>
        </StyledRowContainer>
      </StyledFormType>
    </AddPanel>
  );
};

export default AddRecord;
