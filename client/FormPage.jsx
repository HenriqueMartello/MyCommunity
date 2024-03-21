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
    // Verifica se todos os campos foram preenchidos
  if (!cpf || !name || !address || !email || !password || !confirmPassword) {
    Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    return;
  }

  // Verifica se o CPF é válido (apenas verifica se tem 11 dígitos)
  if (cpf.length !== 11) {
    Alert.alert('Erro', 'Por favor, insira um CPF válido.');
    return;
  }

  // Verifica se o email é válido (apenas verifica se tem o formato de email)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Alert.alert('Erro', 'Por favor, insira um email válido.');
    return;
  }

  // Verifica se a senha tem pelo menos 6 caracteres
  if (password.length < 6) {
    Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
    return;
  }

  // Verifica se a senha e a confirmação de senha são iguais
  if (password !== confirmPassword) {
    Alert.alert('Erro', 'As senhas não coincidem.');
    return;
  }

  // Se todos os campos forem válidos, pode prosseguir com o envio do formulário
  // Aqui você pode adicionar lógica para enviar os dados do formulário para o backend
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