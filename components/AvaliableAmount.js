import { View, Text, StyleSheet } from "react-native";
import React from "react";
import userData from "../data/userData.json";

export default function AvaliableAmount() {
  const formattedAmount = userData.amount.toLocaleString();
  return (
    <>
      <Text style={{ fontSize: 20, marginTop: 20 }}>
        오늘 사용 가능한 금액:
      </Text>
      <Text style={{ fontSize: 50, fontWeight: "bold" }}>
        {formattedAmount}원
      </Text>
    </>
  );
}
