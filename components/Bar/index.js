import React from 'react';
import styled from 'styled-components';
import { View, TouchableOpacity } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';

const StyledContainer = styled(View)`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  height: 15%;
  overflow: hidden;
`;

const StyledView = styled(View)`
  display: flex;
  flex-direction: row;
  width: 200px;

  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(TouchableOpacity)`
  width: 200px;
  flex-shrink: 1;
  border: 2px solid ${({ theme }) => theme.greenL};
  overflow: hidden;
  display: flex;
  z-index: 1;
  align-items: flex-start;
`;

const StyledCon = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;
  align-items: center;
`;

const StyledBar = styled(View)`
  height: 100%;
  width: 100%;
  background-color: black;
  ${({ value }) => `transform: translateX(${value - 200}px)`}
`;

const Bar = ({ title, val1, val2, value, setValue }) => {
  const handlePress = ev => {
    setValue(ev.nativeEvent.locationX);
  };
  return (
    <StyledContainer>
      <Paragraph>{title}</Paragraph>
      <StyledButton onPress={ev => handlePress(ev)}>
        <StyledCon />
        <StyledBar value={value} />
      </StyledButton>
      <StyledView>
        {val1 || val2 ? (
          <>
            <Paragraph>{val1}</Paragraph>
            <Paragraph>{val2}</Paragraph>
          </>
        ) : null}
      </StyledView>
    </StyledContainer>
  );
};

export default Bar;
