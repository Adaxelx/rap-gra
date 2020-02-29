import React, { useState, useEffect } from 'react';
import { AsyncStorage, Text, Alert } from 'react-native';
import AppContext from 'rap-gra/context/context';
import AddPanelTemplate from 'rap-gra/templates/AddPanelTemplate';
import { Button, Switch, Bar, Title } from 'rap-gra/components';
import { checkConcert } from 'rap-gra/views/Concerts/Functions/checkConcert';
import { checkCost } from 'rap-gra/views/Concerts/Functions/checkCost';

const ConcertPanel = ({ openConcertPanel, onPress, setStats }) => {
  const [valueSound, setValueSound] = useState(0); // Jaki styl
  const [valueTicketsPrice, setValueTicketsPrice] = useState(0); // Ilość rymów
  const [valueAlcohol, setValueAlcohol] = useState(0); // Jaki bit
  const [valueClubSize, setValueClubSize] = useState(0); // Jaki bit
  const [free, setFree] = useState(false); // Darmowe: tak czy nie
  const [keyCounter, setKeyCounter] = useState(0); // Po kolei klucze wyznacza
  const [cost, setCost] = useState(0); // koszt koncertu

  const saveAsync = async array => {
    try {
      await AsyncStorage.setItem('concerts_array', JSON.stringify(array));
    } catch (error) {
      console.log('error zapis');
    }
  };

  const buttonFn = (array, state) => {
    if (cost > state.cash) {
      // warunek sprawdza czy stać cię w gl na ten koncert
      Alert.alert('Nie masz dość kasy!');
    } else {
      let concertStats = []; // przechowywać tu będę wartości jakie tam wylosuje
      onPress();

      // ocenianie koncertu i rozwoj statystyk, przypisanie wartości uzyskanych do tbalicy
      concertStats = checkConcert(
        state.stats,
        valueSound,
        valueTicketsPrice,
        valueAlcohol,
        valueClubSize,
        free,
      );

      setStats({
        cash: concertStats[1] - cost,
        stats: {
          fans: concertStats[0],
          flow: concertStats[2],
          style: concertStats[2],
          rhymes: concertStats[2],
          reputation: concertStats[3],
        },
      });

      array.push({
        key: keyCounter,
        name: keyCounter,
        fansIncrease: concertStats[0],
        cashIncrease: concertStats[1],
        statsIncrease: concertStats[2],
        reputationIncrease: concertStats[3],
      });

      // zapis
      saveAsync(array);

      // czyszczenie wybranych danych
      setKeyCounter(keyCounter + 1);
      setValueSound(0);
      setValueTicketsPrice(0);
      setValueAlcohol(0);
      setValueClubSize(0);
      setFree(false);
    }
  };

  useEffect(() => {
    // console.log("XD")
    setCost(checkCost(valueSound, valueAlcohol, valueClubSize));
  });

  return (
    <AppContext.Consumer>
      {context => (
        <AddPanelTemplate open={openConcertPanel} onPress={onPress}>
          <Title>Zagraj Koncert</Title>
          <Text>Darmowy koncert(większy przyrost fanów):</Text>
          <Switch onPress={() => setFree(!free)} />

          <Bar
            title="Nagłośnienie"
            val1="tanie"
            val2="drogie"
            value={valueSound}
            setValue={setValueSound}
          />
          <Bar
            title="Cena biletów"
            val1="niska"
            val2="wysoka"
            value={valueTicketsPrice}
            setValue={setValueTicketsPrice}
          />
          <Bar
            title="Ilość wypietego alko"
            val1="trzeźwy"
            val2='"trzeźwy"'
            value={valueAlcohol}
            setValue={setValueAlcohol}
          />
          <Bar
            title="Wielkość klubu"
            val1="mały"
            val2="duży"
            value={valueClubSize}
            setValue={setValueClubSize}
          />

          <Text>Koszt koncertu: {cost} $</Text>

          <Button
            onPress={() => {
              buttonFn(context.state.concerts, context.state);
            }}
          >
            <Text>Zagraj koncert!</Text>
          </Button>
        </AddPanelTemplate>
      )}
    </AppContext.Consumer>
  );
};

export default ConcertPanel;
