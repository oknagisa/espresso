import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Image} from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.sectionStyle}>
      <Image style={styles.searchImage}/>
      <TextInput style={styles.textInput} placeholder={'Search'} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 20,
    margin: 10,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  searchImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
  },
});

export default HomePage;
