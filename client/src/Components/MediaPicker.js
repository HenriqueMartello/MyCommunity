import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

const MediaPicker = () => {
  const [mediaUri, setMediaUri] = useState(null);

  const pickMedia = async () => {
    try {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          throw new Error("Permissões de acesso à mídia negadas");
        }
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setMediaUri(result.uri);
      }
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao selecionar a mídia: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 10,
          borderWidth: 1,
          width: "100%",
          alignItems: "center",
          borderColor: "#397688",
        }}
        onPress={pickMedia}
      >
        <Text style={{ color: "#397688", fontWeight: "bold", fontSize: 16 }}>
          Selecionar Mídia
        </Text>
      </TouchableOpacity>

      {mediaUri && <Image source={{ uri: mediaUri }} style={styles.media} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  media: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
  },
});

export default MediaPicker;
