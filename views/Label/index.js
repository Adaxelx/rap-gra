import React from 'react';
import styled from 'styled-components';
import { View, ScrollView } from 'react-native';
import { Title } from 'rap-gra/components/Title';
import { Paragraph } from 'rap-gra/components/Paragraph';

const StyledWrapper = styled(ScrollView)`
  min-height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.greenL};
`;

const StyledLabelTile = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.greenD};
  margin-bottom: 10px;
  padding: 10px;
  font-size: 10px;
  color: white;
`;

const labels = [
  {
    key: 0,
    name: 'B.O.Ł Łecołds',
    requaierments: {
      fans: 10000,
      reputation: 1000,
      flow: 15,
      style: 15,
      rhymes: 15,
    },
    profits: {
      fansIncrease: 2,
      reputationIncrease: 2,
      cashIncrease: 2,
    },
  },
  {
    key: 1,
    name: 'Krzywo',
    requaierments: {
      fans: 20000,
      reputation: 2000,
      flow: 30,
      style: 35,
      rhymes: 35,
    },
    profits: {
      fansIncrease: 3,
      reputationIncrease: 3,
      cashIncrease: 3,
    },
  },
];

const Label = () => (
  <StyledWrapper>
    <Title>Wytwórnie</Title>
    {labels.map(label => (
      <StyledLabelTile key={label.key}>
        <Title>{label.name}</Title>
        <View>
          <Paragraph>Wymagania: </Paragraph>
          <Paragraph>Fani: {label.requaierments.fans}</Paragraph>
          <Paragraph>Reputacja: {label.requaierments.reputation}</Paragraph>
          <Paragraph>
            Flow: {label.requaierments.flow} Styl: {label.requaierments.style} Rymy:{' '}
            {label.requaierments.rhymes}
          </Paragraph>
        </View>
      </StyledLabelTile>
    ))}
  </StyledWrapper>
);
export default Label;
