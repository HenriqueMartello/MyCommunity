import React, { useState, useEffect } from "react";
import axios from 'axios';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { backendUrl } from '../Components/GlobalVariables';

const MyRequests = () => {
  const router = useRouter();
  const [token, setToken] = useState('');
  const [solicitacoes, setSolicitacoes] = useState([]);
  const [selectedSolicitacao, setSelectedSolicitacao] = useState(null);

  useEffect(() => {
    obterToken();
  }, []);

  useEffect(() => {
    if (token) {
      listarSolicitacoesPorUsuario();
    }
  }, [token]);

  async function obterToken() {
    // Token recebido da solicitação de login, que foi salvo localmente
    const userToken = await AsyncStorage.getItem('token');
    setToken(userToken);
  }

  // Listar todas solicitações com base no usuário logado
  const listarSolicitacoesPorUsuario = () => {
    axios.post(`${backendUrl}listarSolicitacoes`, { token })
      .then((res) => {
        if (res.data.status === "OK") {
          setSolicitacoes(res.data.data);
        } else {
          Alert.alert("Erro ao listar as solicitações!");
        }
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
        Alert.alert("Erro na requisição. Por favor, tente novamente.");
      });
  };

  // Listar detalhes da solicitação clicada pelo usuário
  const handleSolicitacaoClick = (solicitacaoId) => {
    axios.post(`${backendUrl}consultaSolicitacao`, { token, idSolicitacao: solicitacaoId })
      .then((res) => {
        if (res.data.status === "OK") {
          setSelectedSolicitacao(res.data.data);
        } else {
          Alert.alert("Erro ao obter detalhes da solicitação!");
        }
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
        Alert.alert("Erro na requisição. Por favor, tente novamente.");
      });
  };

  // Excluir a solicitação selecionada
  const handleDeleteSolicitacao = () => {
    if (!selectedSolicitacao) return;

    Alert.alert(
      "Confirmar exclusão",
      "Tem certeza que deseja excluir esta solicitação?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Confirmar",
          onPress: () => {
            axios
            .post(`${backendUrl}deletarSolicitacao`, { token, idSolicitacao: selectedSolicitacao.idSolicitacao })
            .then((res) => {
            if (res.data.status === "OK") {
              Alert.alert("Solicitação excluída com sucesso!");
              // Atualizar a lista de solicitações após a exclusão
              listarSolicitacoesPorUsuario();
              setSelectedSolicitacao(null);
            } else {
              Alert.alert("Erro ao excluir a solicitação!");
            }
          })
          .catch((error) => {
            console.error("Erro na requisição:", error);
            Alert.alert("Erro na requisição. Por favor, tente novamente.");
          });
              },
              style: "destructive"
            }
          ],
          { cancelable: false }
        );
  };

  const renderSolicitacaoDetails = () => {
    if (!selectedSolicitacao) return null;
  
    const endereco = selectedSolicitacao.endereco;
  
    return (
      <View style={styles.solicitacaoDetailsContainer}>
        <Text style={styles.solicitacaoTitle}>Data: {selectedSolicitacao.data}</Text>
        <Text style={styles.solicitacaoTitle}>Solicitação: {selectedSolicitacao.tipoServico}</Text>
        <Text style={styles.solicitacaoDescription}>CEP: {endereco.cep}</Text>
        <Text style={styles.solicitacaoDescription}>Endereco: {endereco.endereco}</Text>
        <Text style={styles.solicitacaoDescription}>Numero: {endereco.numero}</Text>
        <Text style={styles.solicitacaoDescription}>Bairro: {endereco.bairro}</Text>
        <Text style={styles.solicitacaoDescription}>Cidade: {endereco.cidade}</Text>
        <Text style={styles.solicitacaoDescription}>UF: {endereco.UF}</Text>
        <Text style={styles.solicitacaoDescription}>Descrição: {selectedSolicitacao.descricao}</Text>
        <Button title="Deletar Solicitação" onPress={handleDeleteSolicitacao} color={"red"}/>
        <Button title="Voltar" onPress={() => setSelectedSolicitacao(null)} />
      </View>
    );
  };

  // Visualização Padrão | Caso selecionada uma das solicitações, exibe o return que está em renderSolicitacaoDetails
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Minhas Solicitações</Text>
        {!selectedSolicitacao ? (
          solicitacoes.length === 0 ? (
            <Text>Nenhuma solicitação encontrada para este usuário!</Text>
          ) : (
            solicitacoes.map((solicitacao) => (
              <TouchableOpacity key={solicitacao._id} onPress={() => handleSolicitacaoClick(solicitacao._id)}>
                <View style={styles.solicitacaoContainer}>
                  <Text style={styles.solicitacaoTitle}>Data: {solicitacao.data}</Text>
                  <Text style={styles.solicitacaoTitle}>Solicitação: {solicitacao.tipoServico}</Text>
                  <Text style={styles.solicitacaoDescription}>Descrição: {solicitacao.descricao}</Text>
                </View>
              </TouchableOpacity>
            ))
          )
        ) : (
          renderSolicitacaoDetails()
        )}
        <Button title="Voltar ao Inicio" onPress={() => router.push("System")} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  solicitacaoContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  solicitacaoTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  solicitacaoDescription: {
    textAlign: 'left',
  },
  solicitacaoDetailsContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default MyRequests;