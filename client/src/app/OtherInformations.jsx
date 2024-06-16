import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ContentWrapper } from "./pages/components/ContentWrapper";
import { Header } from "./pages/components/Header";

const OtherInformations = () => {
  const Info = ({ label, number }) => {
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.label}>{label}:</Text>
        <Text style={styles.number}>{number}</Text>
      </View>
    );
  };

  return (
    <ContentWrapper style={styles.container}>
      <Header title="OUTRAS INFORMAÇÕES" />

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>CONTATOS DE EMERGÊNCIA</Text>
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
  },
  scrollView: {
    backgroundColor: "white",
    width: "100%",
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    gap: 15,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#397688",
    textAlign: "center",
    marginBottom: 15,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontWeight: "500",
    fontSize: 16,
    color: "#787878",
  },
  number: {
    fontWeight: "600",
    fontSize: 20,
    color: "#397688",
  },
});

export default OtherInformations;