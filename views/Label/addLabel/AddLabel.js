import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import { Input } from 'rap-gra/components/Input';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Button } from 'rap-gra/components/Button';
import AddPanel from 'rap-gra/templates/AddPanelTemplate';

const StyledAddPanel = styled(AddPanel)`
  padding: 40px;
`;

const AddLabel = ({ openAddLabel, onPress, setYourLabelName }) => {
  const [value, onChangeText] = React.useState('Nazwa twojej wytwórni');
  const buttonFn = () => {
    setYourLabelName(value);
    onPress();
  };
  return (
    <StyledAddPanel open={openAddLabel} onPress={onPress}>
      <Input onChangeText={text => onChangeText(text)} value={value} />
      <Paragraph>Koszt założenia własnej wytwórni to:</Paragraph>
      <Button title="potwierdź" onPress={buttonFn}>
        <Text>Potwierdź</Text>
      </Button>
    </StyledAddPanel>
  );
};

export default AddLabel;
