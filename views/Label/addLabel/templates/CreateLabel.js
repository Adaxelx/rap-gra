import React from 'react';
import styled from 'styled-components';
import { Text, View, AsyncStorage } from 'react-native';
import { Input, Button, Paragraph } from 'rap-gra/components';

const StyledWrapper = styled(View)`
  height: 100%;
  width: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const CreateLabel = ({ onPress, labelFn, yourLabelFn }) => {
  const [value, onChangeText] = React.useState('Nazwa wytwórni');

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('label', value);
      await AsyncStorage.setItem('yourLabel', value);
      console.log('gitówka');
    } catch (error) {
      console.log('error', typeof value);
    }
  };

  const buttonFn = () => {
    storeData();
    labelFn(value);
    yourLabelFn(value);
    onPress();
  };
  return (
    <StyledWrapper>
      <Input onChangeText={text => onChangeText(text)} value={value} />
      <Paragraph>Koszt założenia własnej wytwórni to:</Paragraph>
      <Paragraph>10000$</Paragraph>
      <Button title="potwierdź" onPress={buttonFn}>
        <Text>Potwierdź</Text>
      </Button>
    </StyledWrapper>
  );
};

export default CreateLabel;
