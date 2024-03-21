import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';

const LoginPage = ( { navigation }) => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar lógica para autenticar o usuário com o CPF e a senha
    // Por enquanto, vamos apenas exibir os valores do CPF e da senha em um alerta
    Alert.alert('Login', `CPF: ${cpf}\nSenha: ${password}`);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Login</Text>
      {/* Campo de entrada para o CPF */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="CPF"
        value={cpf}
        onChangeText={text => setCpf(text)}
        keyboardType="numeric"
      />
      {/* Campo de entrada para a senha */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      {/* Botão de login */}
      <Button title="Entrar" onPress={handleLogin} />
      {/* Botão para se cadastrar */}
      <Button 
          title="Deseja se Cadastrar?"
          onPress={() => navigation.navigate('Form')}
      ></Button>
      {/* Link para redefinir a senha */}
      <Button 
          title="Esqueci Minha Senha"
          onPress={() => navigation.navigate('Reset')}
      ></Button>
      {/* Botão de login com Gmail */}
      <Button title="Entrar com Gmail" onPress={() => {}} />
    </View>
  );
};

export default LoginPage;
