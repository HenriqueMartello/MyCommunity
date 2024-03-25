import React from 'react';
import { View, Text, Button, Image } from 'react-native';

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
                onPress={() => navigation.navigate('Form')}
            ></Button>
            <Button 
                title="Nova Solicitação"
                onPress={() => navigation.navigate('Request')}
            ></Button>
        </View>
    );
};

export default HomePage;