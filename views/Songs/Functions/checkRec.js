const pickSubject = arr => {
  const firstS = arr[0];
  const newArr = arr.filter(sub => sub === firstS);
  if (newArr.length === arr.length) {
    return arr[0];
  }
  return 'Mieszany';
};

export const checkRec = rec => {
  const { title, type, activeSubjects, preorder, special, ads, cover, activeRates } = rec;
  const fans = 10;
  let mult = type === 'EP' ? 0.01 : 0.015;

  const checkedRec = {
    title,
    type,
    subject: '',
    sold: 0,
    rating: 0,
  };
  checkedRec.subject = pickSubject(activeSubjects);
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

  checkedRec.sold = ads * 0.01 + fans * mult + (cover * mult) / 2;

  if (checkRec.subject !== 'Mieszany') {
    checkedRec.rating += 0.5;
  }
  checkedRec.rating = Math.round(10 * checkedRec.rating) / 10;
  checkedRec.sold = Math.round(checkedRec.sold);
  return checkedRec;
};
