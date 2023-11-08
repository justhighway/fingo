// components/NavigateCalendar.js
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function NavigateCalendar() {
  const navigation = useNavigation();

  const goToDetail = () => {
    navigation.navigate("Detail");
  };

  return (
    <TouchableOpacity style={styles.headerIconContainer} onPress={goToDetail}>
      <MaterialCommunityIcons
        name="calendar-month"
        size={"33%"}
        color="white"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  headerIconContainer: {
    position: "absolute",
    top: "8%",
    right: "10%",
  },
});
