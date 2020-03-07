import { AsyncStorage } from 'react-native';
import { defaultSubjects } from 'rap-gra/constants/subjects';

export const resetGame = async (name, pic, func) => {
  const flow = Math.floor(Math.random() * 3 + 1).toString();
  const style = Math.floor(Math.random() * 3 + 1).toString();
  const rhymes = Math.floor(Math.random() * 3 + 1).toString();
  try {
    await AsyncStorage.setItem('subjects', JSON.stringify(defaultSubjects));
    await AsyncStorage.setItem('nick', name);
    await AsyncStorage.setItem('picture', pic);
    await AsyncStorage.setItem('label', '');
    await AsyncStorage.setItem('cash', '5000');
    await AsyncStorage.setItem('rep', '0');
    await AsyncStorage.setItem('fans', '0');
    await AsyncStorage.setItem('flow', flow);
    await AsyncStorage.setItem('style', style);
    await AsyncStorage.setItem('rhymes', rhymes);
    await AsyncStorage.setItem('songs', JSON.stringify([]));
    await AsyncStorage.setItem('records', JSON.stringify([]));
    await AsyncStorage.setItem('concerts_array', JSON.stringify([]));
    await AsyncStorage.setItem('newSubCount', JSON.stringify({ e: 0, l: 0 }));
  } catch (error) {
    throw new Error(error);
  }
  func();
};
