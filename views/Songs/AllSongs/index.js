import React, { useState } from 'react';
import AllItems from 'rap-gra/templates/AllItemsTemplate';
import ListItem from 'rap-gra/views/Songs/ListItem';

let newData = [];
const AllSongs = ({ songs }) => {
  const [input, setInput] = useState('');
  const [changed, setChanged] = useState(false);
  const findItem = text => {
    setInput(text);
    newData = songs.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
    setChanged(true);
  };

  const mapData = songs.map(i => (
    <ListItem
      key={i.title}
      title={i.title}
      place={i.place}
      type={i.type}
      value={i.value}
      earnings={i.earnings}
      fans={i.fans}
      rate={i.rate}
    />
  ));

  const newMapData = newData.map(i => (
    <ListItem
      key={i.title}
      title={i.title}
      place={i.place}
      type={i.type}
      value={i.value}
      earnings={i.earnings}
      fans={i.fans}
      rate={i.rate}
    />
  ));
  return (
    <AllItems title="Wszystkie piosenki" onChangeText={text => findItem(text)} value={input}>
      {changed ? newMapData : mapData}
    </AllItems>
  );
};

export default AllSongs;
