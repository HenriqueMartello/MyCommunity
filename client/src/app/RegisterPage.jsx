import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';
import axios from 'axios';

import { useRouter } from 'expo-router'
const router = useRouter();

export default function RegisterPage() {

  // Variável contento as informações necessárias para o envio da solicitação (campos do banco de dados)
    const [dataToInsert, setDataToInsert] = useState({
      nome: "",
      CPF: "",
      numeroTelefonico: "",
      dataNascimento: "",
      endereco: "",
      email: "",
      senha: "",
      mostrarSenha: false
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
        .post("http://192.168.1.7:5000/registro", userData)
        .then((res) => {
          // Tratamento de Respostas do Backend/Servidor
          console.log(JSON.stringify(res.data))
          switch (res.data.status) {
            case "OK":
              Alert.alert("Usuário Criado com sucesso!");
              router.push("LoginPage");
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
        .catch(e => console.log(e));
      } else {
        Alert.alert("Informações não atendem os requisitos!")
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
    <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={dataToInsert.nome}
          onChangeText={(text) => handleChange("nome", text)}
          placeholder="Nome"
          autoCompleteType="name"
        />
        <TextInput
          style={styles.input}
          value={dataToInsert.CPF}
          onChangeText={(text) => {
            if (/^\d+$/.test(text) || text === "") {
              handleChange("CPF", text);
            }
          }}
          placeholder="CPF (somente números)"
          keyboardType="numeric"
          maxLength={11}
          autoCompleteType="off"
        />
        <TextInput
          style={styles.input}
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
        />
        <TextInput
          style={styles.input}
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
        />
        <TextInput
          style={styles.input}
          value={dataToInsert.endereco}
          onChangeText={(text) => handleChange("endereco", text)}
          placeholder="Endereço"
          autoCompleteType="street-address"
        />
        <TextInput
          style={styles.input}
          value={dataToInsert.email}
          onChangeText={(text) => handleChange("email", text)}
          placeholder="Email"
          autoCompleteType="email"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.passwordInput, {width: '60%'}]} // Define a largura como 100%
            value={dataToInsert.senha}
            onChangeText={(text) => handleChange("senha", text)}
            placeholder="Senha"
            secureTextEntry={!dataToInsert.mostrarSenha}
            autoCompleteType="password"
          />
          <Button
            title={dataToInsert.mostrarSenha ? "Ocultar" : "Mostrar"}
            onPress={() => {
              setDataToInsert({
                ...dataToInsert,
                mostrarSenha: !dataToInsert.mostrarSenha,
              });
            }}
          />
        </View>
        <Button title="Salvar" onPress={handleSubmit} />
        <Button
        title='Voltar'
        onPress={()=> router.push("/")}
        />
        <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  )}

// Estilização do Formulario de Usuário
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      width: '80%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '80%' // Define a largura como 80%
    },
    passwordInput: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    mensagem: {
      marginTop: 10,
      color: 'red',
    }
  });
