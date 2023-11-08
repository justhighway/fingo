import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function NavigateDrawer() {
  const navigation = useNavigation();
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <MaterialCommunityIcons name="menu" size={"40%"} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    top: "8%",
    left: "10%",
  },
});
