import React, { useState, useEffect } from "react";
import { Alert, View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { backendUrl } from "../Components/GlobalVariables";
import { Button } from "./pages/components/Button";
import { Input } from "./pages/components/Input";
import { Header } from "./pages/components/Header";

const UserDetails = () => {
  const router = useRouter();

  const [profile, setProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const obterUsuario = async () => {
      const token = await AsyncStorage.getItem("token");
      setIsLoading(true);
      axios
        .post(`${backendUrl}usuarioInfo`, { token: token })
        .then((res) => {
          setIsLoading(false);
          const userData = res.data.data;
          setProfile(userData);
          setEditedProfile(userData);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error("Erro ao obter informações do usuário:", error);
          setError("Erro ao obter informações do usuário.");
        });
    };
    obterUsuario();
  }, []);

  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handleSavePress = () => {
    // Função para enviar dados editados ao backend
    enviarDadosEditados(editedProfile);
  };

  const enviarDadosEditados = async (dados) => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.put(`${backendUrl}atualizarUsuario`, {
        token: token,
        nome: dados.nome,
        endereco: dados.endereco,
        telefone: dados.numeroTelefonico,
      });

      if (response.data.status === "OK") {
        setProfile(response.data.data);
        setIsEditing(false);
        setError("");
        Alert.alert("Dados Atualizados com sucesso!");
      } else {
        setError("Erro ao atualizar informações do usuário.");
      }
    } catch (error) {
      console.error("Erro ao enviar dados editados:", error);
      setError("Erro ao enviar dados editados.");
    }
  };

  const handlePhoneNumberChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, "");
    setEditedProfile({ ...editedProfile, numeroTelefonico: numericText });
  };

  const Info = ({ label, value }) => {
    return (
      <View>
        <Text
          style={{
            fontSize: 16,
            color: "#636262",
          }}
        >
          {label}
        </Text>
        {isLoading ? (
          <View
            style={{
              width: "100%",
              height: 25,
              borderRadius: 5,
              backgroundColor: "#DFDBDB",
            }}
          />
        ) : (
          <Text style={{ fontWeight: 500, fontSize: 18, color: "#397688" }}>
            {value}
          </Text>
        )}
      </View>
    );
  };

  return (
    <View style={styles.contentWrapper}>
      <Header title="PERFIL" />

      <View
        style={{
          flex: 1,
          paddingTop: 40,
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        {isEditing ? (
          <>
            <View style={{ gap: 15 }}>
              <Input
                label="Nome"
                secureTextEntry={false}
                style={styles.input}
                value={editedProfile.nome}
                onChangeText={(text) =>
                  setEditedProfile({ ...editedProfile, nome: text })
                }
                placeholder="Nome"
              />
              <Input
                label="Endereço"
                secureTextEntry={false}
                style={styles.input}
                value={editedProfile.endereco}
                onChangeText={(text) =>
                  setEditedProfile({ ...editedProfile, endereco: text })
                }
                placeholder="Endereço"
              />
              <Input
                label="Número"
                style={styles.input}
                secureTextEntry={false}
                value={String(editedProfile.numeroTelefonico)}
                onChangeText={handlePhoneNumberChange}
                placeholder="Número telefônico"
                keyboardType="numeric"
                maxLength={15} // Ajuste o valor conforme necessário
              />
            </View>
            <Button label="Salvar" onPress={handleSavePress} />
          </>
        ) : (
          <>
            <View style={{ gap: 15 }}>
              <Info label="Nome" value={profile.nome} />
              <Info label="Email" value={profile.email} />

              <Info label="Endereço" value={profile.endereco} />
              <Info
                label="Número telefônico"
                value={profile.numeroTelefonico}
              />
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Button label="Alterar Dados" onPress={handleEditPress} />
              <Button
                label="Resetar Senha"
                color="#CA0909"
                onPress={() => router.push("/ResetPasswordPage")}
              />
            </View>
          </>
        )}
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  itemWrapper: {
    backgroundColor: "#F4FFFD",
    width: "100%",
    alignItems: "center",
    borderRadius: 15,
    borderColor: "#397688",
    borderWidth: 0.3,
    padding: 10,
    marginBottom: 15,
  },
  label: {
    color: "#397688",
    fontWeight: "bold",
    fontSize: 18,
  },
  value: {
    color: "#397688",
    fontSize: 16,
    marginTop: 5,
  },
  input: {
    backgroundColor: "#F4FFFD",
    width: "100%",
    borderRadius: 15,
    borderColor: "#397688",
    borderWidth: 0.3,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    color: "#397688",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});

export default UserDetails;
