import React from 'react';
import { AsyncStorage } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { ThemeProvider } from 'styled-components';
import AppContext from 'rap-gra/context/context';
import { theme } from 'rap-gra/theme/mainTheme';
import { StartScreen, Home, Songs, Label, Concerts } from 'rap-gra/views';
import AllSongs from 'rap-gra/views/Songs/AllSongs';
import AllRecords from 'rap-gra/views/Songs/AllRecords';
import MainTemplate from 'rap-gra/templates/MainTemplate';
import { path } from 'rap-gra/constants/routes';

/* eslint-disable */

class App extends React.Component {
  state = {
    // stats
    nick: 'Young Krawczyk',
    pic: '',
    cash: 0,
    stats: {
      fans: 0,
      reputation: 0,
      flow: 0,
      style: 0,
      rhymes: 0,
    },
    // label
    currentLabel: '',
    // songs
    songs: [], // Piosenki
    subjects: [], // Tematy piosenek
    records: [], // Płyty
    // concerts
    concerts: [],
    isLoading: true,
    newSub: {
      e: 0,
      l: 0,
    },
  };

  setStats = object => {
    const { fans, flow, style, rhymes, reputation } = object.stats;
    this.setState(prevState => ({
      cash: prevState.cash + object.cash,
      stats: {
        fans: prevState.stats.fans + fans,
        flow: prevState.stats.flow + flow,
        style: prevState.stats.style + style,
        rhymes: prevState.stats.rhymes + rhymes,
        reputation: prevState.stats.reputation + reputation,
      },
    }));
  };

  setCash = cash => {
    this.setState({
      cash,
    });
  };

  setNewSub = sub => {
    this.setState(prevState => ({
      subjects: [...prevState.subjects, sub],
    }));
  };

  // pobiera dane z AS
  retrieveData = async () => {
    try {
      // pobiera poszeczególne dane z AS
      const label = await AsyncStorage.getItem('label');
      const nick = await AsyncStorage.getItem('nick');
      const cash = await AsyncStorage.getItem('cash');
      const rep = await AsyncStorage.getItem('rep');
      const fans = await AsyncStorage.getItem('fans');
      const flow = await AsyncStorage.getItem('flow');
      const style = await AsyncStorage.getItem('style');
      const rhymes = await AsyncStorage.getItem('rhymes');
      const concerts = await AsyncStorage.getItem('concerts_array');
      const sub = await AsyncStorage.getItem(`subjects`);
      const pic = await AsyncStorage.getItem('picture');
      const songs = await AsyncStorage.getItem('songs');
      const records = await AsyncStorage.getItem('records');
      const newSubCount = await AsyncStorage.getItem('newSubCount');
      //sprawdza warunek czy coś pobrał czy nie
      if (
        nick !== null &&
        cash !== null &&
        fans !== null &&
        flow !== null &&
        style !== null &&
        rhymes !== null &&
        rep !== null &&
        concerts !== null &&
        sub !== null &&
        pic !== null &&
        songs !== null &&
        records !== null
      ) {
        // jeśli pobrał to przypisuje pobrane wartości do stanu
        this.setState({
          nick: nick,
          cash: JSON.parse(cash),
          stats: {
            // ...this.state.stats,
            fans: JSON.parse(fans),
            reputation: JSON.parse(rep),
            flow: JSON.parse(flow),
            style: JSON.parse(style),
            rhymes: JSON.parse(rhymes),
          },
          currentLabel: label,
          concerts: JSON.parse(concerts),
          subjects: JSON.parse(sub),
          pic: pic,
          songs: JSON.parse(songs),
          records: JSON.parse(records),
          newSub: JSON.parse(newSubCount),
        });
      }
    } catch (error) {}
    this.setState({ isLoading: false });
    // AsyncStorage.setItem('songsL', '0');
    // AsyncStorage.setItem('recordsL', '0');
    // Pobranie ilości tematów z AS
  };

  componentDidMount() {
    this.retrieveData(); // wczytuje statystki i label
    console.log(this.state.newSub);
  }

  deleteAndAddSong = (id, song) => {
    const songs = this.state.songs;
    songs.splice(id, 1, song);
    this.setState({
      songs,
    });
  };

  labelFn = value => {
    this.setState({ currentLabel: value });
  };

  //Ustalenie ilości piosenek

  //Dodanie piosenki
  setSong = song => {
    this.setState({
      songs: [...this.state.songs, song],
    });
  };

  //Ustalenie ilości płyt

  //Dodanie płyty
  setRecord = record => {
    this.setState(prevState => ({
      records: [...prevState.records, record],
    }));
  };

  labelFn = value => {
    // dołączanie do wytwórnii => obsługiwane jest w Label i LabelDetails
    this.setState({ currentLabel: value });
  };

  testFn = () => {
    const { flow, style, rhymes } = this.state.stats;
    //ogranicznik tych śmierdzących progressbarów nie jest to jakieś super to można poprawić jak jest pomysł dlatego się tak nazywa xD

    if (rhymes < 100) {
      this.setState(prevState => ({
        stats: {
          ...this.state.stats,
          rhymes: prevState.stats.rhymes + 1,
        },
      }));
    } else {
      this.setState({
        stats: {
          ...this.state.stats,
          rhymes: 100,
        },
      });
    }
  };

  testFn2 = () => {
    const { flow, style, rhymes } = this.state.stats;
    //usuwanie pkt ze stat testowe

    if (rhymes < 100) {
      this.setState(prevState => ({
        stats: {
          ...this.state.stats,
          rhymes: prevState.stats.rhymes - 1,
        },
      }));
    } else {
      this.setState({
        stats: {
          ...this.state.stats,
          rhymes: 100,
        },
      });
    }
  };

  render() {
    const { HOME, LABEL, SONGS, ALLSONGS, ALLRECORDS, CONCERTS, STARTSCREEN } = path;
    const {
      state,
      labelFn,
      setSong,
      setRecord,
      testFn,
      testFn2,
      setStats,
      deleteAndAddSong,
      setCash,
      retrieveData,
      setNewSub,
    } = this;

    return (
      <NativeRouter>
        <AppContext.Provider
          value={{
            state,
            labelFn,
            setSong,
            setRecord,
            testFn,
            testFn2,
            setStats,
            deleteAndAddSong,
            setCash,
            retrieveData,
            setNewSub,
          }}
        >
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path={STARTSCREEN} component={StartScreen} />
              <MainTemplate>
                <Route exact path={HOME} component={Home} />
                <Route
                  exact
                  path={SONGS}
                  component={() => <Songs songs={this.state.songs} records={this.state.records} />}
                />
                <Route exact path={CONCERTS} component={Concerts} />
                <Route exact path={LABEL} component={Label} />

                <Route
                  exact
                  path={ALLSONGS}
                  component={() => (
                    <AllSongs songs={this.state.songs} isLoading={this.state.isLoading} />
                  )}
                />
                <Route
                  exact
                  path={ALLRECORDS}
                  component={() => (
                    <AllRecords records={this.state.records} isLoading={this.state.isLoading} />
                  )}
                />
              </MainTemplate>
            </Switch>
          </ThemeProvider>
        </AppContext.Provider>
      </NativeRouter>
    );
  }
}

/* eslint-enable */

export default App;
