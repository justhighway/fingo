import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomDate from "../components/CustomDate";
import AvaliableAmount from "../components/AvaliableAmount";
import HomeSwiper from "./HomeSwiper";
import Advertise from "../components/Advertise";
import GetWeather from "../utils/GetWeather";
import Login from "./Login";

export default function Home({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.text}>
          <CustomDate />
          <Text> . </Text>
          <GetWeather />
        </View>
        <AvaliableAmount />
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
    marginLeft: 30,
    marginTop: 130,
  },
  text: {
    flexDirection: "row",
  },
  ad: {
    alignItems: "center",
    marginBottom: 400,
    marginHorizontal: 30,
    backgroundColor: "#e0e0e0",
    borderRadius: 15,
    padding: 30,
  },
  menuButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
});
