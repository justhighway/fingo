import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import * as Location from "expo-location";
import WeatherIcons from "../data/WeatherIcons.json";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ALL_API_KEYS from "../data/ALL_API_KEYS.json";

const WEATHER_API = ALL_API_KEYS.WEATHER_API_KEY;

export default function GetWeather() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("위치 정보 권한 수락이 필요합니다.");
        return;
      }

      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API}`
      );
      const json = await response.json();
      const getMain = json.weather[0].main;
      setWeather(getMain);
    })();
  }, []);

  let text = "Loading..";
  if (errorMsg) {
    text = errorMsg;
  } else if (weather) {
    text = weather;
  }
  return <MaterialCommunityIcons name={WeatherIcons[weather]} size={22} />;
}
