export const checkConcert = (
  stats,
  valueSound,
  valueTicketsPrice,
  valueAlcohol,
  valueClubSize,
  free,
) => {
  let fansIncrease;
  let cashIncrease;
  let skillsIncrease;
  let reputationIncrease;

  /*eslint-disable */

  if (valueAlcohol >= 30 && valueAlcohol <= 32.5) {
    // idealna wartość alkoholu, 1,5 bonus
    if (free) {
      // darmowe daje bonus do przyrostu fanów i reputacji o wartości 1.5, brak zarobku, NIE wpłytwa na skille
      fansIncrease =
        ((Math.random() + 1 - 0.9999) *
          ((stats.flow + stats.style + stats.rhymes) / 3) *
          1.5 *
          1.5 *
          (valueClubSize + valueTicketsPrice + valueSound)) /
        4; // losuje ilu fanów przybwa po koncercie, mnożnik *1,5 bo darmowe
      cashIncrease = 0; // darmowy koncert to nic nie zarobione
      skillsIncrease = (Math.random() + 1) / 2; // równo wartości się rozwijają umiejętności (jak słaby pomysł to poraw)
      reputationIncrease =
        ((Math.random() + 1 - 0.9999) *
          ((stats.flow + stats.style + stats.rhymes) / 3) *
          1.5 *
          1.5 *
          (valueClubSize + valueTicketsPrice + valueSound)) /
        4;
    } else {
      fansIncrease =
        (Math.random() *
          ((stats.flow + stats.style + stats.rhymes) / 3) *
          1.5 *
          (valueClubSize + valueTicketsPrice + valueSound)) /
        4;
      cashIncrease = 20 * fansIncrease; // cena biletu to 20 to kasy tyle ile fanów kupiło bilety
      skillsIncrease = (Math.random() + 1) / 1.75; // równo wartości się rozwijają umiejętności (jak słaby pomysł to poraw)
      reputationIncrease =
        ((Math.random() + 1 - 0.9999) *
          ((stats.flow + stats.style + stats.rhymes) / 3) *
          1.5 *
          (valueClubSize + valueTicketsPrice + valueSound)) /
        4;
    }
  } else if (
    (valueAlcohol >= 20 && valueAlcohol < 30) ||
    (valueAlcohol > 32.5 && valueAlcohol <= 39)
  ) {
    // za mało alkoholu trochę lub za dużo trochę, bonus 1.35
    if (free) {
      fansIncrease =
        ((Math.random() + 1 - 0.9999) *
          ((stats.flow + stats.style + stats.rhymes) / 3) *
          1.35 *
          1.5 *
          (valueClubSize + valueTicketsPrice + valueSound)) /
        4; // losuje ilu fanów przybwa po koncercie, mnożnik *1,5 bo darmowe
      cashIncrease = 0; // darmowy koncert to nic nie zarobione
      skillsIncrease = (Math.random() + 1) / 2; // równo wartości się rozwijają umiejętności (jak słaby pomysł to poraw)
      reputationIncrease =
        ((Math.random() + 1 - 0.9999) *
          ((stats.flow + stats.style + stats.rhymes) / 3) *
          1.35 *
          1.5 *
          (valueClubSize + valueTicketsPrice + valueSound)) /
        4;
    } else {
      fansIncrease =
        (Math.random() *
          ((stats.flow + stats.style + stats.rhymes) / 3) *
          1.35 *
          (valueClubSize + valueTicketsPrice + valueSound)) /
        4;
      cashIncrease = 20 * fansIncrease; // cena biletu to 20 to kasy tyle ile fanów kupiło bilety
      skillsIncrease = (Math.random() + 1) / 1.75; // równo wartości się rozwijają umiejętności (jak słaby pomysł to poraw)
      reputationIncrease =
        ((Math.random() + 1 - 0.9999) *
          ((stats.flow + stats.style + stats.rhymes) / 3) *
          1.35 *
          (valueClubSize + valueTicketsPrice + valueSound)) /
        4;
    }
  } else if (
    (valueAlcohol >= 0 && valueAlcohol < 20) ||
    (valueAlcohol > 39 && valueAlcohol <= 59)
  ) {
    // dużo za mało lub za dużo, bonus 1.1
    if (free) {
      fansIncrease =
        ((Math.random() + 1 - 0.9999) *
          ((stats.flow + stats.style + stats.rhymes) / 3) *
          1.1 *
          1.5 *
          (valueClubSize + valueTicketsPrice + valueSound)) /
        4; // losuje ilu fanów przybwa po koncercie, mnożnik *1,5 bo darmowe
      cashIncrease = 0; // darmowy koncert to nic nie zarobione
      skillsIncrease = (Math.random() + 1) / 2; // równo wartości się rozwijają umiejętności (jak słaby pomysł to poraw)
      reputationIncrease =
        ((Math.random() + 1 - 0.9999) *
          ((stats.flow + stats.style + stats.rhymes) / 3) *
          1.1 *
          1.5 *
          (valueClubSize + valueTicketsPrice + valueSound)) /
        4;
    } else {
      fansIncrease =
        (Math.random() *
          ((stats.flow + stats.style + stats.rhymes) / 3) *
          1.1 *
          (valueClubSize + valueTicketsPrice + valueSound)) /
        4;
      cashIncrease = 20 * fansIncrease; // cena biletu to 20 to kasy tyle ile fanów kupiło bilety
      skillsIncrease = (Math.random() + 1) / 1.75; // równo wartości się rozwijają umiejętności (jak słaby pomysł to poraw)
      reputationIncrease =
        ((Math.random() + 1 - 0.9999) *
          ((stats.flow + stats.style + stats.rhymes) / 3) *
          1.1 *
          (valueClubSize + valueTicketsPrice + valueSound)) /
        4;
    }
  } else {
    // jeśli nie spełniony żaden pozostąły warnuek
    if (free) {
      fansIncrease =
        ((Math.random() + 1 - 0.9999) *
          ((stats.flow + stats.style + stats.rhymes) / 3) *
          1.5 *
          (valueClubSize + valueTicketsPrice + valueSound)) /
        4; // losuje ilu fanów przybwa po koncercie, mnożnik *1,5 bo darmowe
      cashIncrease = 0; // darmowy koncert to nic nie zarobione
      skillsIncrease = (Math.random() + 1) / 2; // równo wartości się rozwijają umiejętności (jak słaby pomysł to poraw)
      reputationIncrease =
        ((Math.random() + 1 - 0.9999) *
          ((stats.flow + stats.style + stats.rhymes) / 3) *
          1.5 *
          (valueClubSize + valueTicketsPrice + valueSound)) /
        4;
    } else {
      fansIncrease =
        (Math.random() *
          ((stats.flow + stats.style + stats.rhymes) / 3) *
          (valueClubSize + valueTicketsPrice + valueSound)) /
        4;
      cashIncrease = 20 * fansIncrease; // cena biletu to 20 to kasy tyle ile fanów kupiło bilety
      skillsIncrease = (Math.random() + 1) / 1.75; // równo wartości się rozwijają umiejętności (jak słaby pomysł to poraw)
      reputationIncrease =
        ((Math.random() + 1 - 0.9999) *
          ((stats.flow + stats.style + stats.rhymes) / 3) *
          (valueClubSize + valueTicketsPrice + valueSound)) /
        4;
    }
  }

  /* eslint-enable */

  if (valueAlcohol >= 80) {
    // powyżej przyznawane punkty karne za upicie w takiej postaci (wartości do poprawy na 90%)
    fansIncrease -= 1000;
    cashIncrease -= 500;
    skillsIncrease = 0;
    reputationIncrease -= 500;
  }

  // console.log(fansIncrease, cashIncrease, skillsIncrease, reputationIncrease);

  return [
    Math.round(fansIncrease),
    Math.round(cashIncrease),
    Math.round(skillsIncrease),
    Math.round(reputationIncrease),
  ];
};
