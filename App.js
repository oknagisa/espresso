import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import SearchPage from './js/components/SearchPage/SearchPage';
import {useInitData} from './js/hooks/useInitData';

const App = () => {
  // Load main app data
  const {loading} = useInitData();
  return (
    <>
      <View>
        {loading ? <Text>Loading Initial Data...</Text> : <SearchPage />}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    // backgroundColor: 'black',
    minHeight: 50
  }
});

export default App;
