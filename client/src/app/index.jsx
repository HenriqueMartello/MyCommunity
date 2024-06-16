import { useEffect, useState } from "react";
import { LoginPage } from "./LoginPage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SystemPage from "./System";

export default function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(false);

  async function obterInformacoes() {
    const data = await AsyncStorage.getItem("usuarioLogado");
    setUsuarioLogado(data === 'true'); // Certifique-se de que 'data' é uma string 'true' ou 'false'
  }

  useEffect(() => {
    obterInformacoes();
  }, []);

  return (
    <>
      {usuarioLogado ? <SystemPage /> : <LoginPage />}
    </>
  )
}
