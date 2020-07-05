import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const SplashScreen = () => {
    return (
        <View>
           <Image source={require('../../../images/brandly_logo.svg')}/>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default SplashScreen;
