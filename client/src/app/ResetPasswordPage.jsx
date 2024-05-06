import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { handleResetPassword } from '../Components/helpers';
import { HomePageButton } from '../Components/Buttons';
import { useRouter } from 'expo-router'

const router = useRouter();
const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Redefinir Senha</Text>
      {/* Campo de entrada para o e-mail */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      {/* Botão para redefinir a senha */}
      <Button title="Reset Password" onPress={() => handleResetPassword(email)} />
      <Button
      title='Voltar'
      onPress={()=> router.push("/")}
      />
    </View>
  );
};

export default ResetPasswordPage;
