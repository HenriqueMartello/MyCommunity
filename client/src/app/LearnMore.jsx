import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, Button } from "react-native";
import { Header } from "../app/pages/components/Header";
import { useRouter } from "expo-router";
import { backendUrl } from "../Components/GlobalVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ContentWrapper } from "./pages/components/ContentWrapper";

const LearnMore = ({ navigation }) => {
  const router = useRouter();
  const [profile, setProfile] = useState(null);

  const obterUsuario = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) return;
      const response = await axios.post(`${backendUrl}usuarioInfo`, { token });
      const userData = response.data.data;
      setProfile(userData);
    } catch (error) {
      console.error("Erro ao obter informações do usuário:", error);
    }
  };

  useEffect(() => {
    obterUsuario();
  }, []);

  if (!profile) {
    return (
      <ContentWrapper>
        <Text>Carregando...</Text>
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper>
      <View>
        <Header name={profile?.nome} />
        <Text>Aprenda Mais</Text>
      </View>
      <View>
        <Button label="Voltar" width="30%" onPress={() => router.back()} />
      </View>
    </ContentWrapper>
  );
};

export default LearnMore;