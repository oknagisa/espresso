let data = [];
export const setData = d =>
  new Promise(res => {
    console.log('====Setting Data', d);
    data = d;
    res(data);
  });

export const getData = () => new Promise(res => res(data));
