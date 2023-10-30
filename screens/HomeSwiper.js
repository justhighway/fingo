import { View, Text, StyleSheet } from "react-native";
import React from "react";

import userData from "../data/userData.json";

export default function HomeSwiper() {
  return (
    <View style={styles.container}>
      <View style={styles.grayBox}>
        <Text>hi</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", // 아래로 정렬
    alignItems: "center", // 가운데 정렬
    bottom: 0,
    width: "100%",
    position: "absolute",
  },
  grayBox: {
    width: "100%",
    height: "50%", // 화면 아래쪽 50%만큼 높이
    backgroundColor: "gray",
  },
});
