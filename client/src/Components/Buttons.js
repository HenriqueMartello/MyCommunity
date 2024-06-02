import { Button } from "react-native";
import { useRouter } from "expo-router";

const LoginButton = () => {
  const router = useRouter();

  return <Button title="Login" onPress={() => router.push("/LoginPage")} />;
};

export { LoginButton };
