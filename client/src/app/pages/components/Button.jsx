import { Pressable, StyleSheet, Text, View } from "react-native";
import { ShadowStyle } from "./ShadowStyle";

export const Button = ({ label, onPress, disabled, width }) => {
  const button = StyleSheet.create({
    default: {
      backgroundColor: "#397688",
      padding: 15,
      borderRadius: 10,
      textAlign: "center",
      height: "auto",
      justifyContent: "center",
      width: "100%",
    },
    label: {
      color: "white",
      fontWeight: "bold",
      fontSize: 19,
      alignSelf: "center",
      lineHeight: 19,
    },
  });

  return (
    <Pressable style={{ width: width }} onPress={onPress}>
      <ShadowStyle>
        <View style={{ borderRadius: 10 }}>
          <Pressable style={button.default} disabled={disabled}>
            <Text style={button.label}>{label}</Text>
          </Pressable>
        </View>
      </ShadowStyle>
    </Pressable>
  );
};
