// screens/Home.js
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomDate from "../components/CustomDate";
import Advertise from "../components/Advertise";
import GetWeather from "../utils/GetWeather";
import NavigateDrawer from "../components/NavigateDrawer";
import NavigateCalendar from "../components/NavigateCalendar";
import BotSheet from "../components/BotSheet";
import AvaliableAmount from "../components/AvaliableAmount";

export default function Home({ navigation }) {
  const [isBotSheetVisible, setBotSheetVisible] = useState(false);

  const openBotSheet = () => {
    setBotSheetVisible(true);
  };

  const closeBotSheet = () => {
    setBotSheetVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.text}>
          <CustomDate />
          <GetWeather />
        </View>
        <View style={styles.amount}>
          <AvaliableAmount style={styles.amount} />
        </View>
        <View style={styles.ad}>
          <Advertise />
        </View>
      </View>
      <NavigateDrawer />
      <NavigateCalendar />
      <BotSheet isVisible={isBotSheetVisible} onClose={closeBotSheet} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
    backgroundColor: "#18d6c0",
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "10%",
    color: "white",
  },
  amount: {
    marginLeft: "10%",
    marginBottom: "5%",
    color: "white",
  },
  ad: {
    alignSelf: "center",
    paddingTop: 30,
  },
});
