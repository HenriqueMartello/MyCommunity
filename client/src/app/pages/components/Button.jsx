import { Pressable, StyleSheet, Text, View } from "react-native";
import { ShadowStyle } from "./ShadowStyle";

export const Button = ({
  size,
  label,
  height,
  onPress,
  disabled,
  width,
  color,
}) => {
  const sm = size === "sm";
  const button = StyleSheet.create({
    default: {
      backgroundColor: color ? color : "#397688",
      padding: sm ? 8 : 15,
      borderRadius: 10,
      textAlign: "center",
      height: height ? 10 : "auto",
      justifyContent: "center",
      width: "100%",
    },
    label: {
      color: "white",
      fontWeight: "bold",
      fontSize: sm ? 15 : 19,
      alignSelf: "center",
      lineHeight: 19,
    },
  });

  return (
    <Pressable style={{ width: width }} onPress={onPress}>
      <ShadowStyle>
        <View style={{ borderRadius: 10 }}>
          <Pressable
            style={button.default}
            disabled={disabled}
            onPress={onPress}
          >
            <Text style={button.label}>{label}</Text>
          </Pressable>
        </View>
      </ShadowStyle>
    </Pressable>
  );
};
