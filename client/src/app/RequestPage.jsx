import React, { useEffect, useState } from "react";
import axios from "axios";
import { Alert, View, StyleSheet, Text, ScrollView } from "react-native";
import MediaPicker from "../Components/MediaPicker";
import DropdownMenu from "../Components/DropdownMenu";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { backendUrl } from "../Components/GlobalVariables";
import { Input } from "./pages/components/Input";
import { Button } from "./pages/components/Button";
import { Header } from "./pages/components/Header";

const RequestPage = () => {
  const router = useRouter();

  const [selectedItem, setSelectedItem] = useState("");
  const [endereco, setEndereco] = useState("");
  const [CEP, setCEP] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [UF, setUF] = useState("");
  const [descricao, setDescricao] = useState("");
  const [mediaUri, setMediaUri] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    obterToken();
  }, []);

  async function obterToken() {
    // Token recebido da solicitação de login, que foi salvo localmente
    const userToken = await AsyncStorage.getItem("token");
    setToken(userToken);
  }

  const handleSubmit = () => {
    const solicData = {
      token,
      tipoServico: selectedItem,
      cep: CEP,
      endereco,
      numero,
      bairro,
      cidade,
      UF,
      descricao,
    };
    
    axios.post(`${backendUrl}criarSolicitacao`, solicData).then((res) => {
      switch (res.data.status) {
        case "TokenInvalido":
          Alert.alert(
            "Erro na validação da sua autenticação! Deslogue do aplicativo e realize o login novamente!"
          );
          break;
        case "SolicitacaoRegistrada":
          Alert.alert("Solicitação registrada com sucesso!");
          router.back();
          break;
        default:
          Alert.alert("Erro no registro da solicitação!");
      }
    });
  };

  const handleItemSelect = (item) => {
    if (!item) return;
    setSelectedItem(item);
  };

  const handleenderecoSubmit = (newendereco) => {
    if (!newendereco) return;
    setEndereco(newendereco);
  };

  const handledescricaoChange = (text) => {
    if (!text) return;
    setDescricao(text);
  };

  const handleMediaSelect = (uri) => {
    if (!uri) return;
    setMediaUri(uri);
  };

  return (
    <View style={styles.container}>
      <Header title="NOVA SOLICITAÇÃO" />

      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
        }}
      >
        <ScrollView
          style={{
            width: "100%",
          }}
        >
          <View
            style={{
              gap: 10,
              paddingHorizontal: 20,
              paddingTop: 25,
            }}
          >
            <Text style={styles.label}>Selecione um item:</Text>
            <DropdownMenu onSelect={handleItemSelect} value={selectedItem} />
            <Text style={styles.label}>Endereço:</Text>

            <Input
              onChangeText={(text) => setEndereco(text)}
              value={endereco}
              placeholder="Insira seu endereço"
              secureTextEntry={false}
            />
            <Input
              onChangeText={(text) => setCEP(text)}
              value={CEP}
              keyboardType="numeric"
              placeholder="Insira seu CEP"
              secureTextEntry={false}
            />
            <Input
              onChangeText={(text) => setNumero(text)}
              value={numero}
              keyboardType="numeric"
              placeholder="Insira seu número"
              secureTextEntry={false}
            />
            <Input
              onChangeText={(text) => setBairro(text)}
              value={bairro}
              placeholder="Insira seu bairro"
              secureTextEntry={false}
            />
            <Input
              onChangeText={(text) => setCidade(text)}
              value={cidade}
              placeholder="Insira sua cidade"
              secureTextEntry={false}
            />
            <Input
              onChangeText={(text) => setUF(text)}
              value={UF}
              placeholder="Insira seu estado"
              secureTextEntry={false}
            />
            <Text style={styles.label}>Descrição:</Text>
            <Input
              multiline={true}
              placeholder="Digite uma descrição"
              onChangeText={handledescricaoChange}
              value={descricao}
              secureTextEntry={false}
              height={100}
            />
            <MediaPicker onSelect={handleMediaSelect} />
          </View>
        </ScrollView>
      </View>

      <View style={styles.footerWrapper}>
        <Button label="Enviar solicitação" width="65%" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    textAlign: "left",
    width: "100%",
    color: "#787878",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
  footerWrapper: {
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
});

export default RequestPage;
