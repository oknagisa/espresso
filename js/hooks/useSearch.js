import {useState} from 'react';
import {search} from '../data-layer';

export function useSearch() {
  const [state, setState] = useState({
    loading: false,
    data: [],
    searchText: ''
  });
  const handleSearch = searchText => {
    console.log('Searching ', searchText);
    setState({
      loading: true,
      data: [],
      searchText: state.searchText
    });

    search(searchText).then(data =>
      setState({
        loading: false,
        data,
        searchText: state.searchText
      })
    );
  };
  return {...state, search: handleSearch};
}
