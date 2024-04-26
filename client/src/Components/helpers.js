import { Alert } from 'react-native';

export const handleResetPassword = (email) => {
    // Aqui você pode adicionar lógica para redefinir a senha do usuário com base no e-mail fornecido
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

// Formata a data
export const formatInputDate = (inputText, setDate) => {
  const formattedDate = inputText.replace(/[^0-9]/g, '')
    .replace(/^(\d{2})(\d)/, '$1/$2')
    .replace(/^(\d{2})\/(\d{2})(\d{2})/, '$1/$2/$3');
  setDate(formattedDate);
};
  
export const handleFormSubmit = () => {
  const requiredFields = ['cpf', 'name', 'address', 'email', 'password', 'confirmPassword'];
  const isFormInvalid = requiredFields.some(field => !eval(field) || eval(field) === '');
  const isCpfInvalid = cpf && cpf.length !== 11;
  const isEmailInvalid = email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordInvalid = password && (password.length < 6 || password !== confirmPassword);

  let errorMessage;
  if (isFormInvalid) {
    errorMessage = 'Por favor, preencha todos os campos.';
  } else if (isCpfInvalid) {
    errorMessage = 'Por favor, insira um CPF válido.';
  } else if (isEmailInvalid) {
    errorMessage = 'Por favor, insira um email válido.';
  } else if (isPasswordInvalid) {
    errorMessage = 'A senha deve ter pelo menos 6 caracteres e as senhas não coincidem.';
  }

  if (errorMessage) {
    Alert.alert('Erro', errorMessage);
    return;
  }

  Alert.alert('Formulário enviado', `Nome: ${name || ''}`);
};