import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddressInput = ({ onSubmit }) => {
  const [address, setAddress] = useState('');

  const handleInputChange = (text) => {
    if(text === null) {
      return;
    }
    setAddress(text);
  };

  const handleSubmit = () => {
    if(!onSubmit || typeof onSubmit !== 'function') {
      return;
    }
    onSubmit(address);
    setAddress('');
  };

  return (
    <View style={styles.container}>
      { address === null ? null : (
        <TextInput
          style={styles.input}
          placeholder="Digite o endereço"
          value={address}
          onChangeText={handleInputChange}
        />
      )}
      { onSubmit === null || typeof onSubmit !== 'function' ? null : (
        <Button title="Enviar" onPress={handleSubmit} />
      )}
    </View>
  );
};

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
