import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Pages/HomePage';
import FormPage from './Pages/FormPage';
import LoginPage from './Pages/LoginPage';
import ResetPasswordPage from './Pages/ResetPasswordPage';
import SystemPage from './Pages/System';
import RequestPage from './Pages/RequestPage'
import Development from './Pages/Development'
import LearnMore from './Pages/LearnMore';
import MyRequests from './Pages/MyRequests';
import OtherInformations from './Pages/OtherInformations';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomePage} 
      />
      <Stack.Screen 
        name="Login" 
        component={LoginPage} 
      />
      <Stack.Screen 
        name="CreateAccount" 
        component={FormPage} 
      />
      <Stack.Screen 
        name="ResetPassword" 
        component={ResetPasswordPage} 
      />
      <Stack.Screen 
        name="System" 
        component={SystemPage} 
      />
      <Stack.Screen 
        name="Request" 
        component={RequestPage} 
      />
      <Stack.Screen 
        name="Development" 
        component={Development} 
      />
      <Stack.Screen 
        name="LearnMore" 
        component={LearnMore} 
      />
      <Stack.Screen  
        name="MyRequests"
        component={MyRequests}  
      />
      <Stack.Screen
        name="OtherInformations"
        component={OtherInformations}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;