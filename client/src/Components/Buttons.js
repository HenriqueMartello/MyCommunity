import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LoginButton = ({ navigation }) => {
  const handlePress = () => navigation.navigate('LoginPage');

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
};

const CreateAccountButton = ({ navigation }) => {
  const handlePress = () => navigation.navigate('FormPage');

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Create Account</Text>
    </TouchableOpacity>
  );
};

const SystemButton = ({ navigation }) => {
  const handleNavigation = () => navigation.navigate('System');

  return (
    <TouchableOpacity style={styles.button} onPress={handleNavigation}>
      <Text style={styles.buttonText}>System</Text>
    </TouchableOpacity>
  );
};

const ResetPasswordButton = ({ navigation }) => {
  const handleNavigateToResetPassword = () => navigation.navigate('ResetPasswordPage');

  return (
    <TouchableOpacity style={styles.button} onPress={handleNavigateToResetPassword}>
      <Text style={styles.buttonText}>Reset Password</Text>
    </TouchableOpacity>
  );
};

/*
const HomePageButton = ({ navigation }) => {
  const handleNavigation = () => navigation.navigate('HomePage');

  return (
    <TouchableOpacity style={styles.button} onPress={handleNavigation}>
      <Text style={styles.buttonText}>Home Page</Text>
    </TouchableOpacity>
  );
};
*/

const NewRequestButton = ({ navigation }) => {
  const handleNavigation = () => navigation.navigate('RequestPage');

  return (
    <TouchableOpacity style={styles.button} onPress={handleNavigation}>
      <Text style={styles.buttonText}>Nova Solicitação</Text>
    </TouchableOpacity>
  );
};

const LearnMoreButton = ({ navigation }) => {
  const handleNavigation = () => navigation.navigate('LearnMore');

  return (
    <TouchableOpacity style={styles.button} onPress={handleNavigation}>
      <Text style={styles.buttonText}>Aprenda Mais</Text>
    </TouchableOpacity>
  );
};

const DevelopmentButton = ({ navigation }) => {
  const handleNavigation = () => navigation.navigate('Development');

  return (
    <TouchableOpacity style={styles.button} onPress={handleNavigation}>
      <Text style={styles.buttonText}>Development</Text>
    </TouchableOpacity>
  );
};

const MyRequestsButton = ({ navigation }) => {
  const handleNavigation = () => navigation.navigate('MyRequests');

  return (
    <TouchableOpacity style={styles.button} onPress={handleNavigation}>
      <Text style={styles.buttonText}>My Requests</Text>
    </TouchableOpacity>
  )
}

const OtherInformationButton = ({ navigation }) => {
  const handleNavigation = () => navigation.navigate('OtherInformations');
  
  return (
    <TouchableOpacity style={styles.button} onPress={handleNavigation}>
      <Text style={styles.buttonText}>Other Information</Text>
    </TouchableOpacity>
  )
}

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

export { LoginButton, CreateAccountButton, SystemButton, ResetPasswordButton, NewRequestButton, DevelopmentButton, LearnMoreButton, MyRequestsButton, OtherInformationButton };
