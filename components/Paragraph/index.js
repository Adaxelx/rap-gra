import styled from 'styled-components';
import { Text } from 'react-native';

export const Paragraph = styled(Text)`
  color: ${({ theme }) => theme.fontColor};
  font-size: 20px;
`;
