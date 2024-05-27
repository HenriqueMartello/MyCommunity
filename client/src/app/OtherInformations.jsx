import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from 'expo-router'

const router = useRouter();
const OtherInformations = () => {

    return (
        <View>
            <Text>OtherInformations</Text>
            <Text>Números Importantes</Text>
            <Text>Bombeiros: 00 000 000</Text>
            <Text>Defesa Civil: 00 000 000</Text>
            <Text>Prefeitura: 00 000 000</Text>
            <Text>Polícia Militar: 00 000 000</Text>
            <Text>Samu: 00 000 000</Text>
            <Button
            title='Voltar'
            onPress={()=> router.push("System")}
            />
        </View>
    )
}

export default OtherInformations;