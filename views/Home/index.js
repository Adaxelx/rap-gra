import React from 'react';
import styled from 'styled-components';
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
  flex-basis: 25%;
  /* position: absolute;
  top: 5%;
  right: 5%; */
  color: ${({ theme }) => theme.fontColor};
`;

class Home extends React.Component {
  state = {
    flow: 25,
    style: 95,
    rhymes: 12,
    nick: 'Young Krawczyk',
    cash: 1000000,
    reputation: 900,
    fans: 150000,
    energy: 100,
  };

  // displayFn = (value) => {
  //   if(value >= 1000000){
  //     return value.toString().substring(0,1) + "m"
  //   }

  //   else if(value >= 100000){
  //     return value.toString().substring(0,3) + "k"
  //   }

  //   else if(value >= 10000){
  //     return value.toString().substring(0,2) + "k"
  //   }

  //   else if(value >= 1000){
  //     return value.toString().substring(0,1) + "k"
  //   }

  //   else return value
  // }

  render() {
    const { flow, style, rhymes, nick, cash, reputation, fans, energy } = this.state;
    return (
      <StyledWrapper>
        <StyledTitle>Statystyki</StyledTitle>
        <StyledStatValue>reputacja: {reputation}</StyledStatValue>
        <StyledStatValue>fani: {fans}</StyledStatValue>
        <StyledStatValue>energia: {energy}%</StyledStatValue>
        <StyledStatValue>{cash} $</StyledStatValue>
        <StyledStats>
          <StyledNick>{nick}</StyledNick>
          <ProgressBar name="flow" progress={flow} />
          <ProgressBar name="styl" progress={style} />
          <ProgressBar name="rymy" progress={rhymes} />
          <Avatar source={require('../../assets/avatar.png')} />
        </StyledStats>
      </StyledWrapper>
    );
  }
}

export default Home;
