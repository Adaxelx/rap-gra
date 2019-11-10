import React from 'react';
import styled from 'styled-components';
import AppContext from 'rap-gra/context/context';
import { View, Image, Text } from 'react-native';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { Title } from '../../components/Title';

const StyledWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  padding: 0 5px;
  background-color: ${({ theme }) => theme.greenL};
  width: 100%;
  height: 100%;
`;

const Avatar = styled(Image)`
  /* width:60%; */
  margin: 20px 10px;
  /* height: ; */
`;

const StyledStats = styled(View)`
  height:80%;
  /* background-color: ${({ theme }) => theme.greenD}; */
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-content: flex-start;
  justify-content:center;
  margin-top:10px;
  padding: 0 10px;
`;

const StyledTitle = styled(Title)`
  flex-basis: 100%;
  text-align: center;
`;

const StyledNick = styled(Text)`
  font-size: 20px;
  color: ${({ theme }) => theme.fontColor};
  margin-bottom: 10px;
`;

const StyledStatValue = styled(Text)`
  font-size: 15px;
  /* margin: 10px 0 0 0; */
  display: flex;
  text-align: center;
  flex-basis: 33.33333%;
  /* position: absolute;
  top: 5%;
  right: 5%; */
  color: ${({ theme }) => theme.fontColor};
`;

const Home = () => (
  <AppContext.Consumer>
    {context => (
      <StyledWrapper>
        <StyledTitle>Statystyki</StyledTitle>
        <StyledStatValue>reputacja: {context.state.stats.reputation}</StyledStatValue>
        <StyledStatValue>fani: {context.state.stats.fans}</StyledStatValue>
        <StyledStatValue>{context.state.cash} $</StyledStatValue>
        <StyledStats>
          <StyledNick>{context.state.nick}</StyledNick>
          <ProgressBar name="flow" progress={context.state.stats.flow} />
          <ProgressBar name="styl" progress={context.state.stats.style} />
          <ProgressBar name="rymy" progress={context.state.stats.rhymes} />
          <Avatar source={require('../../assets/avatar.png')} />
        </StyledStats>
      </StyledWrapper>
    )}
  </AppContext.Consumer>
);

export default Home;
