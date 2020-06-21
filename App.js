import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {useInitData} from './js/hooks/useInitData';
import HomePage from './js/components/home/home-page';

const App = () => {
    // Load main app data
    const {loading} = useInitData();
    return loading ? <ActivityIndicator size="small" color="#123085" style={styles.loading}/> : <HomePage/>;
};

const styles = StyleSheet.create({
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
});

export default App;
