import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import logo from "../assets/logo.png";

import { useRouter } from "expo-router";
import { ContentWrapper } from "./pages/components/ContentWrapper";

export const ProfileOptions = () => {
  const router = useRouter();

  return (
    <ContentWrapper
      style={{
        justifyContent: "top",
        padding: 40,
        gap: 25,
      }}
    >
      <Image
        source={logo}
        style={{
          width: 80,
          height: 80,
          marginBottom: 10,
        }}
      />

      <View style={styles.headerWrapper}>
        <Text style={styles.text}>Olá, Usuário!</Text>
        <Pressable style={styles.presseable}>
          <Text style={styles.logOutLabel}>Sair</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.optionWrapper}
        onPress={() => router.push("/RequestPage")}
      >
        <Text style={styles.optionLabel}>NOVA SOLICITAÇÃO</Text>
      </Pressable>

      <Pressable style={styles.optionWrapper}>
        <Text style={styles.optionLabel}>MINHAS SOLICITAÇÕES</Text>
      </Pressable>

      <Pressable style={styles.optionWrapper}>
        <Text style={styles.optionLabel}>APRENDA MAIS</Text>
      </Pressable>

      <Pressable style={styles.optionWrapper}>
        <Text style={styles.optionLabel}>OUTRAS INFORMAÇÕES</Text>
      </Pressable>
    </ContentWrapper>
  );
};

const styles = StyleSheet.create({
  optionWrapper: {
    backgroundColor: "#397688",
    width: "100%",
    alignItems: "center",
    borderRadius: 15,
  },
  optionLabel: {
    padding: 25,
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  text: {
    color: "#397688",
    fontSize: 19,
    fontWeight: "700",
  },
  headerWrapper: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  presseable: {
    backgroundColor: "#397688",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    justifyContent: "center",
  },
  logOutLabel: {
    alignSelf: "center",
    color: "white",
    lineHeight: 15,
    fontSize: 15,
    fontWeight: "600",
  },
});
