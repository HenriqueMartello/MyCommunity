import React from "react";
import { View, Text, Button } from "react-native";

const OtherInformations = ({ navigation } ) => {

    return (
        <View>
            <Text>OtherInformations</Text>
            <Text>Números Importantes</Text>
            <Text>Bombeiros: 00 000 000</Text>
            <Text>Defesa Civil: 00 000 000</Text>
            <Text>Prefeitura: 00 000 000</Text>
            <Text>Polícia Militar: 00 000 000</Text>
            <Text>Samu: 00 000 000</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default OtherInformations;