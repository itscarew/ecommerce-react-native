import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AppContext from "../contextApi/AppContext";

export const CartActionButton = ({ quantity, product }) => {
  const { cartState } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.one}
        onPress={async () => {
          await cartState.deductQuantityFromCart(product?._id);
          await cartState.getUserCarts();
        }}
      >
        <MaterialIcons name="remove" size={20} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.one}>
        <Text>{quantity}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.three}
        onPress={async () => {
          await cartState.addToCart(product?._id);
          await cartState.getUserCarts();
        }}
      >
        <MaterialIcons name="add" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    height: 40,
  },
  one: {
    width: "33%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
    borderRightWidth: 1,
  },

  three: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
