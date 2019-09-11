import React from 'react';
import AddPanelTemplate from 'rap-gra/templates/AddPanelTemplate';
import { Title } from 'rap-gra/components/Title';

const LabelDetails = ({ openLabelDetails, onPress, clickedLabelName }) => {
  return (
    <AddPanelTemplate open={openLabelDetails} onPress={onPress}>
      <Title>{clickedLabelName}</Title>
    </AddPanelTemplate>
  );
};

export default LabelDetails;
