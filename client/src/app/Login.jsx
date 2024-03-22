import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router'

export default function Login() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Button
      title='Ir para tela inicial'
      onPress={()=> router.push("/")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
