import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Button } from "react-native";

function CartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text1}>Your bag is empty </Text>
      <Text style={styles.text2}>Add products and they will appear here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    textTransform: "uppercase",
    fontWeight: "600",
  },
  text2: {
    textTransform: "uppercase",
    color: "gray",
    fontSize: 10,
    marginTop: 10,
  },
});

export default CartScreen;
