import React from 'react';
import { AsyncStorage } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { ThemeProvider } from 'styled-components';
import AppContext from 'rap-gra/context/context';
import { theme } from 'rap-gra/theme/mainTheme';
import Home from 'rap-gra/views/Home';
import Songs from 'rap-gra/views/Songs';
import Concerts from 'rap-gra/views/Concerts';
import Label from 'rap-gra/views/Label';
import AllSongs from 'rap-gra/views/Songs/AllSongs';
import AllRecords from 'rap-gra/views/Songs/AllRecords';
import MainTemplate from 'rap-gra/templates/MainTemplate';

/* eslint-disable */

class App extends React.Component {
  state = {
    // stats
    nick: 'Young Krawczyk',
    cash: 1000000,
    stats: {
      fans: 150000,
      reputation: 2000,
      flow: 45,
      style: 97,
      rhymes: 92,
    },
    // label
    currentLabel: '',
  };

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('label');
      if (value !== null) {
        this.setState({ currentLabel: value });
        console.log(value);
      }
    } catch (error) {
      console.log('error');
    }
  };

  componentDidMount() {
    const { flow, style, rhymes } = this.state.stats;
    this.retrieveData(); // wczytuje dane Label
    if (flow >= 100) this.setState({ flow: 100 });
    if (style <= 100) {
      this.setState({ style: 100 });
    }
    if (rhymes >= 100) this.setState({ rhymes: 100 });
    console.log(style);
  }

  labelFn = value => {
    // dołączanie do wytwórnii => obsługiwane jest w Label i LabelDetails
    this.setState({ currentLabel: value });
  };

  testFn = () => {
    const { flow, style, rhymes } = this.state.stats;

    // this.setState(prevState => ({
    //   stats: {
    //     ...this.state.stats,
    //     style: prevState.stats.style + 2
    //   }
    // }));

    if (style < 100) {
      this.setState(prevState => ({
        stats: {
          ...this.state.stats,
          style: prevState.stats.style + 1,
        },
      }));
      console.log(this.state.stats.style);
    } else {
      this.setState({
        stats: {
          ...this.state.stats,
          style: 100,
        },
      });
      console.log('supa');
    }

    // console.log(this.state.stats.style)

    // this.setState({
    //   stats: {
    //     ...this.state.stats,
    //     style: 105
    //   }
    // });
  };

  render() {
    return (
      <NativeRouter>
        <AppContext.Provider
          value={{
            state: this.state,
            labelFn: this.labelFn,
            testFn: this.testFn,
          }}
        >
          <ThemeProvider theme={theme}>
            <MainTemplate>
              <Route exact path="/" component={Home} />
              <Route exact path="/songs" component={Songs} />
              <Route exact path="/concerts" component={Concerts} />
              <Route exact path="/label" component={Label} />
              <Route exact path="/allsongs" component={AllSongs} />
              <Route exact path="/allrecords" component={AllRecords} />
            </MainTemplate>
          </ThemeProvider>
        </AppContext.Provider>
      </NativeRouter>
    );
  }
}

/* eslint-enable */

export default App;
