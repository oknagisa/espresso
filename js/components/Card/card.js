import React from 'react';
import {StyleSheet, View, Text, Linking} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import Flag from 'react-native-flags';

const Card = ({name, country, description, flag, industry, source}) => {
    const url = () => source ? source : 'https://www.google.com/search?q=' + 'brand ' + name.replace(' ', '+')
    return (
        <View style={styles.card}>
            <Text style={styles.brandName}>{name}</Text>
            <View style={styles.countryContainer}>
                <Text style={styles.country}>{country}</Text>
                {flag ? <Flag style={styles.flag} code={flag} size={32}/> : null}
            </View>
            {industry ? <Text style={styles.industry}>{industry}</Text> : null}
            <ReadMore numberOfLines={2}>
                <Text>{description}</Text>
                <Text style={{color: 'blue'}}
                      onPress={() => Linking.openURL(url())}>
                    Source
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
        lineHeight: 35
    },
    countryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flag: {},
    country: {
        fontSize: 20,
        lineHeight: 35,
    },
    basicInfo: {},
    industry: {
        lineHeight: 30,
    }
});

export default Card;
