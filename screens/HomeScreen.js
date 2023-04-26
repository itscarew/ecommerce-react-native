import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, Button, Image } from "react-native";
import { Layout } from "../components/Layout";
import { ProductCard } from "../components/ProductCard";

function HomeScreen({ navigation }) {
  return (
    <Layout>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.pexels.com/photos/9489161/pexels-photo-9489161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Summer came early! </Text>
          <Text style={styles.text2}>Shop on MyShop</Text>
        </View>

        <View style={styles.cardContainer}>
          <ProductCard screen={"DetailsStack"} />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Shop")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Keep Shopping</Text>
          <MaterialIcons name="arrow-right" size={24} />
        </TouchableOpacity>

        <Image
          style={styles.image}
          source={{
            uri: "https://images.pexels.com/photos/16248150/pexels-photo-16248150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
        />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  text1: {
    textTransform: "uppercase",
    fontWeight: "600",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text2: { textTransform: "uppercase", color: "gray", fontSize: 12 },
  button: {
    flexDirection: "row",
    width: "100%",
    borderColor: "#000",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    marginVertical: 15,
  },
  buttonText: {
    textTransform: "uppercase",
  },
});

export default HomeScreen;
