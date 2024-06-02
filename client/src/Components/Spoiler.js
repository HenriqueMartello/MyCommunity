import React, { useState } from "react";
import { Text, Pressable, StyleSheet, View } from "react-native";
import { ShadowStyle } from "../app/pages/components/ShadowStyle";

const Spoiler = ({ title, content }) => {
  const [isSpoilerShown, setIsSpoilerShown] = useState(false);
  const toggleSpoiler = () => setIsSpoilerShown(!isSpoilerShown);

  return (
    <ShadowStyle>
      <Pressable
        onPress={toggleSpoiler}
        style={[
          styles.wrapperDefault,
          isSpoilerShown ? styles.openedWrapper : styles.closedWrapper,
        ]}
      >
        {isSpoilerShown && (
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{title}</Text>
          </View>
        )}
        <Text style={isSpoilerShown ? styles.content : styles.label}>
          {isSpoilerShown ? content : title}
        </Text>
      </Pressable>
    </ShadowStyle>
  );
};

export default Spoiler;

const styles = StyleSheet.create({
  wrapperDefault: {
    borderColor: "#397688",
    borderWidth: 1,
    borderRadius: 8,
  },
  closedWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  openedWrapper: { backgroundColor: "#EDEDED" },
  label: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
    color: "#397688",
  },
  content: {
    fontSize: 15,
    padding: 10,
  },
  titleWrapper: {
    borderTopStartRadius: 7,
    borderTopEndRadius: 7,
    backgroundColor: "#397688",
  },
  title: {
    color: "white",
    textAlign: "center",
    padding: 8,
    fontSize: 15,
    fontWeight: "600",
  },
});
