import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './headerStyle';

const Header = ({ user, onLogout }) => {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/favicon.png')} style={styles.icon} />
      <View style={styles.userInfo}>
        <Image source={require('../assets/favicon.png')} style={styles.profileImage} />
        <Text style={styles.greeting}>Olá, {user.name}</Text>
      </View>
      <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Deslogar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Clean-up: Renamed variables to be more descriptive, removed unused variable, improved formatting, and removed debugging statements.

export { Header };
