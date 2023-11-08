// AuthNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../Login";
import SignUpEmail from "../screens/SignUpEmail";
import SignUpPwd from "../screens/SignUpPwd";
import SignUpPhone from "../screens/SignUpPhone";
import SignUpNameAndTerms from "../screens/SignUpNameAndTerms";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpEmail" headerMode="none">
        <Stack.Screen name="SignUpEmail" component={SignUpEmail} />
        <Stack.Screen name="SignUpPwd" component={SignUpPwd} />
        <Stack.Screen name="SignUpPhone" component={SignUpPhone} />
        <Stack.Screen
          name="SignUpNameAndTerms"
          component={SignUpNameAndTerms}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
