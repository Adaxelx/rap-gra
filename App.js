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
      reputation: 1500,
      flow: 25,
      style: 95,
      rhymes: 92,
    },
    // label
    currentLabel: '',
    // songs

    songs: [],
    songsL: 1,
    subjects: ['Miłość', 'Wolność', 'Ziomki', 'Przyjaźń'],
    records: [],
    recordsL: 0,
  };

  componentDidMount() {
    let n;
    let sL;
    const { subjects } = this.state;
    // AsyncStorage.setItem('songsL', '0');
    AsyncStorage.getItem(`subjectsL`, (err, result) => {
      if (result === null) {
        sL = 4;
      } else sL = result;
      for (let i = 4; i < sL; i++) {
        AsyncStorage.getItem(`subject${4}`, (err, result) => {
          this.setState({ subjects: [...this.state.subjects, result] });
        });
      }
    });
    for (let i = 1; i <= sL; i++) {
      AsyncStorage.setItem(`subject${i}`, subjects[i - 1]);
    }

    AsyncStorage.getItem('songsL', (err, result) => {
      this.setLength(result);
      n = result;

      for (let i = 1; i <= n; i++) {
        AsyncStorage.getItem(`song${i}`, (err, result) => {
          this.setState({ songs: [...this.state.songs, JSON.parse(result)] });
          console.log(result);
        });
      }
    });

    AsyncStorage.getItem('recordsL', (err, result) => {
      if (!result) {
        return;
      }
      this.setLength(result);
      n = result;

      for (let i = 1; i <= n; i++) {
        AsyncStorage.getItem(`record${i}`, (err, result) => {
          this.setState({ records: [...this.state.records, JSON.parse(result)] });
          console.log(result);
        });
      }
    });
  }

  labelFn = value => {
    this.setState({ currentLabel: value });
  };

  setLength = result => {
    this.setState({ songsL: result });
  };

  setSong = song => {
    this.setState({
      songsL: this.state.songsL + 1,
      songs: [...this.state.songs, song],
    });
  };

  setLengthRec = result => {
    this.setState({ recordsL: result });
  };

  setRecord = record => {
    this.setState({
      recordsL: this.state.recordsL + 1,
      records: [...this.state.records, record],
    });
  };

  render() {
    return (
      <NativeRouter>
        <AppContext.Provider
          value={{
            state: this.state,
            labelFn: this.labelFn,
            setSong: this.setSong,
            setLength: this.setLength,
          }}
        >
          <ThemeProvider theme={theme}>
            <MainTemplate>
              <Route exact path="/" component={Home} />
              <Route exact path="/songs" component={Songs} />
              <Route exact path="/concerts" component={Concerts} />
              <Route exact path="/label" component={Label} />
              <Route
                exact
                path="/allsongs"
                component={() => <AllSongs songs={this.state.songs} />}
              />
              <Route
                exact
                path="/allrecords"
                component={() => <AllRecords records={this.state.records} />}
              />
            </MainTemplate>
          </ThemeProvider>
        </AppContext.Provider>
      </NativeRouter>
    );
  }
}

/* eslint-enable */

export default App;
