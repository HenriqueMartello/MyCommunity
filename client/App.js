import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Pages/HomePage';
import FormPage from './Pages/FormPage';
import LoginPage from './Pages/LoginPage';
import ResetPasswordPage from './Pages/ResetPasswordPage';
import Sistema from './Pages/Sistema';
import RequestPage from './Pages/RequestPage'
import Development from './Pages/Development'

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="My Community" component={HomePage} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Criar Cadastro" component={FormPage} />
                <Stack.Screen name="Redefinir Senha" component={ResetPasswordPage} />
                <Stack.Screen name="Sistema" component={Sistema} />
                <Stack.Screen name="Nova Solicitacao" component={RequestPage} />
                <Stack.Screen name="Development" component={Development} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;