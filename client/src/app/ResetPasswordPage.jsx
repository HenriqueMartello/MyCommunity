import React, { useState } from "react";
import { View } from "react-native";
import { handleResetPassword } from "../Components/helpers";
import { useRouter } from "expo-router";
import { Header } from "./pages/components/Header";
import { Input } from "./pages/components/Input";
import { Button } from "./pages/components/Button";

const ResetPasswordPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <Header title="REDEFINIR SENHA" />

      <View style={{ paddingHorizontal: 20, paddingTop: 55, gap: 50 }}>
        {/* Campo de entrada para o e-mail */}

        <Input
          label="E-mail"
          placeholder="Insira seu e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />

        {/* Botão para redefinir a senha */}
        <Button
          size="sm"
          label="Redefinir senha"
          onPress={() => handleResetPassword(email)}
        />
      </View>
    </View>
  );
};

export default ResetPasswordPage;
