import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

export default function App() {
  return (
    <StyledView>
      <Text>siema Dzusia</Text>
    </StyledView>
  );
}

const StyledView = styled(View)`
  flex: 1;
  background-color: blue;
  align-items: center;
  justify-content: center;
`;
