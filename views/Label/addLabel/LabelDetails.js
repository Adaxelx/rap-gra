import React from 'react';
import styled from 'styled-components';
import AddPanelTemplate from 'rap-gra/templates/AddPanelTemplate';
import { Text, Alert, AsyncStorage } from 'react-native';
import { Title } from 'rap-gra/components/Title';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Button } from 'rap-gra/components/Button';

const StyledParagraph = styled(Paragraph)`
  margin-top: 15px;
  margin-bottom: 5px;
  font-size: 25px;
`;

const StyledParagraphHistory = styled(Paragraph)`
  font-size: 15px;
  text-align: justify;
  margin: 0 10px;
`;

const StyledText = styled(Text)`
  font-size: 20px;
  color: ${({ theme }) => theme.fontColor};
`;

const StyledTitle = styled(Title)`
  font-size: 30px;
`;

const LabelDetails = ({
  openLabelDetails,
  onPress,
  clickedLabelName,
  clickedLabelHistory,
  clickedLabelRequaierments,
  clickedLabelProfits,
  labelFn,
  stats,
  currentLabel,
}) => {
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('label', clickedLabelName);
    } catch (error) {
      // console.log('error');
    }
  };

  const buttonFn = () => {
    // funkcja sprawdza czy nie jesteś juz w danej wytwórnii, jeśli nie to sprawdza czy spełniasz kryteria i dodaje cię do niej
    if (currentLabel !== clickedLabelName) {
      if (
        stats.fans >= clickedLabelRequaierments.fans &&
        stats.reputation >= clickedLabelRequaierments.reputation &&
        stats.flow >= clickedLabelRequaierments.flow &&
        stats.rhymes >= clickedLabelRequaierments.rhymes &&
        stats.style >= clickedLabelRequaierments.style
      ) {
        labelFn(clickedLabelName);
        storeData();
        onPress();
        Alert.alert(`Gratulacje dołączyłeś do ${clickedLabelName}!`);
      } else Alert.alert('Nie spełniasz wymagań.');
    } else {
      Alert.alert('Już jesteś w tej wytwórnii ziomek XD');
      onPress();
    }
  };

  return (
    <AddPanelTemplate open={openLabelDetails} onPress={onPress} top>
      <StyledTitle>{clickedLabelName}</StyledTitle>
      <StyledParagraphHistory>{clickedLabelHistory}</StyledParagraphHistory>
      <StyledParagraph>Wymagania: </StyledParagraph>
      <StyledText>Fani: {clickedLabelRequaierments.fans}</StyledText>
      <StyledText>Reputacja: {clickedLabelRequaierments.reputation}</StyledText>
      <StyledText>
        Flow: {clickedLabelRequaierments.flow} Styl: {clickedLabelRequaierments.style} Rymy:{' '}
        {clickedLabelRequaierments.rhymes}
      </StyledText>
      <StyledParagraph>Przywileje: </StyledParagraph>
      <StyledText>Przyrost Fanów: {clickedLabelProfits.fansIncrease}x</StyledText>
      <StyledText>Przyrost Reputacji: {clickedLabelProfits.reputationIncrease}x</StyledText>
      <StyledText>Przyrost Kasy: {clickedLabelProfits.cashIncrease}x</StyledText>

      <Button onPress={buttonFn}>
        <StyledText>Dołącz</StyledText>
      </Button>
    </AddPanelTemplate>
  );
};

export default LabelDetails;
