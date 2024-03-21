import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import AboutPage from './LoginPage';
import FormPage from './FormPage';
import LoginPage from './LoginPage';
import ResetPasswordPage from './ResetPasswordPage';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Form" component={FormPage} />
                <Stack.Screen name="Reset" component={ResetPasswordPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;