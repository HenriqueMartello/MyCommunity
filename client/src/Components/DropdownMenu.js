import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4', 'Opção 5'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    if (!option) {
      console.error('Option cannot be null or undefined');
      return;
    }
    setSelectedOption(option);
    setIsOpen(false);
  };

  const renderDropdownMenu = () => {
    if (!options) {
      console.error('Options cannot be null or undefined');
      return null;
    }
    return (
      options.map((option, index) => {
        if (!option) {
          console.error(`Option at index ${index} cannot be null or undefined`);
          return null;
        }
        return (
          <TouchableOpacity
            key={index}
            style={styles.dropdownMenuItem}
            onPress={() => handleOptionSelect(option)}
          >
            <Text style={styles.dropdownMenuItemText}>{option}</Text>
          </TouchableOpacity>
        );
      })
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
        <Text style={styles.dropdownButtonText}>
          {selectedOption || 'Selecione uma opção'}
        </Text>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdownMenu}>
          {renderDropdownMenu()}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dropdownButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  dropdownButtonText: {
    fontSize: 16,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 40,
    backgroundColor: '#fff',
    width: 200,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropdownMenuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dropdownMenuItemText: {
    fontSize: 16,
  },
});

export default DropdownMenu;
