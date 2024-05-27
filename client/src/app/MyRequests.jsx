import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { backendUrl } from "../Components/GlobalVariables";
import { ContentWrapper } from "./pages/components/ContentWrapper";
import { Button } from "./pages/components/Button";

const MyRequests = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
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
    const userToken = await AsyncStorage.getItem("token");
    setToken(userToken);
  }

  // Listar todas solicitações com base no usuário logado
  const listarSolicitacoesPorUsuario = () => {
    axios
      .post(`${backendUrl}listarSolicitacoes`, { token })
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
    axios
      .post(`${backendUrl}consultaSolicitacao`, {
        token,
        idSolicitacao: solicitacaoId,
      })
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
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => {
            axios
              .post(`${backendUrl}deletarSolicitacao`, {
                token,
                idSolicitacao: selectedSolicitacao.idSolicitacao,
              })
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
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

  const renderSolicitacaoDetails = () => {
    if (!selectedSolicitacao) return null;

    const endereco = selectedSolicitacao.endereco;

    return (
      <View style={styles.solicitacaoDetailsContainer}>
        <Text
          style={{
            backgroundColor: "#397688",
            padding: 10,
            fontWeight: "700",
            color: "white",
            fontSize: 16,
          }}
        >
          Solicitação #{selectedSolicitacao.idSolicitacao}
        </Text>

        <View style={{ padding: 10, gap: 5 }}>
          <SolicitaçãoWrapper label="Tipo de Serviço" description={selectedSolicitacao.tipoServico} />
          <SolicitaçãoWrapper label="Data" description={selectedSolicitacao.data} />
          <SolicitaçãoWrapper label="Solicitação" description={selectedSolicitacao.tipoServico}/>
          <SolicitaçãoWrapper label="CEP" description={endereco.cep} />
          <SolicitaçãoWrapper label="Endereco" description={endereco.endereco} />
          <SolicitaçãoWrapper label="Número" description={endereco.numero} />
          <SolicitaçãoWrapper label="Bairro" description={endereco.bairro} />
          <SolicitaçãoWrapper label="Cidade" description={endereco.cidade} />
          <SolicitaçãoWrapper label="UF" description={endereco.UF} />
          <SolicitaçãoWrapper label="Descrição" description={selectedSolicitacao.descricao}/>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 15,
            }}
          >
            <Button
              label="Deletar Solicitação"
              onPress={handleDeleteSolicitacao}
              color={"red"}
              size="sm"
            />
            <Button
              label="Voltar"
              size="sm"
              onPress={() => setSelectedSolicitacao(null)}
            />
          </View>
        </View>
      </View>
    );
  };

  const SolicitaçãoWrapper = ({ label, description }) => {
    return (
      <View style={{}}>
        <Text style={{ fontSize: 13, fontWeight: "normal" }}>{label}: </Text>
        <Text style={{ fontWeight: "600" }}>{description}</Text>
      </View>
    );
  };

  // Visualização Padrão | Caso selecionada uma das solicitações, exibe o return que está em renderSolicitacaoDetails
  return (
    <>
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
            Minhas Solicitações
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
              gap: 15,
              paddingHorizontal: 20,
              paddingVertical: 25,
            }}
          >
            {!selectedSolicitacao ? (
              solicitacoes.length === 0 ? (
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 16,
                    textAlign: "center",
                    paddingVertical: 60,
                  }}
                >
                  Nenhuma solicitação encontrada para este usuário!
                </Text>
              ) : (
                solicitacoes.map((solicitacao) => (
                  <TouchableOpacity
                    key={solicitacao._id}
                    onPress={() => handleSolicitacaoClick(solicitacao._id)}
                  >
                    <View style={styles.solicitacaoContainer}>
                      <Text
                        style={{
                          backgroundColor: "#397688",
                          padding: 10,
                          fontWeight: "700",
                          color: "white",
                          fontSize: 16,
                        }}
                      >
                        Solicitação #{solicitacao._id}
                      </Text>

                      <View
                        style={{
                          padding: 10,
                          gap: 10,
                        }}
                      >
                        <SolicitaçãoWrapper
                          label="Data"
                          description={solicitacao.data}
                        />

                        <SolicitaçãoWrapper
                          label="Descrição"
                          description={solicitacao.descricao}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                ))
              )
            ) : (
              renderSolicitacaoDetails()
            )}
          </View>
        </ScrollView>

        <View style={styles.footerWrapper}>
          <Button
            label="Voltar"
            width="30%"
            onPress={() => router.push("System")}
          />
        </View>
      </ContentWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  solicitacaoContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#397688",
    borderRadius: 5,
    backgroundColor: "#EDEAEA",
    minHeight: 155,
    maxHeight: 155,
    overflow: "hidden",
  },
  solicitacaoTitle: {
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "left",
  },
  solicitacaoDescription: {
    textAlign: "left",
    fontWeight: 500,
    color: "yellow",
  },
  solicitacaoDetailsContainer: {
    borderWidth: 1,
    borderColor: "#859A95",
    borderRadius: 5,
    backgroundColor: "#EDEAEA",
    paddingBottom: 5,
  },
  footerWrapper: {
    paddingTop: 20,
  },
});

export default MyRequests;
