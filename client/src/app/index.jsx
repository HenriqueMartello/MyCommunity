import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router'

// Components
import { LoginButton, CreateAccountButton, DevelopmentButton } from '../Components/Buttons';

export default function Home() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      {/* Versão Henrique */}
      {/* 
      <Button
      title='Ir para Tela de Cadastro de Usuario'
      onPress={()=> router.push("/Cadastro")}
      />
      <Button
      title='Ir para Tela de Alteração de Cadastros de Usuários'
      color='purple'
      onPress={()=> router.push("/ConsultaUsuarios")}
      />
      */}

    <LoginButton navigation={navigation} />
    <CreateAccountButton navigation={navigation} />
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