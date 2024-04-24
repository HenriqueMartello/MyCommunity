import { useEffect, useState } from "react";
import { useRouter } from 'expo-router';
import { LoginPage } from "./LoginPage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SystemPage from "./System";

export default function Home() {

  const router = useRouter();
  const [usuarioLogado, setUsuarioLogado] = useState(false);

  async function obterInformacoes() {
    const data = await AsyncStorage.getItem("usuarioLogado");
    setUsuarioLogado(data);
  } 
  
  useEffect(() => {
    obterInformacoes();
  }, [usuarioLogado])

  return (
    <>
      {usuarioLogado ? <SystemPage /> : <LoginPage />}
    </>

  )

  /*
  if (usuarioLogado) {
    router.push("/System");
  } 

  return <LoginPage />;
  */
}
