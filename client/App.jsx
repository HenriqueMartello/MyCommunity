import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import FormPage from './FormPage';
import LoginPage from './LoginPage';
import ResetPasswordPage from './ResetPasswordPage';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="My Community" component={HomePage} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Criar Cadastro" component={FormPage} />
                <Stack.Screen name="Redefinir Senha" component={ResetPasswordPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;