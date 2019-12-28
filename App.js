import React from 'react';
import { AsyncStorage } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { ThemeProvider } from 'styled-components';
import AppContext from 'rap-gra/context/context';
import { theme } from 'rap-gra/theme/mainTheme';
import Home from 'rap-gra/views/Home';
import Songs from 'rap-gra/views/Songs';
import Label from 'rap-gra/views/Label';
import Concerts from 'rap-gra/views/Concerts';
import AllSongs from 'rap-gra/views/Songs/AllSongs';
import AllRecords from 'rap-gra/views/Songs/AllRecords';
import MainTemplate from 'rap-gra/templates/MainTemplate';

/* eslint-disable */

class App extends React.Component {
  state = {
    // stats
    nick: 'Young Krawczyk',
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
    songsL: 0, // Ilość piosenek
    subjects: ['Miłość', 'Wolność', 'Ziomki', 'Przyjaźń'], // Tematy piosenek
    subL: 0, // Ilość tematów
    records: [], // Płyty
    recordsL: 0, // Ilość płyt
  };

  setStats = object => {
    const { fans, flow, style, rhymes, reputation } = object.stats;
    this.setState(prevState => ({
      cash: prevState.cash + object.cash,
      stats: {
        fans: prevState.stats.fans + fans,
        flow,
        style,
        rhymes,
        reputation,
      },
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
      console.log('siema2');
      //sprawdza warunek czy coś pobrał czy nie
      if (rhymes !== null) {
        console.log('siema');
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
        });
      }
    } catch (error) {
      console.log('error');
    }
  };

  componentDidMount() {
    // AS -> AsyncStorage
    let songL; // Ilość piosenek
    let subL; // Ilość tematów piosenek
    let recL; // Ilość płyt
    const { subjects } = this.state;

    this.retrieveData(); // wczytuje statystki i label

    // AsyncStorage.setItem('songsL', '0');
    // AsyncStorage.setItem('recordsL', '0');
    // Pobranie ilości tematów z AS
    AsyncStorage.getItem(`subjectsL`, (err, result) => {
      // jeżeli nie ma ustalonej długości piosenek ustaw na 4 podstawowe
      if (result === null) {
        subL = 4;
      } else subL = result;
      this.setState({ subL });

      // pętla po wszystkich tematach(minumum 4 podstawowe)
      for (let i = 4; i < subL; i++) {
        //Pobieranie tematów z AS
        AsyncStorage.getItem(`subject${i}`, (err, result) => {
          this.setState({ subjects: [...this.state.subjects, result] });
        });
      }
    });

    //Wstawianie tematów do AS
    for (let i = 1; i <= subL; i++) {
      AsyncStorage.setItem(`subject${i}`, subjects[i - 1]);
    }

    //Pobranie ilości piosenek z AS
    AsyncStorage.getItem('songsL', (err, result) => {
      //Sprawdzenie czy istnieją jakieś piosenki
      if (result === null) {
        songL = 0;
      } else songL = result;
      //Ustalenie stanu
      this.setLength(songL);

      //Pętla po wszystkich piosenkach
      for (let i = 1; i <= songL; i++) {
        //Pobranie piosenek z AS
        AsyncStorage.getItem(`song${i}`, (err, result) => {
          this.setState({ songs: [...this.state.songs, JSON.parse(result)] });
        });
      }
    });

    //Pobranie ilości płyt z AS
    AsyncStorage.getItem('recordsL', (err, result) => {
      //Sprawdzenie czy istnieją jakieś płyty
      if (result === null) {
        recL = 0;
      } else recL = result;
      this.setLengthRec(recL);

      //Pętla po wszystkich płytach
      for (let i = 1; i <= recL; i++) {
        //Pobranie płyt z AS
        AsyncStorage.getItem(`record${i}`, (err, result) => {
          this.setState({ records: [...this.state.records, JSON.parse(result)] });
        });
      }
    });
  }

  labelFn = value => {
    this.setState({ currentLabel: value });
  };

  //Ustalenie ilości piosenek
  setLength = result => {
    this.setState({ songsL: result });
  };

  //Dodanie piosenki
  setSong = song => {
    this.setState({
      songsL: this.state.songsL + 1,
      songs: [...this.state.songs, song],
    });
  };

  //Ustalenie ilości płyt
  setLengthRec = result => {
    this.setState({ recordsL: result });
  };

  //Dodanie płyty
  setRecord = record => {
    this.setState({
      recordsL: this.state.recordsL + 1,
      records: [...this.state.records, record],
    });
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
    return (
      <NativeRouter>
        <AppContext.Provider
          value={{
            state: this.state,
            labelFn: this.labelFn,
            setSong: this.setSong,
            setLength: this.setLength,
            setRecord: this.setRecord,
            setLengthRec: this.setLengthRec,
            testFn: this.testFn,
            testFn2: this.testFn2,
            setStats: this.setStats,
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
