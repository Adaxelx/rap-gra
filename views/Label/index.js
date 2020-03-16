import React, { useState } from 'react';
import styled from 'styled-components';
import AppContext from 'rap-gra/context/context';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Paragraph, Button, Title } from 'rap-gra/components';
import AddLabel from './addLabel/AddLabel';
import LabelDetails from './addLabel/LabelDetails';

const StyledWrapper = styled(ScrollView)`
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
      fans: 40000,
      reputation: 2000,
      flow: 40,
      style: 45,
      rhymes: 45,
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
  const [openAddLabel, setAddLabel] = useState(false); // otwiera panel zakładania wytrównii
  const [openLabelDetails, setLabelDetails] = useState(false); // otwiera panel szczegółów
  const [clickedLabelName, setClickedLabelName] = useState('');
  const [clickedLabelHistory, setClickedLabelHistory] = useState('');
  const [clickedLabelRequaierments, setClickedLabelRequaierments] = useState('');
  const [clickedLabelProfits, setClickedLabelProfits] = useState('');

  const [yourRapersLocal, setYourRapers] = useState([]);

  const buttonFn = label => {
    setLabelDetails(!openLabelDetails); // otwiera
    setClickedLabelName(label.name); // to i reszta ustala w co było kliknięte
    setClickedLabelHistory(label.history);
    setClickedLabelRequaierments(label.requaierments);
    setClickedLabelProfits(label.profits);
  };

  const openFn = value => {
    setAddLabel(!openAddLabel);
    console.log('XD', value);
    setYourRapers(yourRapersLocal.concat(...value));
  };

  return (
    <AppContext.Consumer>
      {context => (
        <StyledWrapper>
          <StyledTitle>Wytwórnie</StyledTitle>
          <StyledText>Obecna wytwórnia: {context.state.currentLabel}</StyledText>
          <StyledText>Nazwa twojej wytrwórni: {context.state.yourLabel}</StyledText>

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

          <StyledButton
            onPress={() => openFn(context.state.yourRapers)}
            title="Załóż własną wytwórnię"
          >
            <StyledText>
              {context.state.yourLabel ? 'Zarządzaj wytwórnią' : '+ Załóż własną wytwórnię'}
            </StyledText>
          </StyledButton>

          <AddLabel
            openAddLabel={openAddLabel}
            onPress={() => setAddLabel(!openAddLabel)}
            labelFn={context.labelFn}
            yourLabelFn={context.yourLabelFn}
            yourLabel={context.state.yourLabel}
            addYourRaper={context.addYourRaper}
            yourRapersLocal={yourRapersLocal}
            setYourRapers={setYourRapers}
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
            currentLabel={context.state.currentLabel}
          />
        </StyledWrapper>
      )}
    </AppContext.Consumer>
  );
};
export default Label;
