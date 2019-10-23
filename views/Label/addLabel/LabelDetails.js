import React, { useState } from 'react';
import styled from 'styled-components';
import AddPanelTemplate from 'rap-gra/templates/AddPanelTemplate';
import { Text } from 'react-native';
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

const StyledAlertMsg = styled(Paragraph)`
  /* margin: 10px 0; */
  font-size: 35px;
  text-align: center;
  background-color: black;
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
}) => {
  const [alertMsg, setAlertMsg] = useState('');
  const buttonFn = () => {
    if (
      stats.fans >= clickedLabelRequaierments.fans &&
      stats.reputation >= clickedLabelRequaierments.reputation &&
      stats.flow >= clickedLabelRequaierments.flow &&
      stats.rhymes >= clickedLabelRequaierments.rhymes &&
      stats.style >= clickedLabelRequaierments.style
    ) {
      labelFn(clickedLabelName);
      onPress();
    } else setAlertMsg('Nie spełniasz wymagań!');
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

      <StyledAlertMsg>{alertMsg}</StyledAlertMsg>

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
