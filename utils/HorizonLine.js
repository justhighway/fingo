import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HorizonLine = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#aaa",
  },
  text: {
    color: "#aaa",
    paddingHorizontal: 16,
    fontSize: 14,
  },
});

export default HorizonLine;
