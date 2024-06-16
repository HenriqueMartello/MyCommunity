import { Stack } from "expo-router";

// Função responsável pelo roteamento das telas, bem como nome de exibição no container no cabeçalho.
export default function Layout() {
    return (
      <Stack screenOptions={{headerShown: false}}>
      </Stack>
    );
}
