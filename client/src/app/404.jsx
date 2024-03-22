import { Pressable, Text } from 'react-native'
import { Link } from 'expo-router'

export default function TelaCaminhoErro() {
  return (
    <>
        <h1>Pagina não encontrada</h1>
        
        <Link href="/" asChild>
        <Pressable>
            <Text>Voltar para o Inicio</Text>
        </Pressable>
        </Link>
    </>
  )
}