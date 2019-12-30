import React from 'react';
import { Text } from 'react-native';
import AddPanelTemplate from 'rap-gra/templates/AddPanelTemplate';

const ConcertPanel = ({ openConcertPanel, onPress }) => {
  return (
    <AddPanelTemplate open={openConcertPanel} onPress={onPress}>
      <Text>Zagraj Koncert</Text>
    </AddPanelTemplate>
  );
};

export default ConcertPanel;
