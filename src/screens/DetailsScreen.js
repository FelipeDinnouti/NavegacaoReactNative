import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

import OverlappingText from './../components/OverlappingText.js';
import CustomButton from '../components/CustomButton.js';

export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <OverlappingText text="Details Screen"/>
            <Text style={styles.contentText}>
            freestar
freestar

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis sagittis feugiat. Aliquam mauris tortor, sagittis ut consequat non, pretium sed nisl. Sed nec sapien est. Cras sed tristique sem.
            </Text>

            <CustomButton text="Go to Home" container_style={styles.buttonContainer} text_style={styles.buttonText} onPress={() => navigation.navigate('Home')}/>
            <CustomButton text="Go to Profile" container_style={styles.buttonContainer} text_style={styles.buttonText} onPress={() => navigation.navigate('Profile')}/>
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
    contentText: {
        justifyContent: 'center',
        textAlign: 'justify',
        width: windowWidth*0.85,
        marginBottom: 20,
        fontWeight: '300'
    }   
})

// Felipe Dinnouti