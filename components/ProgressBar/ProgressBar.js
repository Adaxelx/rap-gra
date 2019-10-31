import React from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native';

const StyledProgressBar = styled(View)`
  display: flex;
  flex-basis: 100%;
  flex-grow: 1;
  height: 8%;
  margin: 5px 0;
  padding: 3px;
  border: 2px solid black;
  position: relative;

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
  color: ${({ theme }) => theme.fontColor};
  position: absolute;
  z-index: 2;
  right: 5%;
  top: 50%;
  transform: translateY(-11px);
`;

const ProgressBar = ({ progress, name }) => (
  <StyledProgressBar>
    {/* <StyledText>{progress >= 15 ? name : null}</StyledText> */}
    <StyledText>
      {progress}% {name}
    </StyledText>

    <StyledProgress progress={progress} />
  </StyledProgressBar>
);

export default ProgressBar;
