import React, { useState } from 'react';
import styled from 'styled-components';
import AppContext from 'rap-gra/context/context';
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
    history:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    history:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    history:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    history:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    history:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    history:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
  const [clickedLabelHistory, setClickedLabelHistory] = useState('');
  const [clickedLabelRequaierments, setClickedLabelRequaierments] = useState('');
  const [clickedLabelProfits, setClickedLabelProfits] = useState('');

  // const [currentLabelName, setCurrentLabelName] = useState('');

  const buttonFn = label => {
    setLabelDetails(!openLabelDetails);
    setClickedLabelName(label.name);
    setClickedLabelHistory(label.history);
    setClickedLabelRequaierments(label.requaierments);
    setClickedLabelProfits(label.profits);
  };

  return (
    <AppContext.Consumer>
      {context => (
        <StyledWrapper>
          <StyledTitle>Wytwórnie</StyledTitle>
          <StyledText>Obecna wytwórnia: {context.state.currentLabel}</StyledText>
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
            labelFn={context.labelFn}
          />
          <LabelDetails
            openLabelDetails={openLabelDetails}
            onPress={() => setLabelDetails(!openLabelDetails)}
            clickedLabelName={clickedLabelName}
            clickedLabelHistory={clickedLabelHistory}
            clickedLabelRequaierments={clickedLabelRequaierments}
            clickedLabelProfits={clickedLabelProfits}
            labelFn={context.labelFn}
            stats={context.state.stats}
          />
        </StyledWrapper>
      )}
    </AppContext.Consumer>
  );
};
export default Label;
