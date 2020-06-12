import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ListItem = ({name, country, basicInfo}) => {
  return (
    <View>
      <Text style={styles.brandName}>{name}</Text>
      <Text style={styles.country}>{country}</Text>
      <Text style={styles.basicInfo}>{basicInfo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  brandName: {
    backgroundColor: Colors.lighter
  }
});

export default ListItem;
