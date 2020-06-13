import {useState} from 'react';
import {initData} from '../data-layer/initData';

export function useInitData() {
  const [loading, setLoading] = useState(true);
  initData().then(data => {
    console.log('=============Got Data', data);
    setLoading(false);
  });
  return {loading};
}
