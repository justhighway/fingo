// components/BotSheet.js
import React, { useCallback, useMemo } from "react";
import { View, StyleSheet, Text } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import userData from "../data/userData.json";

const BotSheet = ({ isVisible, onClose }) => {
  const data = useMemo(() => {
    const spendingData = userData.spendingDetail;
    if (
      spendingData &&
      spendingData.place &&
      spendingData.price &&
      spendingData.date
    ) {
      return spendingData.place.map((place, index) => ({
        id: index.toString(),
        place,
        price: spendingData.price[index],
        date: spendingData.date[index],
      }));
    }
    return [];
  }, []);

  const snapPoints = useMemo(() => ["43%", "58%", "85%"], []);

  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.itemContainer}>
        <View style={styles.placeDate}>
          <Text style={styles.text}>{item.place}</Text>
          <Text style={styles.text}>{item.date}</Text>
        </View>
        <Text style={styles.priceText}>-{item.price.toLocaleString()}</Text>
      </View>
    ),
    []
  );

  return (
    <BottomSheet
      isVisible={isVisible}
      onClose={onClose}
      snapPoints={snapPoints}
      onChange={handleSheetChange}
      backgroundStyle={{
        borderTopLeftRadius: 35, // 좌측 상단 모서리
        borderTopRightRadius: 35, // 우측 상단 모서리
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
      }}
    >
      <Text style={styles.spendDetail}>지출내역</Text>
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
      />
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "white",
    padding: "3%",
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  spendDetail: {
    marginLeft: "6%",
    color: "gray",
    fontWeight: "bold",
    padding: 10,
    marginBottom: 10,
  },
  placeDate: {
    marginLeft: "15%",
  },
  text: {
    fontSize: 16, // 텍스트 크기 조절
    marginBottom: 5,
  },
  priceText: {
    fontSize: 16, // 텍스트 크기 조절
    fontWeight: "600",
    color: "#18d6c0",
  },
});

export default BotSheet;
