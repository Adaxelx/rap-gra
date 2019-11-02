const calcRate = (best, choice) => {
  let delta = best - choice / 2;
  if (delta < 0) {
    delta *= -1;
  }
  // console.log(delta);
  return 10 - delta * 0.1;
};

export const checkSong = song => {
  const { style, bit, rhymes } = song.values;
  const bestValues = {
    S: 50,
    R: 50,
    B: 50,
  };
  const checkedSong = {
    rating: 1,
    views: 0,
    earned: 0,
    place: 200,
    fans: 0,
  };

  switch (song.subject) {
    case 'Wolność':
      bestValues.S = 55 + Math.floor(Math.random() * 10 - 5);
      bestValues.R = 85 + Math.floor(Math.random() * 10 - 5);
      bestValues.B = 5 + Math.floor(Math.random() * 10 - 5);
      break;
    case 'Miłość':
      bestValues.S = 20 + Math.floor(Math.random() * 10 - 5);
      bestValues.R = 70 + Math.floor(Math.random() * 10 - 5);
      bestValues.B = 30 + Math.floor(Math.random() * 10 - 5);
      break;
    case 'Przyjaźń':
      bestValues.S = 70 + Math.floor(Math.random() * 10 - 5);
      bestValues.R = 30 + Math.floor(Math.random() * 10 - 5);
      bestValues.B = 70 + Math.floor(Math.random() * 10 - 5);
      break;
    case 'Ziomki':
      bestValues.S = 80 + Math.floor(Math.random() * 20 - 10);
      bestValues.R = 60 + Math.floor(Math.random() * 20 - 10);
      bestValues.B = 80 + Math.floor(Math.random() * 20 - 10);
      break;
    default:
      throw new Error('Błąd');
  }
  checkedSong.rating =
    Math.round(
      (10 *
        (calcRate(bestValues.S, style) +
          calcRate(bestValues.B, bit) +
          calcRate(bestValues.R, rhymes))) /
        3,
    ) / 10;
  // console.log(checkedSong.rating);
  // checkedSong.fans = (checkedSong.fans + 1) * (1 + checkedSong.rating * 0.05);
  // console.log(checkedSong.fans);
  return checkedSong;
};

// full: false,
//     name,
//     values: {
//     video: {
//         active: vid,
//             value: valueVid,
//         },
//     style: Math.floor(valueStyle),
//         rhymes: Math.floor(valueRhymes),
//             bit: Math.floor(valueBit),
//       },
