import AsyncStorage from '@react-native-community/async-storage';

export const setData = data =>
  AsyncStorage.setItem('data', JSON.stringify(data));
export const getData = () =>
  AsyncStorage.getItem('data').then(
    data => new Promise(res => res(JSON.parse(data)))
  );

export const setDataVersion = version =>
  AsyncStorage.setItem('data_version', version);
export const getDataVersion = () => AsyncStorage.getItem('data_version');

