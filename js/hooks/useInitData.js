import {useState} from 'react';
import {initData, logError} from '../data-layer';

export function useInitData() {
  const [loading, setLoading] = useState(true);
  try {
    initData().then(() => setLoading(false));
  } catch (e) {
    logError(e);
  }

  return {loading};
}
