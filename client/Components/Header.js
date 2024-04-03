import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './headerStyle';

// as variaveis username e onLogout devem ficar na função que vai pegar as informações do DB
const Header = ({ username, onLogout }) => {
  
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/favicon.png')} // Substitua pelo caminho da imagem do logo
        style={styles.icon}
      />
      <View style={styles.userInfo}>
        <Image
          source={require('../assets/favicon.png')} // Substitua pelo caminho da imagem de perfil do usuário
          style={styles.profileImage}
        />
        <Text style={styles.greeting}>Olá, {username}</Text>
      </View>
      <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Deslogar</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Header };