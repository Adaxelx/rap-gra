import React from 'react';
import styled from 'styled-components';
import { Text, Modal, Alert, TouchableOpacity, View } from 'react-native';
import CreateLabel from './templates/CreateLabel';
import ManageLabel from './templates/ManageLabel';

const StyledAddPanel = styled(View)`
  background-color: ${({ theme }) => theme.greenD};
  padding: 40px;
`;

const AddLabel = ({
  openAddLabel,
  setAddLabel,
  onPress,
  setYourLabelName,
  yourLabelName,
  setYourRapers,
  labelFn,
}) => {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={openAddLabel}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <StyledAddPanel>
          <TouchableOpacity onPress={() => setAddLabel(!openAddLabel)}>
            <Text>close</Text>
          </TouchableOpacity>
          {yourLabelName ? (
            <ManageLabel yourLabelName={yourLabelName} setYourRapers={setYourRapers} />
          ) : (
            <CreateLabel setYourLabelName={setYourLabelName} onPress={onPress} labelFn={labelFn} />
          )}
        </StyledAddPanel>
      </Modal>
    </>

    // jeśli nie posiadasz swojej wytwórnii, możesz ją założyć, ale jeśli ją masz to pojawia się okno zarządzania

    // <StyledAddPanel open={openAddLabel} onPress={onPress} top>

    // </StyledAddPanel>
  );
};

export default AddLabel;
