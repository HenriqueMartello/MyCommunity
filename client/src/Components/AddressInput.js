import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddressInput = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = text => setInputValue(text);

  const handleSubmit = () => {
    if (!onSubmit || typeof onSubmit !== 'function') return;
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o endereço"
        value={inputValue}
        onChangeText={handleInputChange}
      />
      { onSubmit && (
        <Button title="Enviar" onPress={handleSubmit} />
      )}
    </View>
  );
};

// Clean up the code by standardizing variable names, removing debugging statements, improving readability, and more.

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default AddressInput;
