import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const FormPage = ({ navigation }) => {
  // Define os estados para armazenar os valores dos campos do formulário
  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = () => {
    // To Do
    Alert.alert('Formulário enviado', `Nome: ${name}`);
  };
  // Função para formatar o CPF enquanto o usuário digita
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
      <Text style={{ fontSize: 20, marginBottom: 20, textAlign: 'center'}}>Cadastrar Novo Usuário</Text>
      {/* Campo de entrada para o CPF */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="CPF"
        value={cpf}
        onChangeText={formatCpf} // Utiliza a função de formatação enquanto o usuário digita
        keyboardType="numeric" // Define o teclado como numérico para garantir que apenas números sejam inseridos
      />
      {/* Campo de entrada para o nome */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Nome"
        value={name}
        onChangeText={text => setName(text)}
        autoCapitalize='words'
      />
      {/* Campo de entrada para o endereço */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Endereço"
        value={address}
        onChangeText={text => setAddress(text)}
        autoCapitalize='words'
      />
      {/* Campo de entrada para o email */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      {/* Campo de entrada para a senha */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      {/* Campo de entrada para confirmar a senha */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Confirmar Senha"
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        secureTextEntry={true}
      />
      {/* Botão de envio do formulário */}
      <Button title="Finalizar Cadastro" onPress={handleSubmit} />
      <Button
        title="Voltar à Tela Inicial"
        onPress={() => navigation.goBack()}
      />
      <Button
          title="Já Possui Conta? Faça o Login"
          onPress={() => navigation.navigate('Login')}
      ></Button>
    </View>
  );
};

export default FormPage;