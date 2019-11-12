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

export const checkSong = song => {
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
    earned: 0,
    place: 200,
    fans: 0,
    id: song.id,
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
  checkedSong.fans = Math.floor((checkedSong.fans * 0.1 + 1) * (1 + checkedSong.rating * 0.05));

  // Obliczenie wyświetleń(Na podstawie ilości fanów i oceny)
  checkedSong.views = Math.floor((checkedSong.fans + 10) * checkedSong.rating);
  checkedSong.views = video.active ? video.valueVid * 0.1 * checkedSong.views : checkedSong.views;
  // Obliczenie zarobionych pieniędzy na podstawie wyświetleń
  checkedSong.earned = Math.floor(checkedSong.views * 0.01);
  return checkedSong;
};
