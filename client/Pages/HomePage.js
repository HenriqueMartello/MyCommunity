import React from 'react';
import { View, Text, Image } from 'react-native';
import { LoginButton, CadastroButton, DevelopmentButton } from '../Components/Buttons'

const HomePage = ({ navigation }) => {
    return (
        <View>
            <Text>Welcome to My Community!</Text>
            <Image source={require('../assets/doggie.jpg')} />
            <LoginButton navigation={navigation} />
            <CadastroButton navigation={navigation} />
            <DevelopmentButton navigation={navigation} />
        </View>    
    );
};

export default HomePage;
