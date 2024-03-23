import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
    return (
        <View>
            <Text>Welcome to My Community!</Text>
            <Image source={require('./assets/doggie.jpg')} />
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
            ></Button>
            <Button 
                title="Cadastrar Novo Usuário"
                onPress={() => navigation.navigate('Criar Cadastro')}
            ></Button>
        </View>
    );
};

export default HomePage;