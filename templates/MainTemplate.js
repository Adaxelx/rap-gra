import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import Nav from '../components/Navigation/Nav';
// import GlobalStyle from '../theme/GlobalStyle';

const StyledCon = styled(View)`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const MainTemplate = ({ children }) => (
  <StyledCon>
    <Nav />
    {children}
  </StyledCon>
);

export default MainTemplate;
