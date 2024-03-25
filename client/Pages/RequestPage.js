import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import MediaPicker from '../Components/MediaPicker'; // Componente criado anteriormente
import AddressInput from '../Components/AddressInput'; // Componente criado anteriormente
import DropdownMenu from '../Components/DropdownMenu';
import { Header } from '../Components/Header';

const RequestPage = ( { navigation }) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [mediaUri, setMediaUri] = useState(null);

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const handleAddressSubmit = (newAddress) => {
    setAddress(newAddress);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  const handleMediaSelect = (uri) => {
    setMediaUri(uri);
  };

  const handleSubmit = () => {
    // Aqui você pode enviar as informações para o backend
    console.log('Item selecionado:', selectedItem);
    console.log('Endereço:', address);
    console.log('Descrição:', description);
    console.log('URI da mídia:', mediaUri);
    // Limpar campos após o envio
    setSelectedItem('');
    setAddress('');
    setDescription('');
    setMediaUri(null);
  };

  return (
    <View style={styles.container}>
      <Header username="Usuário" onLogout={() => console.log('Logout')}></Header>
      <Text>Nova Solicitação</Text>
      {/* Dropdown para selecionar um item */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Selecione um Item:</Text>
        <DropdownMenu onSelect={handleItemSelect} />
      </View>

      {/* Campo de entrada para digitar um endereço */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Endereço:</Text>
        <AddressInput onSubmit={handleAddressSubmit} />
      </View>

      {/* Campo de entrada para digitar uma descrição */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descrição:</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Digite uma descrição"
          value={description}
          onChangeText={handleDescriptionChange}
        />
      </View>

      {/* Componente para selecionar uma foto ou vídeo */}
      <MediaPicker onSelect={handleMediaSelect} />

      {/* Botão para enviar a solicitação */}
      <Button title="Enviar Solicitação" onPress={handleSubmit} />
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
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
