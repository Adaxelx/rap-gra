import React, { useState } from 'react';
import { AsyncStorage, Text } from 'react-native';
import AppContext from 'rap-gra/context/context';
import { Title } from 'rap-gra/components/Title';
import AddPanelTemplate from 'rap-gra/templates/AddPanelTemplate';
import Bar from 'rap-gra/components/Bar';
import Switch from 'rap-gra/components/Switch';
import { Button } from 'rap-gra/components/Button';
import { checkConcert } from 'rap-gra/views/Concerts/Functions/checkConcert';

const ConcertPanel = ({ openConcertPanel, onPress }) => {
  const [valueSound, setValueSound] = useState(0); // Jaki styl
  const [valueTicketsPrice, setValueTicketsPrice] = useState(0); // Ilość rymów
  const [valueAlcohol, setValueAlcohol] = useState(0); // Jaki bit
  const [valueClubSize, setValueClubSize] = useState(0); // Jaki bit
  const [free, setFree] = useState(false); // Darmowe: tak czy nie
  const [keyCounter, setKeyCounter] = useState(0); // Po kolei klucze wyznacza

  const saveAsync = async array => {
    try {
      await AsyncStorage.setItem('concerts_array', JSON.stringify(array));
    } catch (error) {
      console.log('error zapis');
    }
  };

  const buttonFn = (array, stats) => {
    onPress();
    array.push({
      key: keyCounter,
      name: keyCounter,
    });
    // ocenianie koncertu i rozwoj statystyk
    checkConcert(stats, valueSound, valueTicketsPrice, valueAlcohol, valueClubSize, free);

    // zapis
    saveAsync(array);

    // czyszczenie wybranych danych
    setKeyCounter(keyCounter + 1);
    setValueSound(0);
    setValueTicketsPrice(0);
    setValueAlcohol(0);
    setValueClubSize(0);
    setFree(false);
  };

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

          <Button
            onPress={() => {
              buttonFn(context.state.concerts, context.state.stats);
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
