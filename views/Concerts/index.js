import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { Title } from 'rap-gra/components/Title';

const StyledWrapper = styled(View)`
  height: 1550px;
  width: 100%;
  background-color: ${({ theme }) => theme.greenL};
`;

const Concerts = () => (
  <StyledWrapper bounces>
    <Title>Concerts</Title>
  </StyledWrapper>
);

export default Concerts;
