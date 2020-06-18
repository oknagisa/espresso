import {useState} from 'react';
import {search, logError} from '../data-layer';

const initialState = {
  loading: false,
  error: false,
  data: [],
  searchText: ''
};
export function useSearch() {
  const [state, setState] = useState({
    ...initialState
  });
  const handleSearch = searchText => {
    try {
      setState({
        loading: true,
        error: false,
        data: [],
        searchText: state.searchText
      });

      search(searchText).then(data =>
        setState({
          loading: false,
          error: false,
          data,
          searchText: state.searchText
        })
      );
    } catch (e) {
      logError(e);
    }
  };
  return {...state, search: handleSearch};
}
