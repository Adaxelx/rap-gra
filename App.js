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

    songs: [], // Piosenki
    songsL: 0, // Ilość piosenek
    subjects: ['Miłość', 'Wolność', 'Ziomki', 'Przyjaźń'], // Tematy piosenek
    subL: 0, // Ilość tematów
    records: [], // Płyty
    recordsL: 0, // Ilość płyt
  };

  componentDidMount() {
    // AS -> AsyncStorage
    let songL; // Ilość piosenek
    let subL; // Ilość tematów piosenek
    let recL; // Ilość płyt
    const { subjects } = this.state;

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
          console.log(result);
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
    console.log(result);
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
