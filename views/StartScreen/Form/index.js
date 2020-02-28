import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components';
import Pic from 'rap-gra/assets/avatar.jpg';
import Pic2 from 'rap-gra/assets/avatar.png';
import { ColumnContainer, Button, RowContainer, Paragraph, Input } from 'rap-gra/components';
import { resetGame } from 'rap-gra/views/StartScreen/resetGame';
import { Redirect } from 'react-router-native';
import { path } from 'rap-gra/constants/routes';
import AppContext from 'rap-gra/context/context';

const StyledCon = styled(View)`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;
`;

const StyledHeaders = styled(Paragraph)`
  margin-bottom: 10px;
`;

const StyledRC = styled(RowContainer)`
  width: 100%;
  justify-content: space-around;
`;

const Avatar = styled(Image)`
  height: 100px;
  width: 100px;
`;

const StyledButton = styled(Button)`
  align-self: center;
  height: auto;
`;

const StyledImgBtn = styled(TouchableOpacity)`
  position: relative;
  overflow: hidden;
`;

const StyledImgBg = styled(View)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: green;
  opacity: 0.6;
  z-index: 1;
  ${({ value }) => `transform: translateX(${value - 100}px)`}
`;

const Form = () => {
  const [name, setName] = useState('');
  const [activePic, setActivePic] = useState('');
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [redirect, setRedirect] = useState(false);

  const sendData = setAS => {
    if (name === '') {
      Alert.alert('Podaj pseudonim!');
      return -1;
    }
    if (activePic === '') {
      Alert.alert('Wybierz obrazek!');
      return -1;
    }
    resetGame(name, activePic, setAS);
    return setRedirect(true);
  };

  const { HOME } = path;

  return (
    <AppContext.Consumer>
      {value => (
        <StyledCon>
          <ColumnContainer>
            <StyledHeaders>Pseudonim: </StyledHeaders>
            <Input onChangeText={text => setName(text)} value={name} />
          </ColumnContainer>
          <ColumnContainer>
            <StyledHeaders>Postać: </StyledHeaders>
            <StyledRC>
              <StyledImgBtn
                onPress={() => {
                  setActivePic(activePic === '1' ? '' : '1');
                  setVal2(0);
                  setVal1(val1 === 0 ? 100 : 0);
                }}
              >
                <StyledImgBg value={val1} />
                <Avatar source={Pic} style={{ resizeMode: 'contain' }} />
              </StyledImgBtn>
              <StyledImgBtn
                onPress={() => {
                  setActivePic(activePic === '2' ? '' : '2');
                  setVal2(val2 === 0 ? 100 : 0);
                  setVal1(0);
                }}
              >
                <StyledImgBg value={val2} />
                <Avatar source={Pic2} style={{ resizeMode: 'contain' }} />
              </StyledImgBtn>
            </StyledRC>
          </ColumnContainer>
          <StyledButton onPress={() => sendData(value.retrieveData)}>
            <Paragraph>Utwórz</Paragraph>
          </StyledButton>
          {redirect ? <Redirect to={HOME} /> : null}
        </StyledCon>
      )}
    </AppContext.Consumer>
  );
};

export default Form;
