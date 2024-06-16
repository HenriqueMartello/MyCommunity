import React, { useState, useEffect } from "react";
import axios from "axios";
import down from "../assets/arrow-down.png";
import up from "../assets/arrow-up.png";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Pressable,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { backendUrl } from "../Components/GlobalVariables";
import { ContentWrapper } from "./pages/components/ContentWrapper";
import { Button } from "./pages/components/Button";
import { ShadowStyle } from "./pages/components/ShadowStyle";
import { Header } from "./pages/components/Header";

const MyRequests = () => {
  const [token, setToken] = useState("");
  const [solicitacoes, setSolicitacoes] = useState([]);
  const [selectedSolicitacao, setSelectedSolicitacao] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  // Definir cor dos chamados com base no Status
  const getStatusColor = (status) => {
    switch (status) {
      case "Aberta":
        return "#4CAF50";
      case "Em Analise":
        return "#FFC107";
      case "Resolvida":
        return "#397688";
      default:
        return "#397688";
    }
  };

  // Listar todas solicitações com base no usuário logado
  const listarSolicitacoesPorUsuario = () => {
    setIsLoading(true);

    axios
      .post(`${backendUrl}listarSolicitacoes`, { token })
      .then((res) => {
        if (res.data.status === "OK") {
          setIsLoading(false);
          setSolicitacoes(res.data.data);
        } else {
          setIsLoading(false);
          Alert.alert("Erro ao listar as solicitações!");
        }
      })
      .catch((error) => {
        setIsLoading(false);

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

  const SolicitaçãoWrapper = ({ label, description }) => {
    return (
      <View style={{ gap: 3 }}>
        <Text style={styles.label}>{label}: </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  };

  const renderSolicitacaoDetails = () => {
    if (!selectedSolicitacao) return null;

    const endereco = selectedSolicitacao.endereco;

    return (
      <ShadowStyle>
        <Pressable onPress={() => setSelectedSolicitacao(null)}>
          <View style={styles.solicitacaoContainer}>
            <Text style={[styles.solicitacaoTitle, {backgroundColor: getStatusColor(selectedSolicitacao.status)}]}>
              Solicitação #{selectedSolicitacao.idSolicitacao}
            </Text>

            <View style={styles.contentWrapper}>
              <SolicitaçãoWrapper
                label="Tipo de Serviço"
                description={selectedSolicitacao.tipoServico || "-"}
              />
              <SolicitaçãoWrapper
                label="Data"
                description={selectedSolicitacao.data || "-"}
              />
              <SolicitaçãoWrapper
                label="Solicitação"
                description={selectedSolicitacao.tipoServico || "-"}
              />
              <SolicitaçãoWrapper
                label="CEP"
                description={endereco.cep || "-"}
              />
              <SolicitaçãoWrapper
                label="Endereço"
                description={endereco.endereco || "-"}
              />
              <SolicitaçãoWrapper
                label="Número"
                description={endereco.numero || "-"}
              />
              <SolicitaçãoWrapper
                label="Bairro"
                description={endereco.bairro || "-"}
              />
              <SolicitaçãoWrapper
                label="Cidade"
                description={endereco.cidade || "-"}
              />
              <SolicitaçãoWrapper label="UF" description={endereco.UF || "-"} />
              <SolicitaçãoWrapper
                label="Descrição"
                description={selectedSolicitacao.descricao || "-"}
              />
              <View style={styles.footer}>
                <Button
                  label="Deletar"
                  onPress={handleDeleteSolicitacao}
                  color={"#CA0909"}
                  size="sm"
                  width={70}
                />

                <Pressable onPress={() => setSelectedSolicitacao(null)}>
                  <Image source={up} style={styles.arrow} />
                </Pressable>
              </View>
            </View>
          </View>
        </Pressable>
      </ShadowStyle>
    );
  };

  // Visualização Padrão | Caso selecionada uma das solicitações, exibe o return que está em renderSolicitacaoDetails
  return (
    <>
      <ContentWrapper style={styles.container}>
        <Header title="MINHAS SOLICITAÇÕES" />

        <ScrollView style={styles.scrollView}>
          <View
            style={{
              gap: 15,
              paddingHorizontal: 20,
              paddingVertical: 25,
            }}
          >
            {isLoading ? (
              Array.from({ length: 3 }, (i) => (
                <View
                  key={i}
                  style={{
                    width: "100%",
                    height: 170,
                    borderRadius: 8,
                    opacity: 0.8,
                    backgroundColor: "#EFEFEF",
                  }}
                />
              ))
            ) : !selectedSolicitacao ? (
              solicitacoes.length === 0 ? (
                <Text style={styles.emptyContent}>
                  Nenhuma solicitação encontrada para este usuário!
                </Text>
              ) : (
                solicitacoes.map((solicitacao) => (
                  <ShadowStyle key={solicitacao._id}>
                    <TouchableOpacity
                      key={solicitacao._id}
                      onPress={() => handleSolicitacaoClick(solicitacao._id)}
                    >
                      <View style={[styles.solicitacaoContainer]}>
                        <Text style={styles.solicitacaoTitle}>
                          Solicitação #{solicitacao._id} | Status: {solicitacao.status}
                        </Text>

                        <View
                          style={[
                            styles.contentWrapper,
                            {
                              maxHeight: 105,
                              overflow: "hidden",
                            },
                          ]}
                        >
                          <SolicitaçãoWrapper
                            label="Data"
                            description={solicitacao.data || "-"}
                          />

                          <SolicitaçãoWrapper
                            label="Descrição"
                            description={solicitacao.descricao || "-"}
                          />
                        </View>
                        <Image
                          source={down}
                          style={[
                            styles.arrow,
                            {
                              margin: 10,
                            },
                          ]}
                        />
                      </View>
                    </TouchableOpacity>
                  </ShadowStyle>
                ))
              )
            ) : (
              renderSolicitacaoDetails()
            )}
          </View>
        </ScrollView>
      </ContentWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 15,
  },
  emptyContent: {
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 60,
  },
  solicitacaoTitle: {
    backgroundColor: "#397688",
    padding: 10,
    color: "white",
    fontSize: 16,
  },
  contentWrapper: { padding: 10, gap: 15 },
  arrow: {
    width: 40,
    height: 40,
    alignSelf: "flex-end",
  },
  footer: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 13,
    fontWeight: "normal",
    color: "#787878",
  },
  description: {
    fontWeight: "600",
    color: "#397688",
  },

  solicitacaoContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#397688",
    borderRadius: 5,
    backgroundColor: "#EFEFEF",
  },
});

export default MyRequests;
