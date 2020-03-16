import React from 'react';
import { AsyncStorage } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { ThemeProvider } from 'styled-components';
import AppContext from 'rap-gra/context/context';
import { theme } from 'rap-gra/theme/mainTheme';
import { StartScreen, Home, Songs, Label, Concerts, BestSongs } from 'rap-gra/views';
import AllSongs from 'rap-gra/views/Songs/AllSongs';
import AllRecords from 'rap-gra/views/Songs/AllRecords';
import MainTemplate from 'rap-gra/templates/MainTemplate';
import { path } from 'rap-gra/constants/routes';
import constList from 'rap-gra/constants/constList';
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
    yourLabel: '',
    yourRapers: [],
    // songs
    songs: [], // Piosenki
    subjects: [], // Tematy piosenek
    records: [], // Płyty
    // concerts
    concerts: [],
    concertsEnableToPlay: 1,
    // coś innego xD
    isLoading: true,
    newSub: {
      e: 0,
      l: 0,
    },
    bestSong: {},
    bestList: constList,
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

  setBestSong = song => {
    const { bestSong } = this.state;
    if (bestSong.views === -1) {
      this.setState({ bestSong: song });
      AsyncStorage.setItem('bestSong', JSON.stringify(song));
    } else if (song.views > bestSong.views) {
      this.setState({ bestSong: song });
      AsyncStorage.setItem('bestSong', JSON.stringify(song));
    }

    // let max = 0;
    // console.log('szukam!');
    // songs.forEach(({ views, rating }) => (views > max && rating >= 9 ? (max = views) : null));
    // if (max != 0) {
    //   const song = [...songs.filter(({ views }) => max === views)];
    //   console.log(song[0]);
    //   this.setState({ bestSong: song[0] });
    // }
    // return null;
  };

  changeBestList = (song, index) => {
    const arr = [...constList];
    arr.splice(index, 0, song);
    arr.splice(10, 1);
    arr.forEach((item, i) => (item.place = i + 1));
    this.setState({
      bestList: arr,
    });
  };

  setCash = cash => {
    this.setState({
      cash,
    });
  };

  setNewSub = sub => {
    this.setState(prevState => ({
      subjects: [...prevState.subjects, sub],
      newSub: { e: 0, l: 0 },
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
      const bestSong = await AsyncStorage.getItem('bestSong');
      const yourLabel = await AsyncStorage.getItem('yourLabel');

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
        records !== null &&
        bestSong !== null &&
        concerts !== null
        // yourLabel !== null
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
          yourLabel: yourLabel,
          concerts: JSON.parse(concerts),
          subjects: JSON.parse(sub),
          pic: pic,
          songs: JSON.parse(songs),
          records: JSON.parse(records),
          newSub: JSON.parse(newSubCount),
          bestSong: JSON.parse(bestSong),
        });

        this.changeBestList(JSON.parse(bestSong), JSON.parse(bestSong).place - 1);
      }
    } catch (error) {}
    this.setState({ isLoading: false });

    // AsyncStorage.setItem('songsL', '0');
    // AsyncStorage.setItem('recordsL', '0');
    // Pobranie ilości tematów z AS
  };

  componentDidMount() {
    this.retrieveData(); // wczytuje statystki i label
    // this.setBestSong();
  }

  deleteAndAddSong = (id, song) => {
    const songs = this.state.songs;
    songs.splice(id, 1, song);
    this.setState({
      songs,
    });
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

  // dołączanie do wytwórnii => obsługiwane jest w Label i LabelDetails
  labelFn = value => {
    this.setState({ currentLabel: value });
  };

  // Zakładanie włąsnej wytwórnii
  yourLabelFn = value => {
    this.setState({ yourLabel: value });
  };

  // Dodawanie raperów do Labelu
  addYourRaper = value => {
    this.setState({
      yourRapers: [...value],
    });
    // this.setState(prevState => ({
    //   yourRapers: [...prevState.yourRapers, value]
    // }))
  };

  // Funkcja obsługująca ile koncertów można zagrać pod rząd
  setConcertsEnableToPlay = value => {
    this.setState({
      concertsEnableToPlay: value,
    });
    console.log(this.state.concertsEnableToPlay);
  };

  // Funckja która odejmuje wartość po każdym zagranym koncercie
  decreaseConcertsEnableToPlay = () => {
    this.setState(prevState => ({
      concertsEnableToPlay: prevState.concertsEnableToPlay - 1,
    }));
  };

  render() {
    const { HOME, LABEL, SONGS, ALLSONGS, ALLRECORDS, CONCERTS, STARTSCREEN, BESTSONGS } = path;
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
      setBestSong,
      changeBestList,
      setConcertsEnableToPlay,
      decreaseConcertsEnableToPlay,
      yourLabelFn,
      addYourRaper,
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
            setBestSong,
            changeBestList,
            setConcertsEnableToPlay,
            decreaseConcertsEnableToPlay,
            yourLabelFn,
            addYourRaper,
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
                <Route
                  exact
                  path={BESTSONGS}
                  component={() => (
                    <BestSongs
                      bestSong={this.state.bestSong}
                      nick={this.state.nick}
                      bestList={this.state.bestList}
                    />
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
