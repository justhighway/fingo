import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Advertise() {
  return <Image source={require("../assets/banner.png")} style={styles.size} />;
}

const styles = StyleSheet.create({
  size: {
    height: "33%",
    width: 350,
    borderRadius: 20,
  },
});
