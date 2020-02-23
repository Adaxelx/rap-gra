import React, { useState } from 'react';
import AllItems from 'rap-gra/templates/AllItemsTemplate';
import ListItem from 'rap-gra/views/Songs/ListItem';

let newData = [];
const AllSongs = ({ songs }) => {
  const [input, setInput] = useState('');
  const [changed, setChanged] = useState(false);
  // wyszukiwanie elementu
  const findItem = text => {
    setInput(text); // wartosc inputu
    newData = songs.filter(item => item.title.toLowerCase().includes(text.toLowerCase())); // znalezienie odpowiednich elementow
    setChanged(true); // oznaczenie ze nastapila zmiana czyli trzeba uzyc innej tablicy
  };

  // [...songs] - destrukturyzacja elementów za kazdym razem pozwala uniknac ciaglego odwracania tablicy przy otwieraniu i zamykaniu
  // strony (mozna sprawdzic dajac same song), reverse do odwrocenia od najnowszego do najstarszego.
  const mapData = [...songs]
    .reverse()
    .map(i => (
      <ListItem
        key={i.id}
        title={i.title}
        place={i.place}
        type={i.type}
        earnings={i.cash}
        fans={i.fans}
        rate={i.rating}
        value={i.views}
      />
    ));

  const newMapData = [...newData]
    .reverse()
    .map(i => (
      <ListItem
        key={i.id}
        title={i.title}
        place={i.place}
        type={i.type}
        earnings={i.cash}
        fans={i.fans}
        rate={i.rating}
        value={i.views}
      />
    ));
  return (
    <AllItems title="Wszystkie piosenki" onChangeText={text => findItem(text)} value={input}>
      {/* Jezeli cos zostalo wyszukiwane pokazuje sie nowa tablica z tymi wartosciami */}
      {changed ? newMapData : mapData}
    </AllItems>
  );
};

export default AllSongs;
