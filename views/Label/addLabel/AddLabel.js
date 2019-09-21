import React from 'react';
import styled from 'styled-components';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';
import CreateLabel from './templates/CreateLabel';
import ManageLabel from './templates/ManageLabel';

const StyledAddPanel = styled(AddPanel)`
  padding: 40px;
`;

const AddLabel = ({
  openAddLabel,
  onPress,
  setYourLabelName,
  yourLabelName,
  setCurrentLabel,
  setYourRapers,
}) => {
  return (
    <StyledAddPanel open={openAddLabel} onPress={onPress}>
      {yourLabelName ? (
        <ManageLabel yourLabelName={yourLabelName} setYourRapers={setYourRapers} />
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
