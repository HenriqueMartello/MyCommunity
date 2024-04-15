import React, { useState } from "react";
import { StyleSheet, View, Alert, Image, Pressable, Text } from "react-native";
import axios from "axios";
import logo from "../assets/logo.svg";

import { useRouter } from "expo-router";
import { Input } from "./pages/components/Input";
import { Button } from "./pages/components/Button";
import { Icon } from "./pages/components/Icon";
import { ContentWrapper } from "./pages/components/ContentWrapper";

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
    const userData = {
      nome: dataToInsert.nome,
      CPF: dataToInsert.CPF,
      numeroTelefonico: dataToInsert.numeroTelefonico,
      dataNascimento: dataToInsert.dataNascimento,
      endereco: dataToInsert.endereco,
      email: dataToInsert.email,
      senha: dataToInsert.senha,
    };

    if (validarCampos()) {
      axios
        .post("https://my-community-api.vercel.app/api/registro", userData)
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

  /* Método utilizando SQLite
    const handleSubmit = () => {
      if (validarCampos()) {
        fetch("http://localhost:5000", {
          method: "POST",
          body: JSON.stringify(dataToInsert),
          headers: { "Content-Type": "application/json" },
        })
        .then(response => response.json())
        .then(() => {
          setMensagem("Usuário adicionado com sucesso!");
        })
        .catch((err) => {
          console.error(err);
          setMensagem("Erro ao adicionar usuário.");
        });
      } else {
        setMensagem("Por favor, preencha todos os campos corretamente.");
      }
    };
    */

  // Validação de campos no formulario antes de permitir o envio da solicitação ao banco de dados.
  const validarCampos = () => {
    if (
      dataToInsert.CPF.length !== 11 ||
      dataToInsert.numeroTelefonico.length !== 14 ||
      dataToInsert.dataNascimento.length !== 8
    ) {
      return false;
    }
    return true;
  };

  // Retorna o componente do Formulario de Usuário
  return (
    <ContentWrapper
      style={{ justifyContent: "start", padding: 40 }}
    >
      <Image source={logo} style={{ width: "7rem", height: "6rem" }} />

      <View style={styles.content}>
        <Input
          value={dataToInsert.nome}
          onChangeText={(text) => handleChange("nome", text)}
          placeholder="Nome"
          autoCompleteType="name"
          secureTextEntry={false}
        />
        <Input
          value={dataToInsert.CPF}
          onChangeText={(text) => {
            if (/^\d+$/.test(text) || text === "") {
              handleChange("CPF", text);
            }
          }}
          placeholder="CPF (somente númerosEWE)"
          keyboardType="numeric"
          maxLength={11}
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
          onChangeText={(text) => {
            if (/^\d+$/.test(text) || text === "") {
              handleChange("dataNascimento", text);
            }
          }}
          placeholder="Data de Nascimento (DDMMYYYY)"
          keyboardType="numeric"
          maxLength={8}
          autoCompleteType="off"
          secureTextEntry={false}
        />
        <Input
          value={dataToInsert.endereco}
          onChangeText={(text) => handleChange("endereco", text)}
          placeholder="Endereço"
          autoCompleteType="street-address"
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
                <Icon variant="eyeOff" color="#859A95" />
              ) : (
                <Icon variant="eye" color="#859A95" />
              )}
            </Pressable>
          }
        />

        {/* <Text style={styles.mensagem}>{mensagem}</Text> */}
      </View>
      <View style={styles.footerWrapper}>
        <Button label="Voltar" onPress={() => router.push("/")} />
        <Button label="Salvar" onPress={handleSubmit} />
      </View>
    </ContentWrapper>
  );
}

const styles = StyleSheet.create({
  footerWrapper: {
    display: "grid",
    gridTemplateColumns: "40% 40%",
    justifyContent: "space-between",
    width: "100%",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    //gap: 20,
    width: "100%",
  },
  mensagem: {
    marginTop: 10,
    color: "red",
  },
});
