import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import logo from "./../../../assets/logo.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export const MainPageHeader = ({ name }) => {
  const router = useRouter();
  const handleBackPress = () => {
    Alert.alert(
      "Sair do Aplicativo",
      "Você tem certeza que deseja sair do aplicativo?",
      [
        {
          text: "Cancelar",
          onePress: () => null,
          style: "cancel",
        },
        {
          text: "Sair",
          onPress: () => deslogarUsuario(),
        },
      ]
    );
    return true;
  };
  function deslogarUsuario() {
    AsyncStorage.setItem("usuarioLogado", "");
    AsyncStorage.setItem("token", "");
    router.push("/");
  }

  return (
    <View style={styles.wrapper}>
      <Image
        source={logo}
        style={{
          width: 70,
          height: 70,
          marginBottom: 10,
        }}
      />

      <View style={styles.contentWrapper}>
        <Pressable onPress={() => router.push("/UserInfo")}>
          <Text style={styles.text}>Olá, {name}!</Text>
        </Pressable>
        <Pressable style={styles.presseable} onPress={handleBackPress}>
          <Text style={styles.logOutLabel}>Sair</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { paddingTop: 20, width: "100%", alignItems: "center" },
  text: {
    color: "#397688",
    fontSize: 19,
    fontWeight: "700",
  },
  contentWrapper: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  presseable: {
    backgroundColor: "#397688",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    justifyContent: "center",
  },
  logOutLabel: {
    alignSelf: "center",
    color: "white",
    lineHeight: 15,
    fontSize: 15,
    fontWeight: "600",
  },
});
