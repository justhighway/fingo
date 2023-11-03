// AuthNavigator.js:
import { createStackNavigator } from "@react-navigation/stack";
import SignUpEmail from "../screens/signUp/screens/SignUpEmail";
import SignUpPwd from "../screens/SignUpPwd";
import SignUpPhone from "../screens/SignUpPhone";
import SignUpNameAndTerms from "../screens/SignUpNameAndTerms";

const Stack = createStackNavigator();

const SignUpNavigator = () => (
  <Stack.Navigator initialRouteName="SignUpEmail">
    <Stack.Screen name="SignUpEmail" component={SignUpEmail} />
    <Stack.Screen name="SignUpPwd" component={SignUpPwd} />
    <Stack.Screen name="SignUpPhone" component={SignUpPhone} />
    <Stack.Screen name="SignUpNameAndTerms" component={SignUpNameAndTerms} />
  </Stack.Navigator>
);

export default SignUpNavigator;
