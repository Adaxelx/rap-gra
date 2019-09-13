import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';
import CreateLabel from './templates/CreateLabel';

const StyledAddPanel = styled(AddPanel)`
  padding: 40px;
`;

const AddLabel = ({ openAddLabel, onPress, setYourLabelName, yourLabelName, setCurrentLabel }) => {
  return (
    <StyledAddPanel open={openAddLabel} onPress={onPress}>
      {yourLabelName ? (
        <Text>123</Text>
      ) : (
        <CreateLabel
          setYourLabelName={setYourLabelName}
          setCurrentLabel={setCurrentLabel}
          onPress={onPress}
        />
      )}
    </StyledAddPanel>
  );
};

export default AddLabel;
