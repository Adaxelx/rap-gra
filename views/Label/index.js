import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Title } from 'rap-gra/components/Title';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Button } from 'rap-gra/components/Button';
import AddLabel from './addLabel/AddLabel';
import LabelDetails from './addLabel/LabelDetails';

const StyledWrapper = styled(ScrollView)`
  min-height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.greenL};
`;

const StyledLabelTile = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.greenD};
  margin: 10px 0;
  padding: 10px;
  font-size: 10px;
  color: ${({ theme }) => theme.fontColor};
`;

const StyledTitle = styled(Title)`
  text-align: center;
`;

const StyledText = styled(Text)`
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.fontColor};
`;

const StyledButton = styled(Button)`
  width: auto;
  height: auto;
  margin: 0 auto;
  background-color: #00b7ff;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid white;
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
    name: 'Krzywo Label',
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
  {
    key: 2,
    name: 'Krzywo2',
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
  {
    key: 3,
    name: 'Krzywo3',
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
  {
    key: 4,
    name: 'Krzywo4',
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
  {
    key: 5,
    name: 'Krzywo5',
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
  {
    key: 6,
    name: 'Krzywo6',
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

const Label = () => {
  const [openAddLabel, setAddLabel] = useState(false);
  const [openLabelDetails, setLabelDetails] = useState(false);
  const [yourLabelName, setYourLabelName] = useState('');
  const [clickedLabelName, setClickedLabelName] = useState('');

  const buttonFn = label => {
    setLabelDetails(!openLabelDetails);
    setClickedLabelName(label.name);
  };

  return (
    <StyledWrapper>
      <StyledTitle>Wytwórnie</StyledTitle>
      <StyledText>Obecna wytwórnia: {clickedLabelName}</StyledText>
      <StyledText>Nazwa twojej wytrwórni: {yourLabelName}</StyledText>

      <StyledButton onPress={() => setAddLabel(!openAddLabel)} title="Załóż własną wytwórnię">
        <StyledText>+ Załóż własną wytwórnię</StyledText>
      </StyledButton>

      {labels.map(label => (
        <StyledLabelTile key={label.key} onPress={() => buttonFn(label)}>
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

      <AddLabel
        openAddLabel={openAddLabel}
        onPress={() => setAddLabel(!openAddLabel)}
        setYourLabelName={setYourLabelName}
      />
      <LabelDetails
        openLabelDetails={openLabelDetails}
        onPress={() => setLabelDetails(!openLabelDetails)}
        clickedLabelName={clickedLabelName}
      />
    </StyledWrapper>
  );
};
export default Label;
