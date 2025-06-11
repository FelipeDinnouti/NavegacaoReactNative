import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, Pressable, Alert } from 'react-native';
import { useState } from 'react';

import OverlappingText from '../components/OverlappingText.js';
import CustomButton from '../components/CustomButton.js';

import * as SecureStore  from 'expo-secure-store';

const windowWidth = Dimensions.get('window').width; 

export default function LoginScreen({ navigation }) {
    
// Declaração das variáveis de estado
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const setLoginStorage = async (value) => {
        try { 
        await SecureStore.setItemAsync('is_logged_in', value.toString());
        } catch (error) {
        console.error('Erro ao salvar o login', error);
        }
    };

    function loginButtonPress() {
        const verifyLogin = async (user) => {
            
            let isAdmin = ("admin" === login && "123" === password);
            let isUser = (user.username === login && user.password === password)

            if (!isAdmin && !isUser) {
                return;
            }
            
            setLoginStorage(true).catch(error => 
                console.error('Unhandled error:', error)
            );

            // usuário nao pode voltar para tela inicial
            navigation.reset({
                index: 0,
                routes: [{name: 'Home'}],
            })
        }
        // Create async function wrapper
        const fetchData = async () => {
            setIsLoading(true);
            try {
                console.log("Getting registered user data");
                const userData = await SecureStore.getItemAsync('registered_user')  ;
                
                // Parse the JSON string to an object
                const user = userData ? JSON.parse(userData) : null;

                console.log(user);

                verifyLogin(user);
            } catch (error) {
                console.error('Error while retrieving data: ', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }

    return (
        <View style={styles.container}>
            <OverlappingText text="Placeholder Inc."/>
            <Text style={styles.subtitle}>LOGIN</Text>            

            <TextInput
                style={styles.input}
                placeholderTextColor={"#91a0d9"}
                placeholder="Username"
                keyboardType="text"
                value={login}
                onChangeText={setLogin}
            />

            <TextInput
                style={styles.input}
                placeholderTextColor={"#91a0d9"}
                placeholder="Password"
                keyboardType="text"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <CustomButton text="LOGIN" container_style={styles.buttonContainer} text_style={styles.buttonText} onPress={loginButtonPress}/>
            <Pressable onPress={() => {navigation.navigate('Register')}}>
                <Text style={styles.register_text}>Not registered yet? Click here.</Text>
            </Pressable>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0fe',
    },
    input: {
        height: 40,
        textAlign: 'center',
        width: windowWidth*0.85,
        borderColor: '#bccafc',
        borderWidth: 1,
        marginTop: 12,
        paddingHorizontal: 8,
        borderRadius: 8,
        color: "#000",
        backgroundColor: "#d6dcf3",
    },
    title: {
        fontSize: 36,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: '600'
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
    icon: {
      width: 6,
      height: 6
    },
    register_text: {
        fontWeight: '300',
        fontStyle: "italic",
        color: "#5aa6ff",
        fontSize: 12
    }
})

// Felipe Dinnouti