import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Title } from 'rap-gra/components/Title';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Button } from 'rap-gra/components/Button';
import AddLabel from './addLabel/AddLabel';
import LabelDetails from './addLabel/LabelDetails';

const StyledWrapper = styled(ScrollView)`
  width: 100%;
  background-color: ${({ theme }) => theme.greenL};
  padding-bottom: 200px;
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
  const [clickedLabelRequaierments, setClickedLabelRequaierments] = useState('');
  const [clickedLabelProfits, setClickedLabelProfits] = useState('');
  const [currentLabel, setCurrentLabel] = useState('');

  // const [currentLabelName, setCurrentLabelName] = useState('');

  const buttonFn = label => {
    setLabelDetails(!openLabelDetails);
    setClickedLabelName(label.name);
    setClickedLabelRequaierments(label.requaierments);
    setClickedLabelProfits(label.profits);
  };

  return (
    <StyledWrapper>
      <StyledTitle>Wytwórnie</StyledTitle>
      <StyledText>Obecna wytwórnia: {currentLabel}</StyledText>
      <StyledText>Nazwa twojej wytrwórni: {yourLabelName}</StyledText>
      <StyledText>Kliknięta wytrwórnia: {clickedLabelName}</StyledText>

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

      <StyledButton onPress={() => setAddLabel(!openAddLabel)} title="Załóż własną wytwórnię">
        <StyledText>
          {yourLabelName ? 'Zarządzaj wytwórnią' : '+ Załóż własną wytwórnię'}
        </StyledText>
      </StyledButton>

      <AddLabel
        openAddLabel={openAddLabel}
        onPress={() => setAddLabel(!openAddLabel)}
        setYourLabelName={setYourLabelName}
        yourLabelName={yourLabelName}
        setCurrentLabel={setCurrentLabel}
      />
      <LabelDetails
        openLabelDetails={openLabelDetails}
        onPress={() => setLabelDetails(!openLabelDetails)}
        clickedLabelName={clickedLabelName}
        clickedLabelRequaierments={clickedLabelRequaierments}
        clickedLabelProfits={clickedLabelProfits}
        setCurrentLabel={setCurrentLabel}
      />
    </StyledWrapper>
  );
};
export default Label;
