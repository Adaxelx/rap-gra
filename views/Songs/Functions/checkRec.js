const pickSubject = arr => {
  // jezeli wszystkie piosenki sa o tym samym to tematyka jest zgodna z tym tematem, inaczej jest mieszana
  const firstS = arr[0];
  const newArr = arr.filter(sub => sub === firstS);
  if (newArr.length === arr.length) {
    return arr[0];
  }
  return 'Mieszany';
};

export const checkRec = (rec, length, fans) => {
  const { title, type, activeSubjects, preorder, special, ads, cover, activeRates } = rec; // Destrukturyzacja obiektu piosenki
  console.log(ads);
  let mult = type === 'EP' ? 0.01 : 0.015; // Mnożnik - zależność od typu płyty

  // obiekt sprawdzonej piosenki zwierający tytuł, typ, temat, sprzedane egzemplarze, ocenę, id (w zaleznosci od ilosci piosenek)
  // * mozna dodać ilość zarobionych pieniedzy lub dodać stala wartosc (cene np 20)
  const checkedRec = {
    title,
    type,
    subject: '',
    sold: 0,
    rating: 0,
    id: length,
  };
  checkedRec.subject = pickSubject(activeSubjects); // uzycie funkcji do wybrania tematu

  // ocena to srednia z ocen plyt + dodatkowo mozna ja zwiekszyc przez preorder i edycje specjalna
  let sum = 0;
  activeRates.forEach(rate => (sum += rate));
  checkedRec.rating = sum / activeRates.length;

  if (preorder) {
    mult += 0.05;
  }
  if (special) {
    mult += 0.025;
    checkedRec.rating += 0.25;
  }

  // sprzedane plyty - algorytm do poprawienia
  console.log((fans * mult) / 2, fans);
  checkedRec.sold = Math.round(ads * 0.01 + fans * mult + (cover * mult) / 2);

  // jezeli tematyka jest zgodna ocena wzrasta
  if (checkRec.subject !== 'Mieszany') {
    checkedRec.rating += 0.5;
  }

  // zaokraglenie oceny
  checkedRec.rating = Math.round(10 * checkedRec.rating) / 10;
  return checkedRec;
};
