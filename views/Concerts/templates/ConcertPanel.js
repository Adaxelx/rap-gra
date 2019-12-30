import React, { useState } from 'react';
import { Text } from 'react-native';
import { Title } from 'rap-gra/components/Title';
import AddPanelTemplate from 'rap-gra/templates/AddPanelTemplate';
import Bar from 'rap-gra/components/Bar';
import Switch from 'rap-gra/components/Switch';

const ConcertPanel = ({ openConcertPanel, onPress }) => {
  const [valueSound, setValueSound] = useState(0); // Jaki styl
  const [valueTicketsPrice, setValueTicketsPrice] = useState(0); // Ilość rymów
  const [valueAlcohol, setValueAlcohol] = useState(0); // Jaki bit
  const [valueClubSize, setValueClubSize] = useState(0); // Jaki bit
  const [free, setFree] = useState(false); // Darmowe: tak czy nie

  return (
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
    </AddPanelTemplate>
  );
};

export default ConcertPanel;
