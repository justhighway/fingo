// CustomDrawerContent.js

import React, { useEffect, useState } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import userData from "../data/userData.json";

const CustomDrawerContent = (props) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // userData.json에서 사용자 정보 가져오기
    setUserName(userData.userName);
  }, []);

  return (
    <DrawerContentScrollView {...props}>
      {/* 사용자 정보 표시 부분 */}
      <View style={styles.userInfoContainer}>
        <Text style={styles.userInfoText}>
          안녕하세요,
          {"\n"}
          {userName}님
        </Text>
      </View>

      {/* Drawer 아이템들 */}
      <DrawerItem
        label="HOME"
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        )}
        onPress={() => props.navigation.navigate(" ")}
        style={
          props.state.routeNames.includes(" ") ? styles.drawerItemActive : null
        }
      />
      <DrawerItem
        label="ABOUT"
        icon={({ color, size }) => (
          <MaterialCommunityIcons
            name="information"
            color={color}
            size={size}
          />
        )}
        onPress={() => props.navigation.navigate("About")}
        style={
          props.state.routeNames.includes("About")
            ? styles.drawerItemActive
            : null
        }
      />
      {/* 다른 Drawer 아이템들 추가할 수 있음 */}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  userInfoContainer: {
    padding: 16,
    // 배경색 제거
  },
  userInfoText: {
    fontSize: 18,
    color: "black",
    marginLeft: 10,
  },
});

export default CustomDrawerContent;
