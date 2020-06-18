import React from 'react';
import {StyleSheet, TextInput, View, Image, Text} from 'react-native';

const Logo = () => {
    return (
        <Text style={styles.logo}>
            Know Your Brand
        </Text>
    );
};

const styles = StyleSheet.create({
    logo: {
        fontSize: 30,
    }
});

export default Logo;
