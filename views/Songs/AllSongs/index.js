import React, { useState } from 'react';
import AllItems from 'rap-gra/templates/AllItemsTemplate';
import ListItem from 'rap-gra/views/Songs/ListItem';
import { Paragraph, RowContainer } from 'rap-gra/components';

const AllSongs = ({ songs, isLoading }) => {
  const [input, setInput] = useState('');
  const [dataArr, setDataArr] = useState([...songs]);
  // wyszukiwanie elementu
  const findItem = text => {
    setInput(text); // wartosc inputu
    setDataArr(songs.filter(item => item.title.toLowerCase().includes(text.toLowerCase()))); // znalezienie odpowiednich elementow
  };

  // [...songs] - destrukturyzacja elementów za kazdym razem pozwala uniknac ciaglego odwracania tablicy przy otwieraniu i zamykaniu
  // strony (mozna sprawdzic dajac same song), reverse do odwrocenia od najnowszego do najstarszego.
  const data = [...dataArr]
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
        subject={i.subject}
      />
    ));

  return (
    <AllItems title="Wszystkie piosenki" onChangeText={text => findItem(text)} value={input}>
      {/* Jezeli cos zostalo wyszukiwane pokazuje sie nowa tablica z tymi wartosciami */}
      {isLoading ? (
        <RowContainer>
          <Paragraph>Ładowanie...</Paragraph>
        </RowContainer>
      ) : (
        data
      )}
    </AllItems>
  );
};

export default AllSongs;
