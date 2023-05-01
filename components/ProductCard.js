import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AppContext from "../contextApi/AppContext";
import { CartActionButton } from "./CartActionButton";
import { MyImage } from "./MyImage";

export const ProductCard = ({ product, screen }) => {
  const navigation = useNavigation();

  const { cartState } = useContext(AppContext);
  return (
    <>
      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate(screen, { id: product?._id })}
      >
        <MyImage style={styles.image} imageData={product?.image} />

        <View style={styles.titleRating}>
          <Text style={styles.title}>{product?.name}</Text>
          <Text style={{ color: "#dda15e", fontWeight: "700", fontSize: 10 }}>
            {product?.rating}
          </Text>
        </View>
        <Text style={{ color: "gray" }}>{product?.category}</Text>
        <Text style={{ fontWeight: "800", marginVertical: 5 }}>
          $ {product?.price}
        </Text>
        {cartState.checkInCart(product?._id) ? (
          <CartActionButton
            quantity={cartState.checkInCart(product._id)?.quantity}
            product={product}
          />
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              await cartState.addToCart(product?._id);
              await cartState.getUserCarts();
            }}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "50%",
    marginVertical: 5,
    padding: 5,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  titleRating: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  title: {
    overflow: "hidden",
  },
  button: {
    width: "100%",
    backgroundColor: "#606c38",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  buttonText: {
    color: "#fff",
  },
});
