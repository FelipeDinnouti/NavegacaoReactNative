import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useState } from 'react';

const windowWidth = Dimensions.get('window').width; 

const OverlappingText = ({text}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.backText]}>{text}</Text>
            <Text style={[styles.text, styles.frontText]}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: windowWidth*0.85,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 160,
        textAlign: 'center',

    },
    text: {
        top: "50%",
        left: "50%",
        position: 'absolute',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '900',
    },
    backText: {
        color: '#2a91ff',
        
        transform: [{translateX: "-50%"}],

        zIndex: 1
    },
    frontText: {
        transform: [{translateX: "-49%"}, {translateY: "4%"}],

        zIndex: 2,  
    }
})

export default OverlappingText;