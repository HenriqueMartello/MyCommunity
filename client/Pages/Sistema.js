import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Header } from '../Components/Header';

const Sistema = ({ navigation }) => {
    return (
        <View style={StyleSheet}>
            <Header username="Usuário" onLogout={() => console.log('Logout')}></Header>
            <Button
                title='Nova Solicitacao'
                onPress={() => navigation.navigate('NovaSolicitacao')}
            ></Button>
            <Button
                title='Minhas Solicitacoes'
                onPress={() => navigation.navigate('MinhasSolicitacoes')}
            ></Button>
            <Button
                title='Aprenda Mais'
                onPress={() => navigation.navigate('AprendaMais')}
            ></Button>
            <Button
                title='Outras Informacoes'
                onPress={() => navigation.navigate('OutrasInformacoes')}
            ></Button>
        </View>
    );
};

export default Sistema;
