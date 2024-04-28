import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, StyleSheet, BackHandler, Alert } from 'react-native';
import { Header } from '../Components/Header';
import { NewRequestButton, LearnMoreButton, MyRequestsButton, OtherInformationButton, DevelopmentButton } from '../Components/Buttons';
import { useRouter } from 'expo-router'
import { backendUrl } from "../Components/GlobalVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SystemPage = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter();

  const handleLogout = () => {
    AsyncStorage.setItem("usuarioLogado", "");
    AsyncStorage.setItem("token", "");
    router.push("/");
  }

  const handleBackPress = () => {
    Alert.alert(
      "Sair do Aplicativo",
      "Você tem certeza que deseja sair do aplicativo?",
      [{
        text: "Cancelar",
        onePress: () => null,
        style: "cancel"
      },
      {
        text: "Sair",
        onPress: () => BackHandler.exitApp(),
      }]
    );
    return true;
  }

  useEffect(() => {
    const obterUsuario = async () => {
      // Token recebido da solicitação de login, que foi salvo localmente
      const token = await AsyncStorage.getItem('token');
      axios.post(`${backendUrl}usuarioInfo`, { token: token })
        .then(res => {
          const userData = res.data.data;
          //console.log("Dados do usuário:", userData);
          setUserInfo(userData);
        })
        .catch(error => {
          console.error("Erro ao obter informações do usuário:", error);
        });
    };
    obterUsuario();
  }, []);

  return (
    <View style={styles.container}>
      <Header username={userInfo ? userInfo.nome : "Convidado"} onLogout={handleLogout} />
      <NewRequestButton navigation={navigation} />
      <MyRequestsButton navigation={navigation} />
      <LearnMoreButton navigation={navigation} />
      <OtherInformationButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SystemPage;
