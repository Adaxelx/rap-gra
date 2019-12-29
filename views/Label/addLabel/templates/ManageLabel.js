import React from 'react';
import styled from 'styled-components';
import { ScrollView, View, Text } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';

const StyledWrapper = styled(View)`
  width: 100%;
`;

// const StyledRaperList = styled(ScrollView)``;

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

const StyledAddButton = styled(Text)`
  height: 100%;
  width: 30px;
  font-size: 20px;
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
];

const ManageLabel = ({ yourLabelName }) => {
  return (
    <StyledWrapper>
      <Title> {yourLabelName}TEST </Title>
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

            <StyledAddButton>+</StyledAddButton>
          </StyledRaperTile>
        ))}
      </ScrollView>
    </StyledWrapper>
  );
};

export default ManageLabel;
