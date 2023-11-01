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
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 5,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#aaa",
  },
  text: {
    color: "#fff",
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default HorizonLine;
