import React from 'react';
import styled from 'styled-components';
import { SafeAreaView } from 'react-native';
import Nav from 'rap-gra/components/Navigation/Nav';
import Logo from 'rap-gra/components/Logo';
// import Messages from 'rap-gracomponents/Messages';
// import GlobalStyle from '../theme/GlobalStyle';

const StyledCon = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const MainTemplate = ({ children }) => (
  <StyledCon>
    <Logo />
    <Nav />
    {children}
    {/* <Messages /> */}
  </StyledCon>
);

export default MainTemplate;
