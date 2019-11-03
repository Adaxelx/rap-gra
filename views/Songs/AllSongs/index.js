import React, { useState } from 'react';
import AllItems from 'rap-gra/templates/AllItemsTemplate';
import ListItem from 'rap-gra/views/Songs/ListItem';

const data = [
  {
    type: 'song',
    title: 'Piosenka5',
    value: '120232',
    earnings: '12313123',
    place: '210',
    fans: '12344',
    rate: '9/10',
  },
  {
    type: 'song',
    title: 'Piosenka4',
    value: '120232',
    earnings: '12313123',
    place: '210',
    fans: '12344',
    rate: '9/10',
  },
  {
    type: 'song',
    title: 'Piosenka3',
    value: '120232',
    earnings: '12313123',
    place: '210',
    fans: '12344',
    rate: '9/10',
  },
  {
    type: 'song',
    title: 'Piosenka6',
    value: '120232',
    earnings: '12313123',
    place: '210',
    fans: '12344',
    rate: '9/10',
  },
  {
    type: 'song',
    title: 'Piosenka1',
    value: '120232',
    earnings: '12313123',
    place: '210',
    fans: '12344',
    rate: '9/10',
  },
  {
    type: 'song',
    title: 'Piosenka7',
    value: '120232',
    earnings: '12313123',
    place: '210',
    fans: '12344',
    rate: '9/10',
  },
  {
    type: 'song',
    title: 'Piosenka8',
    value: '120232',
    earnings: '12313123',
    place: '210',
    fans: '12344',
    rate: '9/10',
  },
  {
    type: 'song',
    title: 'Piosenka9',
    value: '120232',
    earnings: '12313123',
    place: '210',
    fans: '12344',
    rate: '9/10',
  },
  {
    type: 'song',
    title: 'Piosewnka10',
    value: '120232',
    earnings: '12313123',
    place: '210',
    fans: '12344',
    rate: '9/10',
  },
];
let newData = [];
const AllSongs = () => {
  const [input, setInput] = useState('');
  const [changed, setChanged] = useState(false);
  const findItem = text => {
    setInput(text);
    newData = data.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
    setChanged(true);
  };

  const mapData = data.map(i => (
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
