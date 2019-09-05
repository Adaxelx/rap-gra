import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const StyledView = styled(View)`
  width: 100%;
  background-color: ${({ theme }) => theme.greenD};
  height: 20px;
`;

const Messages = () => <StyledView />;

export default Messages;
