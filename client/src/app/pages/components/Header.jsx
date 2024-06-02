import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import arrowLeft from "./../../../assets/arrow-left.png";
import { useRouter } from "expo-router";

export const Header = ({ title }) => {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Image source={arrowLeft} style={{ width: 15, height: 15 }} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    borderBottomLeftRadius: 18,
    borderBottomEndRadius: 18,
    paddingTop: 70,
    paddingBottom: 20,
    paddingHorizontal: 20,
    gap: 20,
    alignContent: "center",
    backgroundColor: "#397688",
    marginBottom: -10,
    zIndex: 10,
    flexDirection: "row",
  },
  backButton: {
    backgroundColor: "#B2AAAA7f",
    borderRadius: 50,
    paddingRight: 9,
    paddingVertical: 10,
    paddingLeft: 11,
  },
  presseable: {
    backgroundColor: "#397688",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    alignSelf: "center",
  },
});
