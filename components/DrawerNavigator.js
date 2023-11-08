import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import About from "../screens/About";
import CustomDrawerContent from "./CustomDrawerNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "cyan",
        drawerActiveTintColor: "white",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name=" "
        component={StackNavigator}
        options={{
          drawerLabel: "HOME",
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerLabel: "ABOUT",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
