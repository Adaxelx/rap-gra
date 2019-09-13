import React from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';
import { Input } from 'rap-gra/components/Input';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Button } from 'rap-gra/components/Button';

const StyledWrapper = styled(View)`
  height: 100%;
  width: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const AddLabel = ({ setYourLabelName, setCurrentLabel, onPress }) => {
  const [value, onChangeText] = React.useState('Nazwa twojej wytwórni');
  const buttonFn = () => {
    setYourLabelName(value);
    setCurrentLabel(value);
    onPress();
  };
  return (
    <StyledWrapper>
      <Input onChangeText={text => onChangeText(text)} value={value} />
      <Paragraph>Koszt założenia własnej wytwórni to:</Paragraph>
      <Button title="potwierdź" onPress={buttonFn}>
        <Text>Potwierdź</Text>
      </Button>
    </StyledWrapper>
  );
};

export default AddLabel;
