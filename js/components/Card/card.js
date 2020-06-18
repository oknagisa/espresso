import React from 'react';
import {StyleSheet, TextInput, View, Image, Text} from 'react-native';
import ReadMore from 'react-native-read-more-text';
const Card = ({name, country, basicInfo}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.brandName}>{name}</Text>
            <Text style={styles.country}>{country}</Text>
            <ReadMore numberOfLines={2}>
                <Text>
                    {basicInfo}
                </Text>
            </ReadMore>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 20,
        padding: 20,
        fontSize: 16,
        borderRadius: 30,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 7
    },
    brandName: {
        fontSize: 25,
        lineHeight: 35,
    },
    country: {
        fontSize: 20,
        lineHeight: 35,
    },
    basicInfo : {

    }
});

export default Card;
