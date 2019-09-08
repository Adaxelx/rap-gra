import styled from 'styled-components';
import { TextInput } from 'react-native';

export const Input = styled(TextInput)`
  color: black;
  width: 50%;
  background-color: white;
  border: 2px solid ${({ theme }) => theme.greenL};
  padding: 0 5px;
`;
