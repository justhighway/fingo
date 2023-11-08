// StackNavigation.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import NavigateDrawer from "../components/NavigateDrawer";

const Stack = createStackNavigator();

const StackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => <NavigateDrawer navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ title: "Detail" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
