import React from "react";
import { View } from "react-native";
import { LoginButton, CreateAccountButton, SystemButton, ResetPasswordButton, NewRequestButton, LearnMoreButton, MyRequestsButton, OtherInformationButton } from "../Components/Buttons";

const Development = () => (
  <View>
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
