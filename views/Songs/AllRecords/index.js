import React, { useState } from 'react';
import ListItem from 'rap-gra/views/Songs/ListItem';
import AllItems from 'rap-gra/templates/AllItemsTemplate';
import { Paragraph } from 'rap-gra/components/Paragraph';

const AllRecords = ({ records, isLoading }) => {
  const [input, setInput] = useState('');
  const [dataArr, setDataArr] = useState([...records]);
  // to samo co w AllSongs
  const findItem = text => {
    setInput(text);
    setDataArr(records.filter(item => item.title.toLowerCase().includes(text.toLowerCase())));
  };

  // to samo co w AllSongs
  const data = [...dataArr]
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
      {isLoading ? <Paragraph>Ładowanie...</Paragraph> : data}
    </AllItems>
  );
};

export default AllRecords;
