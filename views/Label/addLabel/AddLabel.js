import React from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native';

// const StyledWrapper = styled(View)`
//     height: 100%;
//     width: 100%;
//     transform: ${({ openAddLabel }) => openAddLabel ? 'scale(1)' : 'scale(0)'};
// `;

// const StyledBlackOpacity = styled(View)`
//     height: 100%;
//     width: 100%;
//     background-color: black;
//     opacity: 0.7;
//     z-index: 2;
//     transform: ${({ openAddLabel }) => openAddLabel ? 'scale(1)' : 'scale(0)'};

// `;

const StyledAddLabel = styled(View)`
  width: 80%;
  height: 80%;
  background-color: ${({ theme }) => theme.greenD};
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ openAddLabel }) => (openAddLabel ? 'translateX(0)' : 'translateX(-1000px)')};
`;

const AddLabel = ({ openAddLabel }) => (
  <StyledAddLabel openAddLabel={openAddLabel}>
    <Text>123</Text>
  </StyledAddLabel>
);

export default AddLabel;
