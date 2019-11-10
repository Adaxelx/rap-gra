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
  setYourRapers,
  labelFn,
}) => {
  return (
    <StyledAddPanel open={openAddLabel} onPress={onPress} top>
      {yourLabelName ? (
        <ManageLabel yourLabelName={yourLabelName} setYourRapers={setYourRapers} />
      ) : (
        <CreateLabel setYourLabelName={setYourLabelName} onPress={onPress} labelFn={labelFn} />
      )}
    </StyledAddPanel>
  );
};

export default AddLabel;
