import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { formatCpf, handleLogin } from './helpers';
import { ResetPasswordButton, CreateAccountButton } from '../Components/Buttons';
import { useRouter } from 'expo-router'

const LoginPage = ({ navigation }) => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLoginPress = () => {
    if (!cpf || !password) {
      Alert.alert('Error', 'CPF and Password are required.');
      return;
    }

    try {
      handleLogin(cpf, password);
    } catch(error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'Failed to log in.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={text => formatCpf(text, setCpf)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button 
        title="Login" 
        onPress={handleLoginPress} 
        disabled={!cpf || !password} 
      />
      <CreateAccountButton navigation={navigation} />
      <ResetPasswordButton navigation={navigation} />
      <Button
      title='Voltar'
      onPress={()=> router.push("/")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginPage;
