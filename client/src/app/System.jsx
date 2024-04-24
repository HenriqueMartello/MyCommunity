import React from 'react';
import axios from 'axios';
import { View, StyleSheet, BackHandler, Alert } from 'react-native';
import { Header } from '../Components/Header';
import { NewRequestButton, LearnMoreButton, MyRequestsButton, OtherInformationButton, DevelopmentButton } from '../Components/Buttons';
import { useRouter } from 'expo-router'
import { backendUrl }  from "../Components/GlobalVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from 'react';

async function obterUsuario() {
  // Token recebido da solicitação de login, que foi salvo localmente
  const token = await AsyncStorage.getItem('token');
  axios
  .post(`${backendUrl}usuarioInfo`, {token: token})
  .then(res => {
    console.log(res.data);
  });
}

const router = useRouter();
const SystemPage = ({ navigation }) => {
const handleLogout = () => deslogarUsuario();

function deslogarUsuario() {
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
  obterUsuario();
}, []);

  return (
    <View style={styles.container}>
      <Header username={"Convidado"} onLogout={handleLogout} />
      <NewRequestButton navigation={navigation} />
      <MyRequestsButton navigation={navigation}/>
      <LearnMoreButton navigation={navigation} />
      <OtherInformationButton navigation={navigation} />
      <DevelopmentButton navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SystemPage;
