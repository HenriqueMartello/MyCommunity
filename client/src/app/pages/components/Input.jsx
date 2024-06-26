import { StyleSheet, TextInput, View, Text } from "react-native";
import { ShadowStyle } from "./ShadowStyle";

export const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = "false",
  keyboardType,
  autoCompleteType,
  maxLength,
  icon,
  height,
  multiline,
  label,
}) => {
  const styles = StyleSheet.create({
    inputWrapper: {
      height: 50,
      borderColor: "#859A95",
      borderWidth: 1,
      backgroundColor: "#EDEDED",
      borderRadius: 10,
      paddingVertical: 10,
      justifyContent: "center",
      height: height ? height : 50,
    },
    input: {
      height: "100%",
      position: "relative",
      zIndex: 2,
      paddingHorizontal: 10,
      // lineHeight: multiline ? 10 : 16,
    },
    iconWrapper: {
      position: "absolute",
      top: "28%",
      right: 15,
      zIndex: 2,
    },
    placeholder: {
      color: "#859A95",
      position: "absolute",
      fontSize: 15,
      left: 10,
      fontWeight: "500",
    },
  });
  return (
    <View style={{ width: "100%" }}>
      {!!label && (
        <Text
          style={{
            fontWeight: 400,
            paddingVertical: 3,
            fontSize: 16,
            color: "#636262",
          }}
        >
          {label}
        </Text>
      )}

      <ShadowStyle>
        <View style={[styles.inputWrapper]}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={!!secureTextEntry}
            keyboardType={keyboardType}
            autoCompleteType={autoCompleteType}
            maxLength={maxLength}
            multiline={!!multiline}
            numberOfLines={5}
            onPress={() => Keyboard.dismiss()}
          />

          {!value && <Text style={styles.placeholder}>{placeholder}</Text>}

          {!!icon && <View style={styles.iconWrapper}>{icon}</View>}
        </View>
      </ShadowStyle>
    </View>
  );
};
