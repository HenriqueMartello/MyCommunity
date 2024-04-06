import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import MediaPicker from '../Components/MediaPicker'; 
import DropdownMenu from '../Components/DropdownMenu';
import { Header } from '../Components/Header';

const RequestPage = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [mediaUri, setMediaUri] = useState(null);

  const handleItemSelect = (item) => {
    if (!item) return;
    setSelectedItem(item);
  };

  const handleAddressSubmit = (newAddress) => {
    if (!newAddress) return;
    setAddress(newAddress);
  };

  const handleDescriptionChange = (text) => {
    if (!text) return;
    setDescription(text);
  };

  const handleMediaSelect = (uri) => {
    if (!uri) return;
    setMediaUri(uri);
  };

  const handleSubmit = () => {
    if (!selectedItem || !address || !description || !mediaUri) {
      console.error('Missing required fields');
      return;
    }
    console.log('Item selected:', selectedItem);
    console.log('Address:', address);
    console.log('Description:', description);
    console.log('Media URI:', mediaUri);
    setSelectedItem('');
    setAddress('');
    setDescription('');
    setMediaUri(null);
  };

  return (
    <View style={styles.container}>
      <Header username="Usuário" onLogout={() => console.log('Logout')} />
      <Text>Nova Solicitação</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Selecione um Item:</Text>
        <DropdownMenu onSelect={handleItemSelect} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Endereço:</Text>
        <TextInput
          style={[styles.input, { height: 40 }]}
          onChangeText={text => setAddress(text)}
          value={address}
          placeholder="Enter your address"
          multiline={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descrição:</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Digite uma descrição"
          onChangeText={handleDescriptionChange}
          value={description}
        />
      </View>
      <MediaPicker onSelect={handleMediaSelect} />
      <Button title="Enviar Solicitação" onPress={handleSubmit} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
});

export default RequestPage;
