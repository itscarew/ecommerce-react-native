import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Layout } from "../components/Layout";

function DetailsScreen({ navigation }) {
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
          <Text style={styles.text1}>
            Mens Casual Premium Slim Fit T-Shirts
          </Text>
          <Text style={styles.text2}>$22.30</Text>
          <Text style={styles.text3}>
            Slim-fitting style, contrast raglan long sleeve, three-button henley
            placket, light weight & soft fabric for breathable and comfortable
            wearing.
          </Text>
          <Text style={styles.text4}>Category: Men</Text>
          <Text style={styles.text5}>Rating: 4.1</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  textContainer: {
    display: "flex",
    paddingVertical: 10,
  },
  text1: {
    fontWeight: "400",
    fontSize: 18,
  },
  text2: { fontWeight: "700", fontSize: 18, marginVertical: 5 },
  text3: {
    color: "gray",
    fontSize: 12,
    fontWeight: "600",
    marginVertical: 5,
  },
  text4: {
    color: "gray",
    fontSize: 12,
    marginVertical: 5,
  },
  text5: {
    textTransform: "uppercase",
    color: "#606c38",
    fontSize: 12,
    marginVertical: 5,
  },
  button: {
    width: "100%",
    backgroundColor: "#606c38",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginBottom: 50,
  },
  buttonText: {
    color: "#fff",
  },
});

export default DetailsScreen;
