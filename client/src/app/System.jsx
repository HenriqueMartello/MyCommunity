import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text, Pressable } from "react-native";
import { MainPageHeader } from "./pages/components/MainPageHeader";
import { useRouter } from "expo-router";
import { backendUrl } from "../Components/GlobalVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ContentWrapper } from "./pages/components/ContentWrapper";
import { ShadowStyle } from "./pages/components/ShadowStyle";

const SystemPage = () => {
  const [profile, setProfile] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const obterUsuario = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const res = await axios.post(`${backendUrl}usuarioInfo`, { token });
        const userData = res.data.data;
        setProfile(userData);
      } catch (error) {
        console.error("Erro ao obter informações do usuário:", error);
      }
    };
    obterUsuario();
  }, []);

  const Item = ({ label, path }) => (
    <ShadowStyle>
      <Pressable style={styles.optionWrapper} onPress={() => router.push(path)}>
        <Text style={styles.optionLabel}>{label}</Text>
      </Pressable>
    </ShadowStyle>
  );

  return (
    <ContentWrapper style={styles.contentWrapper}>
      <MainPageHeader name={profile?.nome} />
      <Item label="NOVA SOLICITAÇÃO" path="/RequestPage" />
      <Item label="MINHAS SOLICITAÇÕES" path="/MyRequests" />
      <Item label="APRENDA MAIS" path="/LearnMore" />
      <Item label="OUTRAS INFORMAÇÕES" path="/OtherInformations" />
    </ContentWrapper>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    justifyContent: "top",
    padding: 40,
    paddingTop: 80,
    gap: 25,
    flex: 1,
  },
  optionWrapper: {
    backgroundColor: "#F8F8F8",
    width: "100%",
    alignItems: "center",
    borderRadius: 15,
    borderColor: "#397688",
    borderWidth: 0.3,
  },
  optionLabel: {
    padding: 18,
    color: "#397688",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default SystemPage;
