import { Pressable, StyleSheet, Text } from "react-native";

export const Button = ({ label, onPress, disabled, width = "auto" }) => {
  const button = StyleSheet.create({
    default: {
      backgroundColor: "#397688",
      color: "white",
      padding: 15,
      borderRadius: 10,
      fontWeight: 600,
      textAlign: "center",
      height: 48,
      justifyContent: "center",
      fontSize: 19,
      width: width,
      boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
    },
  });

  return (
    <Pressable style={button.default} onPress={onPress} disabled={disabled}>
      <Text>{label}</Text>
    </Pressable>
  );
};
