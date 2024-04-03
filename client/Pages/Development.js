import React from "react";
import { View, Text } from "react-native";
import { LoginButton, CreateAccountButton, SystemButton, ResetPasswordButton, HomePageButton, NewRequestButton, LearnMoreButton, MyRequestsButton, OtherInformationButton } from "../Components/Buttons";

const Development = ({ navigation }) => (
  <View>
    <Text>Quick Path:</Text>
    <HomePageButton navigation={navigation} />
    <LoginButton navigation={navigation} />
    <CreateAccountButton navigation={navigation} />
    <SystemButton navigation={navigation} />
    <ResetPasswordButton navigation={navigation} />
    <NewRequestButton navigation={navigation} />
    <LearnMoreButton navigation={navigation} />
    <MyRequestsButton navigation={navigation} />
    <OtherInformationButton navigation={navigation} />
  </View>
);

export default Development;
