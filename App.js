import * as React  from 'react';
import { useEffect, useState } from 'react';

import { View, Alert, ActivityIndicator } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen.js';
import DetailsScreen from './src/screens/DetailsScreen.js';
import ProfileScreen from './src/screens/ProfileScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';

import * as SecureStore  from 'expo-secure-store';

const Stack = createStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(null);

 useEffect(() => {
  const initializeApp = async () => {
    try {
      // Check if the value exists in storage
      const value = await SecureStore.getItemAsync('is_logged_in');
      
      if (value) {
        // Convert string from json to boolean
        setLoggedIn(value === 'true');
      } else {
        // Set default value if not found
        await SecureStore.setItemAsync('is_logged_in', 'false');
        setLoggedIn(false);
      }
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

  let initialRoute = isLoggedIn ? "Home" : "Login";

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Login" component={LoginScreen} options = {{ headerShown: false }} initialParams={ setLoggedIn }/>
        <Stack.Screen name="Home" component={HomeScreen} options ={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options ={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options ={{ headerShown: false }} initialParams={{ setLoggedIn }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Felipe Dinnouti