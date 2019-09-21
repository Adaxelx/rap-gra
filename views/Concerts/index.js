import React from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native';
import { Title } from 'rap-gra/components/Title';
import { Button } from 'rap-gra/components/Button';

const StyledWrapper = styled(View)`
  height: 1550px;
  width: 100%;
  background-color: ${({ theme }) => theme.greenL};
  display: flex;
  align-items: center;
`;

const Concerts = () => (
  <StyledWrapper bounces>
    <Title>Concerts</Title>
    <Button>
      <Text>Zagraj koncert</Text>
    </Button>
  </StyledWrapper>
);

export default Concerts;
