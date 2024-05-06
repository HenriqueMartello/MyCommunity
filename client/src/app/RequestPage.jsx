import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Alert,
  View,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import MediaPicker from "../Components/MediaPicker";
import DropdownMenu from "../Components/DropdownMenu";
import { Header } from "../Components/Header";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { backendUrl } from "../Components/GlobalVariables";
import { ContentWrapper } from "./pages/components/ContentWrapper";
import { Input } from "./pages/components/Input";
import { Button } from "./pages/components/Button";

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

    // Criação Solicitação
    // <<<<<<< HEAD
    //     axios.post(`${backendUrl}criarSolicitacao`, solicData).then((res) => {
    //       console.log(res.data.status);
    //       switch (res.data.status) {
    //         case "TokenInvalido":
    //           Alert.alert(
    //             "Erro na validação da sua autenticação! Deslogue do aplicativo e realize o login novamente!"
    //           );
    //           break;
    //         case "SolicitacaoRegistrada":
    //           Alert.alert("Solicitação registrada com sucesso!");
    //           // Limpar campos solicitação caso OK
    //           // Colocar demais
    //           setSelectedItem("");
    //           setEndereco("");
    //           setDescricao("");
    //           setMediaUri(null);
    //           break;
    //         default:
    //           Alert.alert("Erro no registro da solicitação!");
    //       }
    //     });
    // =======
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
    <ContentWrapper style={styles.container}>
      <View
        style={{
          width: "100%",
          borderTopLeftRadius: 18,
          borderTopEndRadius: 18,
          paddingTop: 15,
          paddingBottom: 20,
          alignContent: "center",
          backgroundColor: "#397688",
          marginBottom: -10,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "white",
            alignSelf: "center",
          }}
        >
          Nova Solicitação
        </Text>
      </View>

      <ScrollView
        style={{
          backgroundColor: "white",
          width: "100%",
          borderRadius: 15,
        }}
      >
        <View
          style={{
            gap: 10,
            paddingHorizontal: 20,
            paddingVertical: 25,
          }}
        >
          <Text style={styles.label}>Selecione um Item:</Text>
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

      <View style={styles.footerWrapper}>
        <Button label="Voltar" width="30%" onPress={() => router.back()} />
        <Button label="Enviar Solicitação" width="65%" onPress={handleSubmit} />
      </View>
    </ContentWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 60,
    paddingBottom: 20,
  },
  label: {
    fontSize: 16,
    textAlign: "left",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
  footerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 15,
  },
});

export default RequestPage;
