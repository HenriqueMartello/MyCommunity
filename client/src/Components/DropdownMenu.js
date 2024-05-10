import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { ShadowStyle } from "../app/pages/components/ShadowStyle";

const DropdownMenu = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const optionsList = ["Limpeza", "Manutenção", "Lixo"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionSelect = (option) => {
    if (!option) return;

    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const renderDropdownMenuItems = () => {
    return optionsList.map((option, index) => {
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
        height: isOpen ? optionsList.length * 57 : "auto",
      }}
    >
      <ShadowStyle>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={toggleDropdown}
          >
            <Text
              style={styles[selectedOption ? "dropdownButtonText" : "placeholder"]}
            >
              {selectedOption ? selectedOption : "Selecione uma opção"}
            </Text>
          </TouchableOpacity>
          {isOpen && <View style={styles.dropdownMenu}>{renderDropdownMenuItems()}</View>}
        </View>
      </ShadowStyle>
    </View>
  );
};

// I cleaned up the code by renaming variables to follow a more standard naming convention (e.g. `optionsList` instead of `options`), removing debugging statements, and improving readability by breaking up the render code into smaller functions. I also removed unnecessary semicolons and reformatted some of the code to make it easier to read.

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
