import { AsyncStorage } from 'react-native';
import constList from 'rap-gra/constants/constList';

const calcRep = rate => {
  if (rate < 1) {
    return -3;
  }
  if (rate < 3) {
    return -2;
  }
  if (rate < 5) {
    return -1;
  }
  if (rate < 7) {
    return 0;
  }
  if (rate < 8) {
    return 1;
  }
  if (rate < 9) {
    return 2;
  }
  return 3;
};

// Obliczenie oceny(funkcja użyta do obliczenia oceny piosenki)
const calcRate = (best, choice) => {
  const bestRate = 10;
  let delta = best - choice / 2; // Różnica między najlepszym wyborem a wyborem gracza(wybór gracza jest podzielony na 2 ze względu na to ze przyjmuje on wartość między 0  a 200,odczas gdy najlepszy wybór jest z zakresu 0 a 100)
  // Jeżeli delta wyszła ujemna (czyli wybór gracza był większy niż najlepsza opcja) mnożymy przez -1 ze wzgledu na zwracaną wartość
  if (delta < 0) {
    delta *= -1;
  }

  // Delta przyjmuje wartość od 0 do 100, a więc trzeba ją pomnożyć przez 0.1. Następnie odjąć od najlepszej wartości(10), czyli w najlepszym wypadku będzie 10 - 0 (czyli ocena 10) a w najgorszym 10 - 10 (czyli ocena 0).
  return bestRate - delta * 0.1;
};

const setPersonalStats = async object => {
  const { fans, cash, reputation, stats } = object;
  try {
    await AsyncStorage.getItem(`fans`, (err, result) => {
      AsyncStorage.setItem(`fans`, `${fans * 1 + result * 1}`);
    });
    await AsyncStorage.getItem(`cash`, (err, result) => {
      AsyncStorage.setItem(`cash`, `${cash * 1 + result * 1}`);
    });
    await AsyncStorage.getItem(`rep`, (err, result) => {
      AsyncStorage.setItem(`rep`, `${reputation * 1 + result * 1}`);
    });
    await AsyncStorage.getItem(`flow`, (err, result) => {
      AsyncStorage.setItem(`flow`, `${stats.flow * 1 + result * 1}`);
    });
    await AsyncStorage.getItem(`rhymes`, (err, result) => {
      AsyncStorage.setItem(`rhymes`, `${stats.rhymes * 1 + result * 1}`);
    });
    await AsyncStorage.getItem(`style`, (err, result) => {
      AsyncStorage.setItem(`style`, `${stats.style * 1 + result * 1}`);
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const checkSong = (song, stats, setStats, setBestSong, changeBestList, nick) => {
  const { style, bit, rhymes, video } = song.values; // Destrukturyzacja danych o piosence
  // Deklaracja zmiennej bestValues
  const bestValues = {
    S: 50,
    R: 50,
    B: 50,
  };
  // Deklaracja początkowych wartości dla sprawdzonej piosenki
  const checkedSong = {
    title: song.title,
    subject: song.subject,
    rating: 1,
    views: 0,
    cash: 0,
    place: '>200',
    fans: 0,
    id: song.id,
    used: false,
  };

  // Wyznaczenie najlepszych wartości dla stylu(S), bitu(B) i rymów(R) dla odpowiadających tematów
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
    case 'Alternatywny':
      bestValues.S = 70 + Math.floor(Math.random() * 20 - 10);
      bestValues.R = 10 + Math.floor(Math.random() * 10 - 5);
      bestValues.B = 50 + Math.floor(Math.random() * 20 - 10);
      break;
    case 'Polityczny':
      bestValues.S = 30 + Math.floor(Math.random() * 10 - 5);
      bestValues.R = 80 + Math.floor(Math.random() * 20 - 10);
      bestValues.B = 30 + Math.floor(Math.random() * 20 - 10);
      break;
    case 'Bóg':
      bestValues.S = 40 + Math.floor(Math.random() * 20 - 10);
      bestValues.R = 90 + Math.floor(Math.random() * 10 - 5);
      bestValues.B = 30 + Math.floor(Math.random() * 20 - 10);
      break;
    case 'Gangsterski':
      bestValues.S = 40 + Math.floor(Math.random() * 20 - 10);
      bestValues.R = 30 + Math.floor(Math.random() * 10 - 5);
      bestValues.B = 10 + Math.floor(Math.random() * 10 - 5);
      break;
    case 'Życie codzienne':
      bestValues.S = 30 + Math.floor(Math.random() * 20 - 10);
      bestValues.R = 70 + Math.floor(Math.random() * 10 - 5);
      bestValues.B = 60 + Math.floor(Math.random() * 10 - 5);
      break;
    case 'Podróże':
      bestValues.S = 50 + Math.floor(Math.random() * 20 - 10);
      bestValues.R = 60 + Math.floor(Math.random() * 10 - 5);
      bestValues.B = 70 + Math.floor(Math.random() * 10 - 5);
      break;
    case 'Siłownia':
      bestValues.S = 30 + Math.floor(Math.random() * 20 - 10);
      bestValues.R = 80 + Math.floor(Math.random() * 10 - 5);
      bestValues.B = 40 + Math.floor(Math.random() * 10 - 5);
      break;
    case 'Motywacja':
      bestValues.S = 80 + Math.floor(Math.random() * 20 - 10);
      bestValues.R = 60 + Math.floor(Math.random() * 10 - 5);
      bestValues.B = 50 + Math.floor(Math.random() * 10 - 5);
      break;
    case 'Więzienie':
      bestValues.S = 30 + Math.floor(Math.random() * 20 - 10);
      bestValues.R = 90 + Math.floor(Math.random() * 10 - 5);
      bestValues.B = 20 + Math.floor(Math.random() * 10 - 5);
      break;
    case 'Policja':
      bestValues.S = 60 + Math.floor(Math.random() * 20 - 10);
      bestValues.R = 80 + Math.floor(Math.random() * 10 - 5);
      bestValues.B = 60 + Math.floor(Math.random() * 10 - 5);
      break;
    case 'Smutek':
      bestValues.S = 20 + Math.floor(Math.random() * 20 - 10);
      bestValues.R = 70 + Math.floor(Math.random() * 10 - 5);
      bestValues.B = 10 + Math.floor(Math.random() * 10 - 5);
      break;
    case 'Śmierć':
      bestValues.S = 10 + Math.floor(Math.random() * 20 - 10);
      bestValues.R = 90 + Math.floor(Math.random() * 10 - 5);
      bestValues.B = 5 + Math.floor(Math.random() * 10 - 5);
      break;
    case 'Chill':
      bestValues.S = 30 + Math.floor(Math.random() * 20 - 10);
      bestValues.R = 50 + Math.floor(Math.random() * 10 - 5);
      bestValues.B = 80 + Math.floor(Math.random() * 10 - 5);
      break;
    default:
      throw new Error('Błąd');
  }
  // Obliczenie oceny - średnia z 3 ocen cząstkowych z stylu, bitu i rymów(Math.round i *10 i /10 służą do tego aby wyświetliła się 1 liczba po przecinku)
  checkedSong.rating =
    Math.round(
      (10 *
        (calcRate(bestValues.S, style) +
          calcRate(bestValues.B, bit) +
          calcRate(bestValues.R, rhymes))) /
        3,
    ) / 10;
  // Obliczenie przyrostu fanów(na podstawie poprzedniej ilości fanów i oceny piosenki)

  // Obliczenie wyświetleń(Na podstawie ilości fanów i oceny)
  checkedSong.views = Math.floor((stats.fans + 10) * checkedSong.rating);

  checkedSong.views = video.active
    ? Math.floor(video.value * stats.fans * 0.001 * checkedSong.views)
    : checkedSong.views;

  checkedSong.fans = Math.floor(stats.fans * 0.3 + (1 + checkedSong.rating * 0.5));

  // Obliczenie zarobionych pieniędzy na podstawie wyświetleń
  checkedSong.cash = Math.floor(checkedSong.views * 0.01 - video.value / 2);
  const reputation = calcRep(checkedSong.rating);
  setStats({
    cash: checkedSong.cash,
    stats: {
      fans: checkedSong.fans,
      flow: stats.flow,
      style: stats.style,
      rhymes: stats.rhymes,
      reputation,
    },
  });
  if (checkedSong.rating >= 9) {
    if (checkedSong.views >= 1000000 && checkedSong.views < 23000000)
      checkedSong.place = Math.floor(
        ((checkedSong.views - 1000000) * (10 - 200)) / (23000000 - 1000000) + 200,
      );
    else if (checkedSong.views >= 23000000) {
      checkedSong.performer = nick;
      const itemOnList = constList.find(item => item.performer === checkedSong.performer);
      if (itemOnList) {
        if (itemOnList.views < checkedSong.views) {
          const index = constList.findIndex(item => item.views < checkedSong.views);
          checkedSong.place = index + 1;
          changeBestList(checkedSong, index);
        }
      } else {
        const index = constList.findIndex(item => item.views < checkedSong.views);
        checkedSong.place = index + 1;
        changeBestList(checkedSong, index);
      }
    }

    setBestSong(checkedSong);
  } else {
    checkedSong.place = '--';
  }

  setPersonalStats({ fans: checkedSong.fans, cash: checkedSong.cash, reputation, stats });
  return checkedSong;
};
