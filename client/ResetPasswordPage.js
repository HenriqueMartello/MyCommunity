import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Aqui você pode adicionar lógica para redefinir a senha do usuário com base no e-mail fornecido
    // Por enquanto, vamos apenas exibir o e-mail em um alerta
    Alert.alert('Redefinir Senha', `Um link de redefinição de senha será enviado para: ${email}`);
  };

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
      <Button title="Redefinir Senha" onPress={handleResetPassword} />
    </View>
  );
};

export default ResetPasswordPage;
