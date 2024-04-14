import { StyleSheet, TextInput, View, Text } from "react-native";

export const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = "false",
  keyboardType,
  autoCompleteType,
  maxLength,
  icon,
}) => {
  const styles = StyleSheet.create({
    inputWrapper: {
      height: 50,
      borderColor: "#859A95",
      borderWidth: 1,
      backgroundColor: "#EDEDED",
      width: "100%",
      borderRadius: 10,
      justifyContent: "center",
      boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
    },
    input: {
      width: "100%",
      height: "100%",
      position: "relative",
      zIndex: 2,
      padding: 10,
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
      top: "33%",
      fontSize: 15,
      left: 10,
      fontWeight: 500,
    },
  });
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCompleteType={autoCompleteType}
        maxLength={maxLength}
      />
      {!value && <Text style={styles.placeholder}>{placeholder}</Text>}

      {<View style={styles.iconWrapper}>{icon}</View>}
    </View>
  );
};
