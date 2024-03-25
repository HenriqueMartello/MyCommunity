import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
<<<<<<< Updated upstream:client/Pages/FormPage.js
import { handleSubmit, formatCpf  } from './helpers';
import { HomePageButton, LoginButton } from '../Components/Buttons';
=======
import { formatCpf, handleSubmit } from './helpers';
>>>>>>> Stashed changes:client/FormPage.jsx

const FormPage = ({ navigation }) => {
  // Define os estados para armazenar os valores dos campos do formulário
  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

<<<<<<< Updated upstream:client/Pages/FormPage.js
=======
  const handleSubmit = async () => {
    try {
      const { data, error } = await supabase
        .from('usuarios')
        .insert([
          {
            cpf,
            name,
            address,
            password,
            email,
          },
        ]);

      if (error) {
        console.error('Erro ao inserir dados:', error.message);
      } else {
        console.log('Dados inseridos com sucesso:', data);
        // Faça qualquer outra coisa que você queira após o envio bem-sucedido
      }
    } catch (error) {
      console.error('Erro ao inserir dados:', error.message);
    }
  };

>>>>>>> Stashed changes:client/FormPage.jsx
  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20, textAlign: 'center'}}>Cadastrar Novo Usuário</Text>
      {/* Campo de entrada para o CPF */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="CPF"
        value={cpf}
        onChangeText={text => formatCpf(text, setCpf)} // Utiliza a função de formatação enquanto o usuário digita
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
      <HomePageButton navigation={navigation} />
      <LoginButton navigation={navigation} />
    </View>
  );
};

export default FormPage;