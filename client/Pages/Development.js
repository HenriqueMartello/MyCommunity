import React from "react";
import { View, Text } from "react-native";
import { HomePageButton, LoginButton, NovaSolicitacaoButton, ResetPasswordButton, CadastroButton, SistemaButton } from "../Components/Buttons";

const Development = ({ navigation  }) => {
    return(
        <View> 
            <Text>Quick Path:</Text>
            <HomePageButton navigation={navigation} />
            <LoginButton navigation={navigation} />
            <CadastroButton navigation={navigation} />
            <SistemaButton navigation={navigation} />
            <ResetPasswordButton navigation={navigation} />
            <NovaSolicitacaoButton navigation={navigation} />
        </View>
    );
};

export default Development;
