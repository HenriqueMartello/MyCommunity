import { View } from "react-native";

export const ContentWrapper = ({ children, style }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        background: "linear-gradient(#B9F6D5, #F9E3BA)",
        ...style,
      }}
    >
      {children}
    </View>
  );
};
