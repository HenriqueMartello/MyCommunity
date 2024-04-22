import { View } from "react-native";
import { Shadow } from "react-native-shadow-2";

export const ShadowStyle = ({ children }) => {
  return (
    <View style={{ width: "100%" }}>
      <Shadow
        distance={5}
        startColor={"#00000040"}
        containerViewStyle={{
          width: "100%",
        }}
        offset={[3, 3]}
        childrenViewProps={{ width: "100%" }}
      >
        {children}
      </Shadow>
    </View>
  );
};
