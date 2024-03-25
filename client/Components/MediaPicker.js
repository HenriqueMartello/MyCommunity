import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

const MediaPicker = () => {
  const [mediaUri, setMediaUri] = useState(null);

  const pickMedia = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos das permissões de acesso à mídia para fazer isso funcionar!');
        return;
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setMediaUri(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={pickMedia}>
        <Text style={styles.buttonText}>Selecionar Mídia</Text>
      </TouchableOpacity>

      {mediaUri && <Image source={{ uri: mediaUri }} style={styles.media} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  media: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
  },
});

export default MediaPicker;
