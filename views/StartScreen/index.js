import React, { useState } from 'react';
import logo from 'rap-gra/assets/logo.png';
import { Image, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import { path } from 'rap-gra/constants/routes';
import styled from 'styled-components';
import { ColumnContainer } from 'rap-gra/components/ColumnContainer';
import { Title } from 'rap-gra/components/Title';
import { Paragraph } from 'rap-gra/components/Paragraph';
import PopUp from 'rap-gra/views/StartScreen/PopUp';

const StyledCon = styled(ColumnContainer)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.greenD};
`;
const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.2;
`;

const StyledTitle = styled(Title)`
  font-size: 50;
`;

const StyledMenu = styled(ColumnContainer)`
  flex-grow: 1;
`;

const StyledMenuItem = styled(Paragraph)`
  font-size: 35;
  text-transform: uppercase;
`;

const StartScreen = ({ component }) => {
  const { HOME } = path;
  const [open, setOpen] = useState(false);
  return (
    <StyledCon>
      <ColumnContainer>
        <StyledTitle>Rap-gra</StyledTitle>
        <Paragraph>Zostań najpopularniejszym raperem!</Paragraph>
      </ColumnContainer>
      <StyledImage style={{ resizeMode: 'contain' }} source={logo} />
      <StyledMenu>
        <ColumnContainer>
          <Link underlayColor="transparent" to={HOME}>
            <StyledMenuItem>Kontynuuj</StyledMenuItem>
          </Link>
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <StyledMenuItem>Nowa gra</StyledMenuItem>
          </TouchableOpacity>
        </ColumnContainer>
      </StyledMenu>
      <PopUp open={open} onPress={() => setOpen(!open)} component={component} />
    </StyledCon>
  );
};

export default StartScreen;
