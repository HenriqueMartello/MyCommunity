import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Alert,
  Image,
  Pressable,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import axios from "axios";
import logo from "../assets/logo.png";

import { useRouter } from "expo-router";
import { Input } from "./pages/components/Input";
import { Button } from "./pages/components/Button";
import { Icon } from "./pages/components/Icon";
import { ContentWrapper } from "./pages/components/ContentWrapper";
import { backendUrl } from "../Components/GlobalVariables";
import { formatCpf, formatInputDate } from '../Components/helpers';

export default function RegisterPage() {
  const router = useRouter();

  // Variável contento as informações necessárias para o envio da solicitação (campos do banco de dados)
  const [dataToInsert, setDataToInsert] = useState({
    nome: "",
    CPF: "",
    numeroTelefonico: "",
    dataNascimento: "",
    endereco: "",
    email: "",
    senha: "",
    mostrarSenha: false,
  });

  // Variável para mensagens de notificação da aplicação
  const [mensagem, setMensagem] = useState("");

  // Função para lidar com a alteração nos campos
  const handleChange = (name, value) => {
    setDataToInsert({
      ...dataToInsert,
      [name]: value,
    });
  };

  // Cadastro de Usuário | Método POST
  function handleSubmit() {

    cpfTratado = dataToInsert.CPF.replace(/[^\d]/g, '');
    dtNasTratada = dataToInsert.dataNascimento.replace(/\//g, '');

    const userData = {
      nome: dataToInsert.nome,
      CPF: cpfTratado,
      numeroTelefonico: dataToInsert.numeroTelefonico,
      dataNascimento: dtNasTratada,
      CEP: dataToInsert.CEP,
      endereco: dataToInsert.endereco,
      numero: dataToInsert.numero,
      bairro: dataToInsert.bairro,
      cidade: dataToInsert.cidade,
      UF: dataToInsert.UF,
      email: dataToInsert.email,
      senha: dataToInsert.senha,
    };

    if (validarCampos()) {
      axios
        .post(`${backendUrl}registro`, userData)
        .then((res) => {
          // Tratamento de Respostas do Backend/Servidor
          console.log(JSON.stringify(res.data));
          switch (res.data.status) {
            case "OK":
              Alert.alert("Usuário Criado com sucesso!");
              router.push("/");
              break;
            case "emailRegistrado":
              Alert.alert("E-mail já registrado!");
              break;
            case "CPFRegistrado":
              Alert.alert("CPF já registrado!");
              break;
            default:
              Alert.alert(JSON.stringify(res.data));
          }
        })
        .catch((e) => console.log(e));
    } else {
      Alert.alert("Informações não atendem os requisitos!");
    }
  }

  // Validação de campos no formulario antes de permitir o envio da solicitação ao banco de dados.
  const validarCampos = () => {
    if (
      dataToInsert.CPF.length !== 14 ||
      dataToInsert.numeroTelefonico.length !== 14 ||
      dataToInsert.dataNascimento.length !== 10
    ) {
      return false;
    }
    return true;
  };

  // Retorna o componente do Formulario de Usuário
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView>
        <ContentWrapper
          style={{
            flex: 1,
            padding: 40,
          }}
        >
          <View style={styles.content}>
            <Image
              source={logo}
              style={{
                width: 60,
                height: 60,
                marginBottom: 20,
              }}
            />
            <Input
              value={dataToInsert.nome}
              onChangeText={(text) => handleChange("nome", text)}
              placeholder="Nome"
              autoCompleteType="name"
              secureTextEntry={false}
            />
            <Input
              value={dataToInsert.CPF}
              onChangeText={(text) => formatCpf(text, (formattedText) => handleChange("CPF", formattedText))}
              placeholder="CPF (somente números)"
              keyboardType="numeric"
              maxLength={14}
              autoCompleteType="off"
              secureTextEntry={false}
            />
            <Input
              value={dataToInsert.numeroTelefonico}
              onChangeText={(text) => {
                if (/^\d+$/.test(text) || text === "") {
                  handleChange("numeroTelefonico", text);
                }
              }}
              placeholder="Número Telefônico (DDD + número)"
              keyboardType="numeric"
              maxLength={14}
              autoCompleteType="tel"
              secureTextEntry={false}
            />
            <Input
              value={dataToInsert.dataNascimento}
              onChangeText={(text) => formatInputDate(text, (formattedText) => handleChange("dataNascimento", formattedText))}
              placeholder="Data de Nascimento (DDMMYYYY)"
              keyboardType="numeric"
              maxLength={10}
              autoCompleteType="off"
              secureTextEntry={false}
            />
          <Input
            value={dataToInsert.CEP}
            onChangeText={(text) => handleChange("CEP", text)}
            keyboardType="numeric"
            placeholder="CEP"
            autoCompleteType="street-address"
            secureTextEntry={false}
          />
            <Input
              value={dataToInsert.endereco}
              onChangeText={(text) => handleChange("endereco", text)}
              placeholder="Endereco"
              autoCompleteType="street-address"
              secureTextEntry={false}
            />
          <Input
            value={dataToInsert.numero}
            onChangeText={(text) => handleChange("numero", text)}
            keyboardType="numeric"
            placeholder="Numero"
            autoCompleteType="number"
            secureTextEntry={false}
          />
          <Input
            value={dataToInsert.bairro}
            onChangeText={(text) => handleChange("bairro", text)}
            placeholder="Bairro"
            autoCompleteType="off"
            secureTextEntry={false}
          />
          <Input
            value={dataToInsert.cidade}
            onChangeText={(text) => handleChange("cidade", text)}
            placeholder="Cidade"
            autoCompleteType="off"
            secureTextEntry={false}
          />
          <Input
            value={dataToInsert.UF}
            onChangeText={(text) => handleChange("UF", text)}
            placeholder="UF"
            autoCompleteType="off"
            secureTextEntry={false}
          />
            <Input
              value={dataToInsert.email}
              onChangeText={(text) => handleChange("email", text)}
              placeholder="Email"
              autoCompleteType="email"
              secureTextEntry={false}
            />
            <Input
              value={dataToInsert.senha}
              onChangeText={(text) => handleChange("senha", text)}
              placeholder="Senha"
              secureTextEntry={!dataToInsert.mostrarSenha}
              autoCompleteType="password"
              icon={
                <Pressable
                  onPress={() => {
                    setDataToInsert({
                      ...dataToInsert,
                      mostrarSenha: !dataToInsert.mostrarSenha,
                    });
                  }}
                >
                  {dataToInsert.mostrarSenha ? (
                    <Icon variant="eye" color="#859A95" />
                  ) : (
                    <Icon variant="eyeOff" color="#859A95" />
                  )}
                </Pressable>
              }
            />

            <Text style={styles.mensagem}>{mensagem}</Text>
          </View>
          <View style={styles.footerWrapper}>
            <Button label="Voltar" width="40%" onPress={() => router.push("/")} />
            <Button label="Salvar" width="40%" onPress={handleSubmit} />
          </View>
        </ContentWrapper>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  footerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  content: {
    display: "flex",
    gap: 22,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  mensagem: {
    marginTop: 10,
    color: "red",
  },
});
