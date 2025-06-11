import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import { useEffect, useState } from 'react';


const windowWidth = Dimensions.get('window').width;

import OverlappingText from './../components/OverlappingText.js';
import CustomButton from '../components/CustomButton.js';

import * as SecureStore  from 'expo-secure-store';


export default function DetailsScreen({ navigation }) {

    const [isReady, setIsReady] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
    const initializeApp = async () => {
        try {
            // Check if the value exists in storage
            const userData = await SecureStore.getItemAsync('registered_user');

            // Parse the JSON string to an object
            const user = userData ? JSON.parse(userData) : null;
            setUsername(user.username);
            setIsReady(true);
        } catch (error) {
        console.error('Error reading value:', error);
        } finally {
        setIsReady(true);
        }
    };

    initializeApp();
    }, []); // Empty dependency array = runs only once on mount
    
    if (!isReady) {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
        </View>
        );
    }

    function logout() {
         // Create async function wrapper
         const updateLoggedState = async () => {
            try {
                console.log("Getting registered user data");
                await SecureStore.setItemAsync('is_logged_in', 'false');
                
                navigation.reset({
                    index: 0,
                    routes: [{name: 'Login'}],
                })
            } catch (error) {
                console.error('Error while updating data: ', error);
            } finally {
                setIsLoading(false);
            }
        };

        updateLoggedState();
    }

    return (
        <View style={styles.container}> 
            <OverlappingText text="Profile Screen"/>
            <Text style={styles.subtitle}>Welcome, {username}!</Text>

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