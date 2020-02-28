import React, { useState, useEffect } from 'react';
import logo from 'rap-gra/assets/logo.png';
import { Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { Link } from 'react-router-native';
import { path } from 'rap-gra/constants/routes';
import styled from 'styled-components';
import { ColumnContainer, Paragraph, Title } from 'rap-gra/components';
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

const StyledDisabled = styled(StyledMenuItem)`
  color: gray;
`;

const StartScreen = () => {
  const { HOME } = path;
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const checkIfDisabled = async () => {
    try {
      const name = await AsyncStorage.getItem('nick');
      if (name !== null) {
        setDisabled(false);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    checkIfDisabled();
  });

  return (
    <StyledCon>
      <ColumnContainer>
        <StyledTitle>Rap-gra</StyledTitle>
        <Paragraph>Zostań najpopularniejszym raperem!</Paragraph>
      </ColumnContainer>
      <StyledImage style={{ resizeMode: 'contain' }} source={logo} />
      <StyledMenu>
        <ColumnContainer>
          {!disabled ? (
            <Link underlayColor="transparent" to={HOME}>
              <StyledMenuItem>Kontynuuj</StyledMenuItem>
            </Link>
          ) : (
            <StyledDisabled>Kontynuuj</StyledDisabled>
          )}

          <TouchableOpacity onPress={() => setOpen(!open)}>
            <StyledMenuItem>Nowa gra</StyledMenuItem>
          </TouchableOpacity>
        </ColumnContainer>
      </StyledMenu>
      <PopUp open={open} onPress={() => setOpen(!open)} />
    </StyledCon>
  );
};

export default StartScreen;
