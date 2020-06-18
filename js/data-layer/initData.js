import {getData, setData, getDataVersion, setDataVersion} from './dataIO';

const parseJSON = response => response.json();

const fetchData = () =>
  fetch('https://oknagisa.github.io/static/espresso/data.json').then(parseJSON);

const fetchDataVersionInfo = () =>
  fetch('https://oknagisa.github.io/static/espresso/version.json').then(
    parseJSON
  );

export function initData() {
  return fetchDataVersionInfo().then(async ({data_version}) => {
    const localDataVersion = await getDataVersion();
    console.log('Local Data Versions : ', localDataVersion);
    console.log('Server Data Version:', data_version)
    if (localDataVersion !== data_version) {
      console.log('Loading data')
      await fetchData()
        .then(data => setData(data))
        .then(() => setDataVersion(data_version));
    }
    return getData();
  });
}
