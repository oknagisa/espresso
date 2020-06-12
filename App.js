import React from 'react';

import { StyleSheet, View} from 'react-native';
import SearchPage from './js/components/SearchPage/SearchPage';

const App = () => {
  return (
    <>
      <View>
        <SearchPage />
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
