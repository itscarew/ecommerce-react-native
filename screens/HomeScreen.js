import { MaterialIcons } from "@expo/vector-icons";
import React, { useContext, useEffect } from "react";
import { StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { View, Text, Button, Image } from "react-native";
import { Layout } from "../components/Layout";
import { ProductCard } from "../components/ProductCard";
import AppContext from "../contextApi/AppContext";

function HomeScreen({ navigation }) {
  const { productState } = useContext(AppContext);
  useEffect(() => {
    productState.getProducts();
  }, []);

  return (
    <Layout>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.pexels.com/photos/4611700/pexels-photo-4611700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Summer came early! </Text>
          <Text style={styles.text2}>Shop on MyShop</Text>
        </View>

        <FlatList
          data={productState.products.slice(0, 4)}
          renderItem={({ item }) => {
            return <ProductCard product={item} screen={"DetailsStack"} />;
          }}
          keyExtractor={(item) => item?._id.toString()}
          scrollEnabled={false}
          numColumns={2}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Shop")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Keep Shopping</Text>
          <MaterialIcons name="arrow-right" size={24} />
        </TouchableOpacity>

        <Image
          style={[styles.image, { marginBottom: 20 }]}
          source={{
            uri: "https://images.pexels.com/photos/6311678/pexels-photo-6311678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
