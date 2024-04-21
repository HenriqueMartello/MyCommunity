import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { formatCpf } from '../Components/helpers';
import { ResetPasswordButton, CreateAccountButton } from '../Components/Buttons';
import { useRouter } from 'expo-router'
import axios from 'axios';
const handleLogin = (cpf, senha) => {
  
  if (!cpf || !senha) {
    Alert.alert('Erro', 'CPF e senha são obrigatórios.');
    console.log('CPF e senha são obrigatórios.')
    return;
  }

  cpfTratado = cpf.replace(/[^\d]/g, '');

  const userData = {
    CPF: cpfTratado,
    senha: senha
  };
  axios
  .post("http://192.168.1.7:5000/login", userData)
  .then(res => {
    if (res.data.status = "OK") {
      Alert.alert("Login realizado com sucesso!");
      router.push("/System");
    }
  });
};

const LoginPage = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setPassword] = useState('');
  const router = useRouter();

  const handleLoginPress = () => {
    if (!cpf || !senha) {
      Alert.alert('Error', 'CPF and Password are required.');
      return;
    }

    try {
      handleLogin(cpf, senha);
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
        maxLength={14}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button 
        title="Login" 
        onPress={handleLoginPress} 
        disabled={!cpf || !senha} 
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
