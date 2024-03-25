import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import FormPage from './FormPage';
import LoginPage from './LoginPage';
import ResetPasswordPage from './ResetPasswordPage';
import RequestPage from './RequestPage';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://ansdcklxntfxgblhevne.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
export const supabase = createClient("https://https://ansdcklxntfxgblhevne.supabase.co.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuc2Rja2x4bnRmeGdibGhldm5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExNTcyNzMsImV4cCI6MjAyNjczMzI3M30.9nWI_hakFOBLfBKnvSx2-SGKH_RqqosSj55pHiAS2QM");

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomePage}></Stack.Screen> 
                <Stack.Screen name="Login" component={LoginPage}></Stack.Screen>
                <Stack.Screen name="Form" component={FormPage}></Stack.Screen>
                <Stack.Screen name="Reset" component={ResetPasswordPage}></Stack.Screen>
                <Stack.Screen name="Request" component={RequestPage}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;