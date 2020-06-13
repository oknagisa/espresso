import {setData} from './dataIO';

export function initData() {
  return fetch('https://oknagisa.github.io/static/espresso/data.json')
    .then(response => response.json())
    .then(d => setData(d));
}
