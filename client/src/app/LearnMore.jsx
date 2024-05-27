import React from "react";
import { View, Text, Button } from "react-native";
import Spoiler from "../Components/Spoiler";
import { useRouter } from 'expo-router'

const router = useRouter();
const LearnMore = () => {

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Text>Learn more</Text>
      <Spoiler title="Lixo Reciclável" text="This is the hidden text that will be revealed when the button is clicked." />
      <Spoiler title="Lixo Não Reciclável" text="This is the hidden text that will be revealed when the button is clicked." />
      <Spoiler title="Vidros Quebrados" text="This is the hidden text that will be revealed when the button is clicked." />
      <Spoiler title="Restos de Materiais de Construção" text="This is the hidden text that will be revealed when the button is clicked." />
      <Spoiler title="Lixo Eletrônico" text="This is the hidden text that will be revealed when the button is clicked." />
      <Spoiler title="Ciclo do Lixo" text="This is the hidden text that will be revealed when the button is clicked." />
      <Button
      title='Voltar'
      onPress={()=> router.push("System")}
      />
    </View>
  );
};

export default LearnMore;