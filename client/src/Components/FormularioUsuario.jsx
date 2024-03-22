import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

export default function FormularioUsuario() {

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
            style={[styles.passwordInput, {width: '100%'}]} // Define a largura como 100%
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
