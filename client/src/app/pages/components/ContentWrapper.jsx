import { LinearGradient } from "expo-linear-gradient";

export const ContentWrapper = ({ children, style }) => {
  return (
    <LinearGradient
      colors={["#B9F6D5", "#F9E3BA"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.6 }}
      style={{
        ...style,
        flex: 1,
        alignItems: "center",
      }}
    >
      {children}
    </LinearGradient>
  );
};
