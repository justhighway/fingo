import { Text } from "react-native";
import React from "react";

export default function CustomDate() {
  const today = new Date();

  const formattedDate = `${today.getFullYear()}. ${
    today.getMonth() + 1
  }. ${today.getDate()} ${getDay()}`;

  function getDay() {
    const weekday = ["(일)", "(월)", "(화)", "(수)", "(목)", "(금)", "(토)"];
    const date = weekday[today.getDay()];
    return date;
  }

  return <Text style={{ fontSize: 20 }}>{formattedDate}</Text>;
}
