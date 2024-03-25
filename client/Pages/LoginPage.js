import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { formatCpf, handleLogin } from './helpers';
import { ResetPasswordButton, CadastroButton } from '../Components/Buttons';

const LoginPage = ( { navigation }) => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Login</Text>
      {/* Campo de entrada para o CPF */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="CPF"
        value={cpf}
        onChangeText={text => formatCpf(text, setCpf)}
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
      <CadastroButton navigation={navigation} />
      {/* Link para redefinir a senha */}
      <ResetPasswordButton navigation={navigation} />
      {/* Botão de login com Gmail */}
      <Button title="Entrar com Gmail" onPress={() => {}} />
    </View>
  );
};

export default LoginPage;
