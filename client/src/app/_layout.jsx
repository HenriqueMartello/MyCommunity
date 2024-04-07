import { Stack } from "expo-router";

// Função responsável pelo roteamento das telas, bem como nome de exibição no container no cabeçalho.
export default function Layout() {
    return (
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="Login" options={{ title: "Login" }} />
        <Stack.Screen name="AlterarUsuario" options={{ title: "Alteração de Cadastro de Usuários" }} />
        <Stack.Screen name="ConsultaUsuarios" options={{ title: "Consulta de Usuários" }} />
        <Stack.Screen name="RegisterPage" options={{ title: "Cadastro de Usuário" }} />
        <Stack.Screen name="HomePage" options={{ title: "Tela Inicial" }} />
        <Stack.Screen name="LoginPage" options={{ title: "Tela de Login" }} />
        <Stack.Screen name="SystemPage" options={{ title: "Sistema" }} />
        <Stack.Screen name="Development" options={{ title: "Development" }} />
      </Stack>
    );
}
