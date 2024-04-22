import { Image } from "react-native";
import eye from "../../../assets/eye.png";
import eyeOff from "../../../assets/eye-off.png";

export const Icon = ({ variant, color }) => {
  return (
    //fix
    <Image
      source={variant === "eye" ? eye : eyeOff}
      style={{
        width: 25,
        height: 25,
      }}
    />
  );
};
