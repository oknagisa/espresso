import React from 'react';
import {StyleSheet, View} from 'react-native';
import Search from '../SearchPage/search';
import Card from '../Card/card';
import {useSearch} from '../../hooks/useSearch';

const HomePage = () => {
  const {data, loading, search} = useSearch();
  const style = styles.top; //style will change according to the results
  return (
    <View style={style}>
      <Search search={search} />
      <View style={styles.cardContainer}>
        {data?.map(({id, ...rest}) => <Card {...rest} key={id} />)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  top: {},
  cardContainer: {
    overflow: 'scroll',
    height: 1000
  }
});

export default HomePage;
