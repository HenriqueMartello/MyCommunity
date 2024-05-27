import React, { useState, useEffect } from 'react';
import { Alert, View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { backendUrl } from "../Components/GlobalVariables";

const UserDetails = () => {
  const router = useRouter();
  
  const [profile, setProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const obterUsuario = async () => {
      const token = await AsyncStorage.getItem("token");
      axios
        .post(`${backendUrl}usuarioInfo`, { token: token })
        .then((res) => {
          const userData = res.data.data;
          setProfile(userData);
          setEditedProfile(userData);
        })
        .catch((error) => {
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
        telefone: dados.numeroTelefonico
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
    const numericText = text.replace(/[^0-9]/g, '');
    setEditedProfile({ ...editedProfile, numeroTelefonico: numericText });
  };

  return (
    <View style={styles.contentWrapper}>
      {isEditing ? (
        <>
          <TextInput
            style={styles.input}
            value={editedProfile.nome}
            onChangeText={(text) => setEditedProfile({ ...editedProfile, nome: text })}
            placeholder="Nome"
          />
          <TextInput
            style={styles.input}
            value={editedProfile.endereco}
            onChangeText={(text) => setEditedProfile({ ...editedProfile, endereco: text })}
            placeholder="Endereço"
          />
          <TextInput
            style={styles.input}
            value={String(editedProfile.numeroTelefonico)}
            onChangeText={handlePhoneNumberChange}
            placeholder="Número Telefônico"
            keyboardType="numeric"
            maxLength={15} // Ajuste o valor conforme necessário
          />
          <Button title="Salvar" onPress={handleSavePress} />
        </>
      ) : (
        <>
          <Text style={styles.header}>{profile.nome}</Text>
          <View style={styles.itemWrapper}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{profile.email}</Text>
          </View>
          <View style={styles.itemWrapper}>
            <Text style={styles.label}>Endereço:</Text>
            <Text style={styles.value}>{profile.endereco}</Text>
          </View>
          <View style={styles.itemWrapper}>
            <Text style={styles.label}>Número Telefônico:</Text>
            <Text style={styles.value}>{profile.numeroTelefonico}</Text>
          </View>
          <Button title="Alterar Dados" onPress={handleEditPress} />
          <Button title="Resetar Senha" color="red" onPress={() => router.push("/ResetPasswordPage")} />
        </>
      )}
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Voltar" onPress={() => router.push("/System")} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    justifyContent: "flex-start",
    padding: 40,
    paddingTop: 80,
    gap: 25,
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