import React from 'react';
import {StyleSheet, TextInput, View, Image} from 'react-native';

const SearchPage = ({search}) => {
  return (
    <View style={styles.sectionStyle}>
      <TextInput
        style={styles.textInput}
        placeholder={'Search'}
        onChangeText={search}
      />
      {/*<Image style={styles.searchImage} source={require('../../../images/search.png')}/>*/}
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
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  searchImage: {
    margin: 10,
    height: 18,
    width: 18,
    resizeMode: 'stretch',
    alignItems: 'center',
    opacity: 0.4
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
  }
});

export default SearchPage;
