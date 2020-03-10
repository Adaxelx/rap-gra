import React from 'react';
import styled from 'styled-components';
import AddPanelTemplate from 'rap-gra/templates/AddPanelTemplate';
import { View } from 'react-native';
import CreateLabel from './templates/CreateLabel';
import ManageLabel from './templates/ManageLabel';

const StyledAddPanel = styled(View)`
  background-color: ${({ theme }) => theme.greenD};
  width: 100%;
  padding: 40px;
`;

const AddLabel = ({ openAddLabel, onPress, setYourRapers, labelFn, yourLabelFn, yourLabel }) => {
  return (
    <>
      <AddPanelTemplate open={openAddLabel} onPress={onPress} top>
        <StyledAddPanel>
          {yourLabel ? (
            <ManageLabel yourLabelName={yourLabel} setYourRapers={setYourRapers} />
          ) : (
            <CreateLabel onPress={onPress} labelFn={labelFn} yourLabelFn={yourLabelFn} />
          )}

          {/* {yourLabelName ? (
            <CreateLabel setYourLabelName={setYourLabelName} onPress={onPress} labelFn={labelFn} />
          ) : (
            <ManageLabel yourLabelName={yourLabelName} setYourRapers={setYourRapers} />
          )}  DO develpmnetu */}
        </StyledAddPanel>
      </AddPanelTemplate>
    </>

    // jeśli nie posiadasz swojej wytwórnii, możesz ją założyć, ale jeśli ją masz to pojawia się okno zarządzania
  );
};

export default AddLabel;
