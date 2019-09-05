import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { Title } from '../../components/Title';

const StyledWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  background-color: #5c826b;
  width: 100%;
  height: 100%;
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
        <Title>Statystyki</Title>
        <ProgressBar name="flow" progress={flow} />
        <ProgressBar name="styl" progress={style} />
        <ProgressBar name="rymy" progress={rhymes} />
      </StyledWrapper>
    );
  }
}

export default Home;
