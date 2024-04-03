import React from 'react';
import { View, Text, Image } from 'react-native';
import { LoginButton, CreateAccountButton, DevelopmentButton } from '../Components/Buttons'

const HomePage = ({ navigation }) => (
  <View>
    <Text>Welcome to My Community!</Text>
    <Image source={require('../assets/doggie.jpg')} />
    <LoginButton navigation={navigation} />
    <CreateAccountButton navigation={navigation} />
    <DevelopmentButton navigation={navigation} />
  </View>
);

export default HomePage;
