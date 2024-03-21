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
  