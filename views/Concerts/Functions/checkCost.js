export const checkCost = (valueSound, valueAlcohol, valueClubSize) => {
  let cost = 500;

  cost = valueSound * 10 + valueAlcohol + valueClubSize * 12;

  return Math.round(cost);
};
