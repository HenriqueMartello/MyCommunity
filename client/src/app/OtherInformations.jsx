import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ContentWrapper } from "./pages/components/ContentWrapper";
import { useRouter } from "expo-router";
import { Header } from "./pages/components/Header";

const OtherInformations = () => {
  const router = useRouter();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  const Info = ({ label, number }) => {
    return (
      <View>
        <Text style={{ fontWeight: 500, fontSize: 16, color: "#787878" }}>
          {label}:
        </Text>
        <Text style={{ fontWeight: 600, fontSize: 20, color: "#397688" }}>
          {number}
        </Text>
      </View>
    );
  };

  return (
    <ContentWrapper style={styles.container}>
      <Header title="OUTRAS INFORMAÇÕES" />

      <ScrollView
        style={{
          backgroundColor: "white",
          width: "100%",
          //   borderRadius: 15,
        }}
      >
        <View
          style={{
            gap: 15,
            paddingHorizontal: 20,
            paddingVertical: 25,
          }}
        >
          <Info label="Bombeiros" number="192" />
          <Info label="Defesa Civil" number="199" />
          <Info label="Prefeitura" number="156" />
          <Info label="Polícia Militar" number="190" />
          <Info label="Samu" number="192" />
        </View>
      </ScrollView>
    </ContentWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 25,
    // paddingTop: 60,
    // paddingBottom: 20,
  },
  label: {
    fontSize: 16,
    textAlign: "left",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
});

export default OtherInformations;
