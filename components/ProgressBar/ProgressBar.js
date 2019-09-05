import React from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native';

const StyledProgressBar = styled(View)`
  display: flex;
  flex-basis: 100%;
  flex-grow: 1;
  height: 45px;
  margin: 5px 0;
  padding: 3px;
  border: 2px solid black;

  /* $::nth-child() */
`;

const StyledProgress = styled(View)`
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  background-color: #ba6f57;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled(Text)`
  font-size: 20px;
  color: white;
`;

const ProgressBar = ({ progress, name }) => (
  <StyledProgressBar>
    <StyledProgress progress={progress}>
      <StyledText>{progress >= 12 ? name : null}</StyledText>
    </StyledProgress>
  </StyledProgressBar>
);

export default ProgressBar;
