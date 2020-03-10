import React from 'react';
import styled from 'styled-components';
import { ScrollView, View, Text, TouchableNativeFeedback } from 'react-native';
import { Paragraph, Title } from 'rap-gra/components';

const StyledWrapper = styled(View)`
  width: 100%;
  padding-bottom: 50px;
`;

const StyledRaperTile = styled(View)`
  width: 100%;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.greenL};
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  position: relative;
`;

const StyledRaperStats = styled(View)`
  margin: 0 5px;
`;

const StyledAddButton = styled(TouchableNativeFeedback)`
  height: 40px;
  width: 50px;
  font-size: 25px;
  background-color: cadetblue;
  padding: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledText = styled(Text)`
  text-align: center;
  margin: 0;
  padding: 0;
  flex-basis: 100%;
  color: white;
  margin: 5px;
  font-size: 20px;
`;

const rapers = [
  {
    key: '0',
    name: 'GęGę',
    requaierments: {
      fans: 10000,
      reputation: 1000,
      flow: 75,
      style: 65,
      rhymes: 35,
    },
    profits: {
      fansIncrease: 2,
      reputationIncrease: 2,
      cashIncrease: 2,
    },
  },
  {
    key: '`',
    name: 'Young Kigi',
    requaierments: {
      fans: 10000,
      reputation: 1000,
      flow: 25,
      style: 25,
      rhymes: 35,
    },
    profits: {
      fansIncrease: 1.5,
      reputationIncrease: 1.5,
      cashIncrease: 1.5,
    },
  },
  {
    key: '2',
    name: 'Young Single',
    requaierments: {
      fans: 10000,
      reputation: 1000,
      flow: 25,
      style: 25,
      rhymes: 35,
    },
    profits: {
      fansIncrease: 1.5,
      reputationIncrease: 1.5,
      cashIncrease: 1.5,
    },
  },
  {
    key: '3',
    name: 'Palec',
    requaierments: {
      fans: 10000,
      reputation: 1000,
      flow: 25,
      style: 25,
      rhymes: 35,
    },
    profits: {
      fansIncrease: 1.5,
      reputationIncrease: 1.5,
      cashIncrease: 1.5,
    },
  },
  {
    key: '4',
    name: 'Chudson',
    requaierments: {
      fans: 10000,
      reputation: 1000,
      flow: 25,
      style: 25,
      rhymes: 35,
    },
    profits: {
      fansIncrease: 2.5,
      reputationIncrease: 1.5,
      cashIncrease: 2.5,
    },
  },
];

const ManageLabel = ({ yourLabelName }) => {
  return (
    <StyledWrapper>
      <Title> {yourLabelName} </Title>
      <View>
        <Text>Zmień azwe</Text>
        <Text>Usuń wytwórnię</Text>
      </View>
      <ScrollView>
        {rapers.map(raper => (
          <StyledRaperTile key={raper.key}>
            <StyledText>{raper.name}</StyledText>
            <StyledRaperStats>
              <Paragraph>Wymagania: </Paragraph>
              <Paragraph>Fani: {raper.requaierments.fans}</Paragraph>
              <Paragraph>Reputacja: {raper.requaierments.reputation}</Paragraph>
              <Paragraph>Flow: {raper.requaierments.flow}</Paragraph>
              <Paragraph>Style: {raper.requaierments.style}</Paragraph>
              <Paragraph>Rymy: {raper.requaierments.rhymes}</Paragraph>
            </StyledRaperStats>
            <StyledRaperStats>
              <Paragraph>Przywileje: </Paragraph>
              <Paragraph>Przyrost fanów: {raper.profits.fansIncrease}</Paragraph>
              <Paragraph>Przyrost reputacji: {raper.profits.reputationIncrease}</Paragraph>
              <Paragraph>Przyrost kasy: {raper.profits.cashIncrease}</Paragraph>
            </StyledRaperStats>

            <StyledAddButton>
              <Text>+</Text>
            </StyledAddButton>
          </StyledRaperTile>
        ))}
      </ScrollView>
    </StyledWrapper>
  );
};

export default ManageLabel;
