import {getData} from './dataIO';

export const search = searchText =>
  getData().then(
    data =>
      new Promise(res =>
        res(searchText ? data.filter(ob => ob.name.includes(searchText)) : [])
      )
  );
