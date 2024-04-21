import { Alert, useState } from 'react-native';;
import { useRouter } from 'expo-router'

const router = useRouter();

export const handleResetPassword = (email) => {
    // Adicionar lógica para redefinir a senha do usuário com base no e-mail fornecido
    // Por enquanto, vamos apenas exibir o e-mail em um alerta
    Alert.alert('Redefinir Senha', `Um link de redefinição de senha será enviado para: ${email}`);
  };
  

// Formata o CPF
export const formatCpf = (inputText, setCpf) => {
  const formattedCpf = inputText.replace(/[^0-9]/g, '')
    .replace(/^(\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
  setCpf(formattedCpf);
};

export const formatInputDate = (inputText, setDate) => {
  const formattedDate = inputText.replace(/[^0-9]/g, '')
    .replace(/^(\d{2})(\d)/, '$1/$2')
    .replace(/^(\d{2})\/(\d{2})(\d{2})/, '$1/$2/$3');
  setDate(formattedDate);
};