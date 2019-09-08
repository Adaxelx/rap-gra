import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

export const Button = styled(TouchableOpacity)`
  border: 2px solid black;
  height: 7%;
  margin-top: 10px;
  width: 45%;
  background-color: ${({ theme }) => theme.greenL};
  display: flex;
  justify-content: center;
  align-items: center;
`;
