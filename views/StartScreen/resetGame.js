import { AsyncStorage } from 'react-native';

export const resetGame = async (name, pic, component) => {
  const flow = Math.floor(Math.random() * 3 + 1).toString();
  const style = Math.floor(Math.random() * 3 + 1).toString();
  const rhymes = Math.floor(Math.random() * 3 + 1).toString();
  try {
    await AsyncStorage.setItem(`subjectL`, '4');
    await AsyncStorage.setItem(`songsL`, '0');
    await AsyncStorage.setItem(`recordsL`, '0');
    await AsyncStorage.setItem('nick', name);
    await AsyncStorage.setItem('picture', pic);
    await AsyncStorage.setItem('label', '');
    await AsyncStorage.setItem('cash', '5000');
    await AsyncStorage.setItem('rep', '0');
    await AsyncStorage.setItem('fans', '0');
    await AsyncStorage.setItem('flow', flow);
    await AsyncStorage.setItem('style', style);
    await AsyncStorage.setItem('rhymes', rhymes);
    await AsyncStorage.setItem('concerts_array', JSON.stringify([]));
  } catch (error) {
    throw new Error(error);
  }
  component.retrieveData();
};
