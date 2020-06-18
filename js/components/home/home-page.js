import React from 'react';
import {StyleSheet, View} from 'react-native';
import Search from "../SearchPage/search";
import Card from "../Card/card";

const HomePage = () => {
    const style = styles.top;  //style will change according to the results
    return (
        <View style={style}>
            <Search/>
            <View style={styles.cardContainer}>
                <Card country={'India'}
                      name={'Parle'}
                      basicInfo={'Parle Products Private Limited is an Indian food products company. ' +
                      'It owns the famous biscuit brand Parle-G. As of 2012, it had a 35% dominant share of the ' +
                      'Indian biscuit market. As of 2011, as per Nielsen, it was the largest selling biscuit brand ' +
                      'in the world.'}
                /><Card country={'India'}
                      name={'Parle'}
                      basicInfo={'Parle Products Private Limited is an Indian food products company. ' +
                      'It owns the famous biscuit brand Parle-G. As of 2012, it had a 35% dominant share of the ' +
                      'Indian biscuit market. As of 2011, as per Nielsen, it was the largest selling biscuit brand ' +
                      'in the world.'}
                /><Card country={'India'}
                      name={'Parle'}
                      basicInfo={'Parle Products Private Limited is an Indian food products company. ' +
                      'It owns the famous biscuit brand Parle-G. As of 2012, it had a 35% dominant share of the ' +
                      'Indian biscuit market. As of 2011, as per Nielsen, it was the largest selling biscuit brand ' +
                      'in the world.'}
                /><Card country={'India'}
                      name={'Parle'}
                      basicInfo={'Parle Products Private Limited is an Indian food products company. ' +
                      'It owns the famous biscuit brand Parle-G. As of 2012, it had a 35% dominant share of the ' +
                      'Indian biscuit market. As of 2011, as per Nielsen, it was the largest selling biscuit brand ' +
                      'in the world.'}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    top: {},
    cardContainer: {
        overflow: 'scroll',
        height: 1000,
    }
});

export default HomePage;
