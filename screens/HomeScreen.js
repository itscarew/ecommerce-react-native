import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Button, Image } from "react-native";
import { Layout } from "../components/Layout";

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
  text2: { textTransform: "uppercase", color: "gray", fontSize: 12 },
});

export default HomeScreen;
