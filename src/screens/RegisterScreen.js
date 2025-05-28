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
    const [password_confirm, setPasswordConfirm] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const createUserEntry = async (input_username, input_password) => {
    try {
        await SecureStore.setItemAsync('registered_user', JSON.stringify({username: input_username, password: input_password})); 
    } catch (error) {
        console.error('Erro ao efetuar cadastro', error);
    }
  };

    function register() {
        if (password !== password_confirm) { 
            Alert.alert("Senhas não coincidem")
            return
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

    return (
        <View style={styles.container}>
            <OverlappingText text="Placeholder Inc."/>
            <Text style={styles.subtitle}>Cadastro</Text>            

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
            <TextInput
                style={styles.input}
                placeholderTextColor={"#91a0d9"}
                placeholder="Confirme a Senha"
                keyboardType="text"
                secureTextEntry={true}
                value={password_confirm}
                onChangeText={setPasswordConfirm}
            />
            <CustomButton text="CADASTRO" container_style={styles.buttonContainer} text_style={styles.buttonText} onPress={register}/>
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
    }
})

// Felipe Dinnouti