import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const LoginPage = ( { navigation }) => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (cpf === '123.456.789-00' && password === 'senha123') {
      // Comunicação com DB
      // Se o CPF e a senha estiverem corretos, exibe uma mensagem de sucesso
      Alert.alert('Login', 'Login realizado com sucesso!');
    } else {
      // Se o CPF ou a senha estiverem incorretos, exibe uma mensagem de erro
      Alert.alert('Erro', 'CPF ou senha incorretos. Por favor, tente novamente.');
    }
    // Por enquanto, vamos apenas exibir os valores do CPF e da senha em um alerta
    //Alert.alert('Login', `CPF: ${cpf}\nSenha: ${password}`);
  };

  const formatCpf = (text) => {
    // Remove todos os caracteres não numéricos
    let formattedText = text.replace(/\D/g, '');
    // Adiciona pontos e traço conforme o formato do CPF
    if (formattedText.length > 3) {
      formattedText = formattedText.replace(/^(\d{3})(\d)/, '$1.$2');
    }
    if (formattedText.length > 6) {
      formattedText = formattedText.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    }
    if (formattedText.length > 9) {
      formattedText = formattedText.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    }
    // Atualiza o estado do CPF formatado
    setCpf(formattedText);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Login</Text>
      {/* Campo de entrada para o CPF */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="CPF"
        value={cpf}
        onChangeText={formatCpf}
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
