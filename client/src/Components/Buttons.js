import React from "react";
import { TouchableOpacity, Text, StyleSheet, Button } from "react-native";
import { Link, useRouter } from "expo-router";

const router = useRouter();

const LoginButton = () => {
  return <Button title="Login" onPress={() => router.push("/LoginPage")} />;
};

const CreateAccountButton = () => {
  return (
    <Button title="Create Account" onPress={() => router.push("/FormPage")} />
  );
};

const SystemButton = () => {
  return <Button title="System" onPress={() => router.push("/System")} />;
};

const ResetPasswordButton = () => {
  return (<Button title="Reset Password" onPress={() => router.push("/ResetPasswordPage")} />);
};

const HomePageButton = ({ navigation }) => {
  return (<Button title="Página Inicial" onPress={() => router.push("/index")} />);
};

const NewRequestButton = () => {
  return (<Button title="Nova Solicitação" onPress={() => router.push("/RequestPage")} />);
};

const LearnMoreButton = () => {
  return (<Button title="Aprenda Mais" onPress={() => router.push("/LearnMore")} />);
};

const DevelopmentButton = () => {
  return (<Button title="Development" onPress={() => router.push("/Development")} />);
};

const MyRequestsButton = () => {
  return (<Button title="My Requests" onPress={() => router.push("/MyRequests")} />);
};

const OtherInformationButton = () => {
  return (<Button title="Other Information" onPress={() => router.push("/OtherInformations")} />);
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export {
  LoginButton,
  CreateAccountButton,
  SystemButton,
  ResetPasswordButton,
  NewRequestButton,
  DevelopmentButton,
  LearnMoreButton,
  MyRequestsButton,
  OtherInformationButton,
};
