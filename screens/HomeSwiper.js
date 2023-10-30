import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SwipeUpDown from "react-native-swipe-up-down";
import userData from "../data/userData.json";
import { Shadow } from "react-native-shadow-2";
import DashedLine from "react-native-dashed-line";

export default function HomeSwiper() {
  const renderCardItems = () => {
    return userData.spendingDetail.place.map((place, index) => (
      <View key={index} style={styles.objCard}>
        <View style={styles.rowContainer}>
          <Text style={styles.placeText}>{place}</Text>
          <Text style={styles.priceText}>
            -{userData.spendingDetail.price[index].toLocaleString()}
          </Text>
        </View>
        <Text style={styles.dateText}>
          {userData.spendingDetail.date[index]}
        </Text>
        <DashedLine
          dashLength={3}
          dashColor="#cccccc"
          dashStyle={{ borderRadius: 5 }}
        />
      </View>
    ));
  };

  return (
    <SwipeUpDown
      itemMini={() => (
        <View style={styles.fullPanel}>
          <ScrollView style={styles.fullPanelContent}>
            {renderCardItems()}
          </ScrollView>
        </View>
      )}
      itemFull={() => (
        <ScrollView style={styles.fullPanel}>
          <View style={styles.fullPanelContent}>{renderCardItems()}</View>
        </ScrollView>
      )}
      animation="easeInEaseOut"
      swipeHeight={350}
      extraMarginTop={50}
      disableSwipeIcon={true}
    />
  );
}

const styles = StyleSheet.create({
  fullPanel: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 40,
    flex: 1, // 새로 추가된 부분
  },
  fullPanelContent: {
    flex: 1,
  },
  objCard: {
    padding: 15,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  placeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  priceText: {
    fontSize: 16,
  },
  dateText: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
  },
});
