import React from 'react';
import {StyleSheet, View, ScrollView, ActivityIndicator} from 'react-native';
import Search from '../SearchPage/search';
import Card from '../Card/card';
import {useSearch} from '../../hooks';

const HomePage = () => {
  const {data, loading, search} = useSearch();
  const style = data.length ? styles.top : styles.centered; //style will change according to the results
  return (
    <View style={style}>
      <Search search={search} />
      {loading ? <ActivityIndicator size="large" color="#123085" style={styles.loading}/> :<ScrollView>
        {data?.map(({id, ...rest}) => <Card {...rest} key={id}/>)}
      </ScrollView>}
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {},
  cardContainer: {
    overflow: 'scroll',
    // height: 1000
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default HomePage;
