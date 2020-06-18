import {getData} from './dataIO';

const cache = {};

const filter = (key, data) => {
  if (!cache[key]) {
    cache[key] = data.filter(ob => ob.name.toLowerCase().includes(key));
    setTimeout(() => delete cache[key], 60000);
    console.log('Updating cache: ', cache);
  }
  return cache[key];
};

export const search = searchText =>
  getData().then(
    data =>
      new Promise(res =>
        res(searchText ? filter(searchText.toLowerCase(), data) : [])
      )
  );
