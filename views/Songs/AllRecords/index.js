import React, { useState } from 'react';
import ListItem from 'rap-gra/views/Songs/ListItem';
import AllItems from 'rap-gra/templates/AllItemsTemplate';

let newData = [];
const AllRecords = ({ records }) => {
  const [input, setInput] = useState('');
  const [changed, setChanged] = useState(false);
  // to samo co w AllSongs
  const findItem = text => {
    setInput(text);
    newData = records.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
    setChanged(true);
  };

  // to samo co w AllSongs
  const data = [...records]
    .reverse()
    .map(({ rating, sold, subject, title, type, id }) => (
      <ListItem
        key={id}
        earnings={sold * 20}
        value={sold}
        rate={rating}
        title={title}
        type={type}
        subject={subject}
      />
    ));

  const newMapData = [...newData]
    .reverse()
    .map(({ rating, sold, subject, title, type, id }) => (
      <ListItem
        key={id}
        earnings={sold * 20}
        value={sold}
        rate={rating}
        title={title}
        type={type}
        subject={subject}
      />
    ));

  return (
    <AllItems title="Wszystkie płyty" onChangeText={text => findItem(text)} value={input}>
      {changed ? newMapData : data}
    </AllItems>
  );
};

export default AllRecords;
