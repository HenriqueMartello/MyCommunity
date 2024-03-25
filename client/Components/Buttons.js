import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LoginButton = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
};

const CadastroButton = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Criar Cadastro');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Criar Cadastro</Text>
    </TouchableOpacity>
  );
};

const SistemaButton = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Sistema');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Sistema</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


const ResetPasswordButton = ({ navigation }) => {
    const handlePress = () => {
      navigation.navigate('Redefinir Senha');
    };
  
    return (
      <TouchableOpacity style={ResetPasswordButtonStyles.button} onPress={handlePress}>
        <Text style={ResetPasswordButtonStyles.buttonText}>Redefinir a Senha</Text>
      </TouchableOpacity>
    );
  };
  
const ResetPasswordButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

const HomePageButton = ({ navigation }) => {
    const handlePress = () => {
      navigation.navigate('My Community');
    };
  
    return (
      <TouchableOpacity style={HomePageButtonStyles.button} onPress={handlePress}>
        <Text style={HomePageButtonStyles.buttonText}>Página Inicial</Text>
      </TouchableOpacity>
    );
  };
  
const HomePageButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
    },
        buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

const NovaSolicitacaoButton = ({ navigation }) => {
    const handlePress = () => {
      navigation.navigate('Nova Solicitacao');
    };
  
    return (
      <TouchableOpacity style={NovaSolicitacaoButtonStyles.button} onPress={handlePress}>
        <Text style={NovaSolicitacaoButtonStyles.buttonText}>Nova Solicitação</Text>
      </TouchableOpacity>
    );
  };
  
const NovaSolicitacaoButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
    },
        buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

const DevelopmentButton = ({ navigation }) => {
    const handlePress = () => {
      navigation.navigate('Development');
    };
  
    return (
      <TouchableOpacity style={DevelopmentButtonStyles.button} onPress={handlePress}>
        <Text style={DevelopmentButtonStyles.buttonText}>Development</Text>
      </TouchableOpacity>
    );
  };
  
const DevelopmentButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
    },
        buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export { LoginButton, CadastroButton, SistemaButton, ResetPasswordButton, HomePageButton, NovaSolicitacaoButton, DevelopmentButton };
