import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router'

// Components
import { LoginButton, CreateAccountButton, DevelopmentButton } from '../Components/Buttons';

export default function Home() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
    <LoginButton navigation={navigation} />
    <Button
      title='Ir para Tela de Cadastro'
      color='purple'
      onPress={()=> router.push("/RegisterPage")}
      />
    <DevelopmentButton navigation={navigation} />

      <StatusBar style="auto" />
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  }
});