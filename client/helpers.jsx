export const handleResetPassword = (email) => {
    // Aqui você pode adicionar lógica para redefinir a senha do usuário com base no e-mail fornecido
    // Por enquanto, vamos apenas exibir o e-mail em um alerta
    Alert.alert('Redefinir Senha', `Um link de redefinição de senha será enviado para: ${email}`);
  };
  
export const formatCpf = (text, setCpf) => {
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
};
  
// Função para lidar com o envio do formulário
export const handleSubmit = () => {
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

export const handleLogin = () => {
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