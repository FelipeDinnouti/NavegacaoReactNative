import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

import OverlappingText from './../components/OverlappingText.js';
import CustomButton from '../components/CustomButton.js';

export default function DetailsScreen({ navigation }) {

    function logout() {
        console.log(navigation.params?.storage.get('isLogged'))

        navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
        })
    }

    return (
        <View style={styles.container}> 
            <OverlappingText text="Profile Screen"/>
            <Text style={styles.subtitle}>Bem vindo, admin!</Text>

            <CustomButton text="Logout" container_style={[styles.buttonContainer, styles.logoutContainer]} text_style={styles.buttonText} onPress={logout}/>
            <CustomButton text="Go to Home" container_style={styles.buttonContainer} text_style={styles.buttonText} onPress={() => navigation.navigate('Home')}/>
            <CustomButton text="Go to Details" container_style={styles.buttonContainer} text_style={styles.buttonText} onPress={() => navigation.navigate('Details')}/>
            <CustomButton text="Go Back" container_style={styles.buttonContainer} text_style={styles.buttonText} onPress={() => navigation.goBack()}/>
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
    subtitle: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: '600'
    },
    buttonContainer: {
        backgroundColor: '#81baff',
        margin: 10,
        width: windowWidth*0.85,
        borderRadius: 8,
    },
    logoutContainer: {
        backgroundColor: '#ff3318',
    },
    buttonText: {
        marginTop: 8,
        marginBottom: 8,
        textAlign: 'center',
        fontWeight: '900'
    },
})

// Felipe Dinnouti