import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { buscarInformacoesChamado, realizarSolicitacao } from './helpers';

const RequestPage = ({ navigation, route }) => {
  const [numeroChamado, setNumeroChamado] = useState('');
  const [dataChamado, setDataChamado] = useState('');
  const [endereco, setEndereco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [loading, setLoading] = useState(true);

  const usuario = route.params.usuario;

  useEffect(() => {
    // Função para buscar informações do chamado no banco de dados
    const fetchChamadoData = async () => {
      try {
        // Substitua esta chamada fictícia por sua lógica de busca no banco de dados
        const data = await buscarInformacoesChamado();

        // Atualiza o estado com as informações buscadas no banco de dados
        setNumeroChamado(data.numeroChamado);
        setDataChamado(data.dataChamado);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar informações do chamado:', error);
        Alert.alert('Erro', 'Ocorreu um erro ao buscar informações do chamado. Por favor, tente novamente mais tarde.');
      }
    };

    fetchChamadoData();
  }, []); // Executa apenas uma vez no carregamento inicial

  const handleSubmit = () => {
    // Implemente a lógica de realização da solicitação aqui
    // Pode utilizar as informações de numeroChamado, dataChamado e demais campos
    realizarSolicitacao(numeroChamado, dataChamado, endereco, descricao);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 40 }}>
      <Text style={{ fontSize: 20 }}>Olá, {usuario}</Text>
      <Text style={{ fontSize: 24, marginTop: 20, marginBottom: 30 }}>Nova Solicitação</Text>
      <Text>Número do Chamado: {numeroChamado}</Text>
      <Text>Data do Chamado: {dataChamado}</Text>
      <Text>Endereço:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        value={endereco}
        onChangeText={text => setEndereco(text)}
      />
      <Text>Descrição:</Text>
      <TextInput
        multiline
        style={{ height: 80, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        value={descricao}
        onChangeText={text => setDescricao(text)}
      />
      <Button title="Realizar Solicitação" onPress={handleSubmit} />
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', bottom: 20, left: 20 }}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RequestPage;
