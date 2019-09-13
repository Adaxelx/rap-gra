import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import { Paragraph } from 'rap-gra/components/Paragraph';
import { Title } from 'rap-gra/components/Title';
import { Link } from 'react-router-native';
import { Input } from 'rap-gra/components/Input';
import { RowContainer } from 'rap-gra/components/RowContainer';

const StyledContainer = styled(ScrollView)`
  width: 100%;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.greenL};
`;

const StyledLink = styled(Link)`
  border: 2px solid ${({ theme }) => theme.greenD};
  padding: 5px;
`;

const AllItemsTemplate = ({ children, title }) => {
  return (
    <StyledContainer>
      <Title>{title}</Title>
      <RowContainer>
        <StyledLink underlayColor="transparent" to="/songs">
          <Paragraph>Wstecz</Paragraph>
        </StyledLink>
        <Input />
      </RowContainer>
      <>{children}</>
    </StyledContainer>
  );
};

export default AllItemsTemplate;
