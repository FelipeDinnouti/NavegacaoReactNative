import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useState } from 'react';

const windowWidth = Dimensions.get('window').width; 

const CustomButton = ({container_style, text_style, onPress, text}) => {
    return (
        <Pressable style={container_style} onPress={onPress}>
                <Text style={text_style} >{text}</Text>
        </Pressable>
    );
}

export default CustomButton;