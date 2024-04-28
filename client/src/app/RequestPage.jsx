import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert, View, TextInput, Button, StyleSheet, Text } from 'react-native';
import MediaPicker from '../Components/MediaPicker'; 
import DropdownMenu from '../Components/DropdownMenu';
import { Header } from '../Components/Header';
import { useRouter } from 'expo-router'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { backendUrl } from '../Components/GlobalVariables';

const router = useRouter();

const RequestPage = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [endereco, setEndereco] = useState('');
  const [CEP, setCEP] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [UF, setUF] = useState('');
  const [descricao, setDescricao] = useState('');
  const [mediaUri, setMediaUri] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    obterToken();
  }, []);

  async function obterToken() {
    // Token recebido da solicitação de login, que foi salvo localmente
    const userToken = await AsyncStorage.getItem('token');
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
    }

    // Criação Solicitação
    axios
      .post(`${backendUrl}criarSolicitacao`, solicData)
      .then((res) => {
        switch (res.data.status) {
          case "TokenInvalido":
            Alert.alert("Erro na validação da sua autenticação! Deslogue do aplicativo e realize o login novamente!")
          break
          case "SolicitacaoRegistrada":
            Alert.alert("Solicitação registrada com sucesso!")
            router.back();
          break
          default: 
            Alert.alert("Erro no registro da solicitação!")
        } 
      })
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
      <Text>Nova Solicitação</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Selecione um Item:</Text>
        <DropdownMenu onSelect={handleItemSelect} value={selectedItem} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Endereço:</Text>
        <TextInput
          style={[styles.input, { height: 40 }]}
          onChangeText={text => setEndereco(text)}
          value={endereco}
          placeholder="Insira seu endereço"
          multiline={false}
        />
        <TextInput
          style={[styles.input, { height: 40 }]}
          onChangeText={text => setCEP(text)}
          value={CEP}
          keyboardType="numeric"
          placeholder="Insira seu CEP"
          multiline={false}
        />
        <TextInput
          style={[styles.input, { height: 40 }]}
          onChangeText={text => setNumero(text)}
          value={numero}
          keyboardType="numeric"
          placeholder="Insira seu numero"
          multiline={false}
        />
        <TextInput
          style={[styles.input, { height: 40 }]}
          onChangeText={text => setBairro(text)}
          value={bairro}
          placeholder="Insira seu bairro"
          multiline={false}
        />
        <TextInput
          style={[styles.input, { height: 40 }]}
          onChangeText={text => setCidade(text)}
          value={cidade}
          placeholder="Insira sua cidade"
          multiline={false}
        />
        <TextInput
          style={[styles.input, { height: 40 }]}
          onChangeText={text => setUF(text)}
          value={UF}
          placeholder="Insira seu estado"
          multiline={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descrição:</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Digite uma descrição"
          onChangeText={handledescricaoChange}
          value={descricao}
        />
      </View>
      <MediaPicker onSelect={handleMediaSelect} />
      <Button title="Enviar Solicitação" onPress={handleSubmit} />
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
});

export default RequestPage;
