import React from 'react';
import styled from 'styled-components';
import { View, Image, Text } from 'react-native';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { Title } from '../../components/Title';

const StyledWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: flex-start;
  align-content: center;
  /* padding: 10px; */
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
  align-content:center;
  justify-content:center;
  padding:10px;
`;

const StyledTitle = styled(Title)`
  text-align: center;
`;

const StyledNick = styled(Text)`
  font-size: 20px;
  color: ${({ theme }) => theme.fontColor};
  margin-bottom: 10px;
`;

class Home extends React.Component {
  state = {
    flow: 25,
    style: 35,
    rhymes: 12,
    nick: 'Young Krawczyk',
  };

  render() {
    const { flow, style, rhymes, nick } = this.state;
    return (
      <StyledWrapper>
        <StyledTitle>Statystyki</StyledTitle>
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
