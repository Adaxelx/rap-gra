import React from 'react';
import styled from 'styled-components';
import { View, Image } from 'react-native';
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

class Home extends React.Component {
  state = {
    flow: 25,
    style: 35,
    rhymes: 12,
  };

  render() {
    const { flow, style, rhymes } = this.state;
    return (
      <StyledWrapper>
        <StyledTitle>Statystyki</StyledTitle>
        <StyledStats>
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
