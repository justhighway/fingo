import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomDate from "../components/CustomDate";
import AvaliableAmount from "../components/AvaliableAmount";
import HomeSwiper from "./HomeSwiper";
import Advertise from "../components/Advertise";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.text}>
          <CustomDate />
          <AvaliableAmount />
        </View>
      </View>
      <View style={styles.ad}>
        <Advertise />
      </View>
      <HomeSwiper />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  text: {
    marginLeft: 30,
    marginTop: 130,
  },
  ad: {
    alignItems: "center",
    marginBottom: 430,
    marginHorizontal: 30,
    backgroundColor: "#e0e0e0",
    borderRadius: 15,
    padding: 30,
  },
});
