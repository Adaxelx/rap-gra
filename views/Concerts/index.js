import React, { useState } from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native';
import { Title } from 'rap-gra/components/Title';
import { Button } from 'rap-gra/components/Button';
import ConcertPanel from './templates/ConcertPanel';

const StyledWrapper = styled(View)`
  min-height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.greenL};
  display: flex;
  align-items: center;
`;

const Concerts = () => {
  const [openConcertPanel, setConcertPanel] = useState(false); // otwiera panel grania koncertow

  const buttonFn = () => {
    setConcertPanel(true);
  };

  return (
    <StyledWrapper bounces>
      <Title>Concerts</Title>
      <Button onPress={buttonFn}>
        <Text>Zagraj koncert</Text>
      </Button>
      <Text>Rozegrane koncery: </Text>

      <ConcertPanel
        openConcertPanel={openConcertPanel}
        onPress={() => setConcertPanel(!openConcertPanel)}
      />
    </StyledWrapper>
  );
};

export default Concerts;
