import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProductApi } from "../api/api";
import { CartActionButton } from "../components/CartActionButton";
import { Layout } from "../components/Layout";
import AppContext from "../contextApi/AppContext";

function DetailsScreen({ route }) {
  const { cartState, modalState } = useContext(AppContext);
  const { id } = route.params;

  const [product, setProduct] = useState();
  const getOneProduct = async () => {
    try {
      const res = await ProductApi.get(`/${id}`);
      setProduct(res?.data?.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getOneProduct();
  }, []);
  return (
    <Layout>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text1}>{product?.name}</Text>
          <Text style={styles.text2}>${product?.price} </Text>
          <Text style={styles.text3}>{product?.description}</Text>
          <Text style={styles.text4}>Category: {product?.category} </Text>
          <Text style={styles.text5}>Rating: {product?.rating} </Text>
        </View>

        {cartState.checkInCart(product?._id) ? (
          <View style={{ marginBottom: 50 }}>
            <CartActionButton
              quantity={cartState.checkInCart(product._id)?.quantity}
              product={product}
            />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              await cartState.addToCart(product?._id);
              await cartState.getUserCarts();
              modalState.openCartModal();
            }}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
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
    height: 40,
    marginBottom: 50,
  },
  buttonText: {
    color: "#fff",
  },
});

export default DetailsScreen;
