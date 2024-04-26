import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { handleFormSubmit, formatCpf } from "../Components/helpers";
import { HomePageButton, LoginButton } from "../Components/Buttons";
import { useRouter } from "expo-router";

const FormPage = ({ navigation }) => {
  const router = useRouter();

  // Define os estados para armazenar os valores dos campos do formulário
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20, textAlign: "center" }}>
        Cadastrar Novo Usuário
      </Text>
      {/* Campo de entrada para o CPF */}
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => formatCpf(text, setCpf)}
        keyboardType="numeric"
      />
      {/* Campo de entrada para o nome */}
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
        autoCapitalize="words"
      />
      {/* Campo de entrada para o endereço */}
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Endereço"
        value={address}
        onChangeText={(text) => setAddress(text)}
        autoCapitalize="words"
      />
      {/* Campo de entrada para o email */}
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      {/* Campo de entrada para a senha */}
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      {/* Campo de entrada para confirmar a senha */}
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Confirmar Senha"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry={true}
      />
      {/* Botão de envio do formulário */}
      <Button title="Finalizar Cadastro" onPress={handleFormSubmit} />
      <LoginButton navigation={navigation} />
      <Button title="Voltar" onPress={() => router.push("/")} />
    </View>
  );
};

export default FormPage;
