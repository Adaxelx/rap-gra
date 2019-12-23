import React from 'react';
import styled from 'styled-components';
import { ScrollView, FlatList } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';

const StyledWrapper = styled(ScrollView)`
  height: 100%;
  width: 100%;
  /* background-color: red; */
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
      <Title> {yourLabelName} </Title>
      <FlatList
        data={rapers}
        renderItem={({ item }) => <Paragraph title={item.name}>{item.name}</Paragraph>}
        keyExtractor={item => item.key}
      />
    </StyledWrapper>
  );
};

export default ManageLabel;
