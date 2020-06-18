import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import {useInitData} from './js/hooks/useInitData';
import HomePage from './js/components/home/home-page';

const App = () => {
  // Load main app data
  const {loading} = useInitData();
  return loading ? <Text> Loading...</Text> : <HomePage />;
};

const styles = StyleSheet.create({});

export default App;
