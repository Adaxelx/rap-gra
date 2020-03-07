import { subjects } from 'rap-gra/constants';
import { AsyncStorage, Alert } from 'react-native';

export const addNewSubject = (newSub, type, subjectsArr, setNewSub) => {
  const newObj = newSub;
  if (type === 'EP') {
    newObj.e += 1;
  } else {
    newObj.l += 1;
  }

  if (newObj.e === 2 || newObj.l === 1) {
    const newSubjects = subjects.filter(el => !subjectsArr.includes(el));
    const newSubject = newSubjects[Math.floor(Math.random() * newSubjects.length)];
    setNewSub(newSubject);
    AsyncStorage.setItem('newSubCount', JSON.stringify({ e: 0, l: 0 }));
    AsyncStorage.setItem('subjects', JSON.stringify([...subjectsArr, newSubject]));
    Alert.alert(`Odkryłeś temat: ${newSubject}`);
  } else {
    AsyncStorage.setItem('newSubCount', JSON.stringify(newObj));
  }
};
