import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { ShadowStyle } from "../app/pages/components/ShadowStyle";

const DropdownMenu = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ["Limpeza", "Manutenção", "Lixo"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    if (!option) {
      console.error("Option cannot be null or undefined");
      return;
    }
    setSelectedOption(option);
    onSelect(option); // Aqui enviamos o valor selecionado de volta para o componente pai
    setIsOpen(false);
  };

  const renderDropdownMenu = () => {
    if (!options) {
      console.error("Options cannot be null or undefined");
      return null;
    }
    return options.map((option, index) => {
      if (!option) {
        console.error(`Option at index ${index} cannot be null or undefined`);
        return null;
      }
      return (
        <TouchableOpacity
          key={index}
          style={{
            paddingVertical: 10,
            borderColor: "#859A95",
            borderBottomWidth: 1,
            padding: 10,
            borderRadius: 10,
          }}
          onPress={() => handleOptionSelect(option)}
        >
          <Text style={styles.dropdownMenuItemText}>{option}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View
      style={{
        width: "100%",
        height: isOpen ? options.length * 57 : "auto",
      }}
    >
      <ShadowStyle>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={toggleDropdown}
          >
            <Text
              style={
                styles[selectedOption ? "dropdownButtonText" : "placeholder"]
              }
            >
              {selectedOption || "Selecione uma opção"}
            </Text>
          </TouchableOpacity>
          {isOpen && (
            <View style={styles.dropdownMenu}>{renderDropdownMenu()}</View>
          )}
        </View>
      </ShadowStyle>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 50,
    borderColor: "#859A95",
    borderWidth: 1,
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    justifyContent: "center",
  },
  dropdownButton: {
    backgroundColor: "transparent",
    height: "100%",
    justifyContent: "center",
  },
  dropdownButtonText: {
    fontSize: 15,
    paddingHorizontal: 10,
  },
  dropdownMenu: {
    position: "absolute",
    top: 53,
    width: "100%",
    backgroundColor: "#DDDDDD",
    elevation: 2,
    borderRadius: 10,
    borderColor: "#859A95",
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  dropdownMenuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  placeholder: {
    color: "#859A95",
    fontSize: 15,
    left: 10,
    fontWeight: "500",
  },
  dropdownMenuItemText: {
    fontSize: 15,
  },
});

export default DropdownMenu;
