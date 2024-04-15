import React, { useState } from "react";
import { View, Text, Image, Alert, Pressable, StyleSheet } from "react-native";
import { formatCpf, handleLogin } from "./helpers";
import logo from "../assets/logo.svg";
import image from "../assets/image.png";

import { Input } from "./pages/components/Input";
import { Button } from "./pages/components/Button";
import { useRouter } from "expo-router";
import { ContentWrapper } from "./pages/components/ContentWrapper";

export const LoginPage = () => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLoginPress = () => {
    if (!cpf || !password) {
      Alert.alert("Error", "CPF and Password are required.");
      return;
    }

    try {
      handleLogin(cpf, password);
    } catch (error) {
      console.error("Error logging in:", error);
      Alert.alert("Error", "Failed to log in.");
    }
  };

  return (
    <ContentWrapper style={{ justifyContent: "end" }}>
      <Image source={logo} />

      <View style={styles.content}>
        <Input
          placeholder="CPF"
          value={cpf}
          onChangeText={(text) => formatCpf(text, setCpf)}
          keyboardType="numeric"
          secureTextEntry={false}
        />
        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Pressable
          onPress={() => router.push("/ResetPasswordPage")}
          style={{ width: "100%" }}
        >
          <Text style={[styles.text, { textAlign: "auto" }]}>
            Esqueci minha senha
          </Text>
        </Pressable>

        <Button
          label="Entrar"
          width="100%"
          onPress={handleLoginPress}
          disabled={!cpf || !password}
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text style={styles.text}>Não tem cadastro? </Text>
          <Pressable onPress={() => router.push("/RegisterPage")}>
            <Text style={[styles.text, { opacity: 1 }]}>Cadastre-se</Text>
          </Pressable>
        </View>
      </View>

      <Image source={image} style={{ zIndex: 1, marginBottom: -2 }} />
      <View style={styles.bottomView} />
    </ContentWrapper>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#397688",
    //fontWeight: 500,
    opacity: 0.6,
  },
  content: {
    width: "100%",
    padding: "2.3rem",
    alignItems: "center",
    //gap: "10px",
  },
  bottomView: {
    backgroundColor: "#377A8A",
    height: "10rem",
    width: "100%",
  },
});
