import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Paragraph } from 'rap-gra/components/Paragraph';
import styled, { css } from 'styled-components';

const StyledContainer = styled(View)`
  position: absolute;
  color: ${({ theme }) => theme.fontColor};
  bottom: 20;
  left: 20;
  right: 20;
  top: 20;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.greenD};

  transform: translateX(-1000px);
  ${({ open }) =>
    open &&
    css`
      transform: translateX(0);
    `};
`;

const StyledCloseButton = styled(TouchableHighlight)`
  background-color: transparent;
  height: 30px;
  width: 30px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLabel = styled(Paragraph)`
  color: red;
  font-size: 25px;
`;

const StyledCurtain = styled(View)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.8;
  transform: translateX(-1000px);
  ${({ open }) =>
    open &&
    css`
      transform: translateX(0);
    `};
`;

const AddSong = ({ open, onPress }) => {
  return (
    <>
      <StyledCurtain open={open} />
      <StyledContainer open={open}>
        <>
          <StyledCloseButton onPress={onPress} outline>
            <>
              <StyledLabel>X</StyledLabel>
            </>
          </StyledCloseButton>
        </>
      </StyledContainer>
    </>
  );
};

export default AddSong;
