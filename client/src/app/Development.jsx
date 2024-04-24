import React from "react";
import { View, Button } from "react-native";
import { LoginButton, CreateAccountButton, SystemButton, ResetPasswordButton, NewRequestButton, LearnMoreButton, MyRequestsButton, OtherInformationButton } from "../Components/Buttons";
import { useRouter } from 'expo-router'

const router = useRouter();

const Development = ({ navigation }) => (
  <View>
    <LoginButton navigation={navigation} />
    <CreateAccountButton navigation={navigation} />
    <SystemButton navigation={navigation} />
    <ResetPasswordButton navigation={navigation} />
    <NewRequestButton navigation={navigation} />
    <LearnMoreButton navigation={navigation} />
    <MyRequestsButton navigation={navigation} />
    <OtherInformationButton navigation={navigation} />
    <Button
      title='Voltar'
      onPress={()=> router.push("/")}
      />
  </View>
);

export default Development;
