import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

import OverlappingText from './../components/OverlappingText.js';
import CustomButton from '../components/CustomButton.js';


const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <OverlappingText text="Home Screen"/>
            <CustomButton text="Go to Details" container_style={styles.buttonContainer} text_style={styles.buttonText} onPress={() => navigation.navigate('Details')} />
            <CustomButton text="Go to Profile" container_style={styles.buttonContainer} text_style={styles.buttonText} onPress={() => navigation.navigate('Profile')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#81baff',
        margin: 10,
        width: windowWidth*0.85,
        borderRadius: 8,
    },
    buttonText: {
        marginTop: 8,
        marginBottom: 8,
        textAlign: 'center',
        fontWeight: '900'
    },
})

// Felipe Dinnouti