import React, { useState } from 'react';
import styled from 'styled-components';
import AppContext from 'rap-gra/context/context';
import { ScrollView, Text, View } from 'react-native';
import { Title, Button, RowContainer } from 'rap-gra/components';
import ConcertPanel from './templates/ConcertPanel';

const StyledWrapper = styled(ScrollView)`
  /* min-height: 100%; */
  width: 100%;
  background-color: ${({ theme }) => theme.greenL};
`;

const StyledButton = styled(Button)`
  width: 80%;
  height: 50px;
  margin: 0 10%;
  background-color: cadetblue;
`;

const StyledRowContainer = styled(RowContainer)`
  width: 100%;
  background-color: ${({ theme }) => theme.greenD};
  margin: 10px 0;
`;

const Concerts = () => {
  const [openConcertPanel, setConcertPanel] = useState(false); // otwiera panel grania koncertow

  const buttonFn = () => {
    setConcertPanel(true);
  };

  return (
    <AppContext.Consumer>
      {context => (
        <StyledWrapper bounces>
          <Title>Koncerty</Title>
          <StyledButton onPress={buttonFn}>
            <Text>Zagraj koncert</Text>
          </StyledButton>
          <Title>Rozegrane koncery: </Title>
          {context.state.concerts.map(concert => (
            <StyledRowContainer key={concert.key}>
              <Title> {concert.name} </Title>
              <View>
                <Text>Nowi fani: +{concert.fansIncrease}</Text>
                <Text>Flow: +{concert.statsIncrease}</Text>
                <Text>Styl: +{concert.statsIncrease}</Text>
                <Text>Rymy: +{concert.statsIncrease}</Text>
                <Text>Reputacja: +{concert.reputationIncrease}</Text>
                <Text>Kasa: +{concert.cashIncrease}</Text>
              </View>
            </StyledRowContainer>
          ))}

          <ConcertPanel
            openConcertPanel={openConcertPanel}
            onPress={() => setConcertPanel(!openConcertPanel)}
            concerts={context.state.concerts}
          />
        </StyledWrapper>
      )}
    </AppContext.Consumer>
  );
};

export default Concerts;
