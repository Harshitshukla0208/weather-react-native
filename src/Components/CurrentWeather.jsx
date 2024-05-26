import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';

const CurrentWeather = () => {
    return(
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Feather name="sun" size={50} color="black" />
                <Text style={styles.temp}>40</Text>
                <Text style={styles.feels}>Feels like 38</Text>
                <View style={styles.highLowWrapper}>        
                    <Text style={styles.highLow}>High: 45 </Text>        
                    <Text style={styles.highLow}>Low: 32</Text>        
                </View> 
                <View style={styles.bodyWrapper}>
                    <Text style={styles.description}>Its sunny</Text>
                    <Text style={styles.message}>Its perfect T-shirt weather</Text>
                </View>       
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        flex: 1,
        backgroundColor: '#add8e6',
    },
    highLowWrapper: {
        flexDirection: 'row'
    },
    temp: {
        color: 'black',
        fontSize: 48
    },
    feels: {
        fontSize: 30,
        color: 'black',
    },
    highLow: {
        color: 'black',
        fontSize: 20,
    },
    description: {
        fontSize: 20
    },
    message: {
        fontSize: 20
    },
    bodyWrapper: {
        alignItems: "center"
    }
})

export default CurrentWeather;