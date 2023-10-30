import { View, Text } from "react-native";
import React from "react";
import CustomDate from "../components/CustomDate";
import AvaliableAmount from "../components/AvaliableAmount";
import HomeSwiper from "./HomeSwiper";

export default function Home() {
  return (
    <>
      <CustomDate style={{ backgroundColor: "pink" }} />
      <Text>오늘 사용할 수 있는 금액:</Text>
      <AvaliableAmount />
      <HomeSwiper />
    </>
  );
}
