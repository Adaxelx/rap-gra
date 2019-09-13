import React from 'react';
import styled from 'styled-components';
import AddPanelTemplate from 'rap-gra/templates/AddPanelTemplate';
import { Text } from 'react-native';
import { Title } from 'rap-gra/components/Title';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Button } from 'rap-gra/components/Button';

const StyledAddPanelTemplate = styled(AddPanelTemplate)`
  top: 0;
  justify-content: space-between;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 10px;
  font-size: 20px;
`;

const LabelDetails = ({
  openLabelDetails,
  onPress,
  clickedLabelName,
  clickedLabelRequaierments,
  clickedLabelProfits,
  setCurrentLabel,
}) => {
  const buttonFn = () => {
    setCurrentLabel(clickedLabelName);
    onPress();
  };

  return (
    <StyledAddPanelTemplate open={openLabelDetails} onPress={onPress}>
      <Title>{clickedLabelName}</Title>
      <StyledParagraph>Wymagania: </StyledParagraph>
      <Paragraph>Fani: {clickedLabelRequaierments.fans}</Paragraph>
      <Paragraph>Reputacja: {clickedLabelRequaierments.reputation}</Paragraph>
      <Paragraph>
        Flow: {clickedLabelRequaierments.flow} Styl: {clickedLabelRequaierments.style} Rymy:{' '}
        {clickedLabelRequaierments.rhymes}
      </Paragraph>

      <StyledParagraph>Przywileje: </StyledParagraph>
      <Paragraph>Przyrost Fanów: {clickedLabelProfits.fansIncrease}x</Paragraph>
      <Paragraph>Przyrost Reputacji: {clickedLabelProfits.reputationIncrease}x</Paragraph>
      <Paragraph>Przyrost Kasy: {clickedLabelProfits.cashIncrease}x</Paragraph>

      <Button onPress={buttonFn}>
        <Text>Dołącz</Text>
      </Button>
    </StyledAddPanelTemplate>
  );
};

export default LabelDetails;
