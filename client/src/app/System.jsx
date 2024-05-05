import React, { useState } from "react";
import axios from "axios";

import { StyleSheet, Text, Pressable } from "react-native";
import { Header } from "../app/pages/components/Header";

import { useRouter } from "expo-router";
import { backendUrl } from "../Components/GlobalVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { ContentWrapper } from "./pages/components/ContentWrapper";
import { ShadowStyle } from "./pages/components/ShadowStyle";

const router = useRouter();

const SystemPage = ({ navigation }) => {
  const [profile, setProfile] = useState();

  async function obterUsuario() {
    // Token recebido da solicitação de login, que foi salvo localmente
    const token = await AsyncStorage.getItem("token");
    axios.post(`${backendUrl}usuarioInfo`, { token: token }).then((res) => {
      console.log(res.data);
      setProfile(res.data.data);
    });
  }

  useEffect(() => {
    obterUsuario();
  }, []);

  const Item = ({ label, path }) => {
    return (
      <ShadowStyle>
        <Pressable
          style={styles.optionWrapper}
          onPress={() => router.push(path)}
        >
          <Text style={styles.optionLabel}>{label}</Text>
        </Pressable>
      </ShadowStyle>
    );
  };

  return (
    <ContentWrapper
      style={{
        justifyContent: "top",
        padding: 40,
        paddingTop: 80,
        gap: 25,
        flex: 1,
      }}
    >
      <Header name={profile?.nome} />
      <Item label="NOVA SOLICITAÇÃO" path="/RequestPage" />
      <Item label="MINHAS SOLICITAÇÕES" path="/MyRequests" />
      <Item label="APRENDA MAIS" path="/LearnMore" />
      <Item label="OUTRAS INFORMAÇÕES" path="/OtherInformations" />
    </ContentWrapper>
  );
};

const styles = StyleSheet.create({
  optionWrapper: {
    backgroundColor: "#F4FFFD",
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
    fontSize: 22,
    textAlign: "center",
  },
});
export default SystemPage;
