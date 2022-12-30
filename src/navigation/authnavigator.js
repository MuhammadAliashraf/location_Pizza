// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninwelcomeScreen from '../screens/authScreens/signinwelcome';
import Signin from '../screens/authScreens/signin';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/authScreens/home';
import HomeScr from '../screens/authScreens/home';

const Auth = createNativeStackNavigator();
function AuthStack() {
  return (
      // <NavigationContainer>
      <Auth.Navigator>
        <Auth.Screen
        options={{
            headerShown:false,
        }}
        name="SigninwelcomeScreen" component={SigninwelcomeScreen} />
        <Auth.Screen name="Signin" component={Signin} />
        <Auth.Screen options={{
            headerShown:false,
        }} name="HomeScr" component={HomeScr} />
      </Auth.Navigator>
      // </NavigationContainer>
  );
}

export default AuthStack;