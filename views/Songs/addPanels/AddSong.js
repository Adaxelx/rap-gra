import React, { useEffect, useState } from 'react';
import { View, Animated } from 'react-native';
import styled, { css } from 'styled-components';

const StyledContainer = styled(View)`
  position: absolute;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  opacity: 0
    ${({ open }) =>
      open &&
      css`
        opacity: 1;
      `};
`;

const AddSong = ({ open }) => {
  const [opacity] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 10000,
    }).start();
  }, open);
  return <StyledContainer open={open} />;
};

export default AddSong;
