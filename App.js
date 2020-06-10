import React from 'react';
import InfoPage from './info-page';
import HomePage from './home-page';
import {StyleSheet, View} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.header}>
        <HomePage />
      </View>
      <InfoPage name={'Amul'} country={'India'} basicInfo={''} />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    // backgroundColor: 'black',
    minHeight: 50,
  },
});

export default App;
