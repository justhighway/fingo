import { View, Text } from "react-native";
import React from "react";
import userData from "../data/userData.json";

export default function AvaliableAmount() {
  return <>{userData.amount}원</>;
}
