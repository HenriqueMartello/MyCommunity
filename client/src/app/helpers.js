import { Alert } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router'

const router = useRouter();

export const handleResetPassword = (email) => {
    // Aqui você pode adicionar lógica para redefinir a senha do usuário com base no e-mail fornecido
    // Por enquanto, vamos apenas exibir o e-mail em um alerta
    Alert.alert('Redefinir Senha', `Um link de redefinição de senha será enviado para: ${email}`);
  };
  
export const formatCpf = (inputText, setCpf) => {
  const formattedCpf = inputText.replace(/[^0-9]/g, '')
    .replace(/^(\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
  setCpf(formattedCpf);
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

export const handleLogin = (cpf, password) => {
  
  if (!cpf || !password) {
    Alert.alert('Erro', 'CPF e senha são obrigatórios.');
    console.log('CPF e senha são obrigatórios.')
    return;
  }

  cpfTratado = cpf.replace(/[^\d]/g, '');

  const userData = {
    CPF: cpfTratado,
    senha: password
  };
  axios
  .post("http://192.168.1.7:5000/login", userData)
  .then(res => {
    if (res.data.status = "OK") {
      Alert.alert("Login realizado com sucesso!");
      router.push("/System");
    }
  });

  /*
  
  try {
    if (cpf === '123.456.789-00' && password === 'senha123') {
      Alert.alert('Login', 'Login realizado com sucesso!');
    } else {
      Alert.alert('Erro', 'CPF ou senha incorretos. Por favor, tente novamente.');
    }
  } catch(error) {
    console.error('Error logging in:', error);
    Alert.alert('Erro', 'Falha ao fazer login.');
  }
  
  Alert.alert('Login', `CPF: ${cpf}\nSenha: ${password}`);
 */
};
