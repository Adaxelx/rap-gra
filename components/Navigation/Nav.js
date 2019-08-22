import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { Link } from 'react-router-native';

const StyledView = styled(View)`
  height: 100px;
  width: 100%;
  background-color: yellow;
`;

const Nav = () => (
  <StyledView>
    <Link to="/">
      <Text>Home</Text>
    </Link>
    <Link to="/songs">
      <Text>Piosenki</Text>
    </Link>
    <Link to="/concerts">
      <Text>Koncerty</Text>
    </Link>
    <Link to="/label">
      <Text>Wytwórnia</Text>
    </Link>
  </StyledView>
);

export default Nav;
