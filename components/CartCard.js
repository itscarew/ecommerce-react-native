import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { Touchable } from "react-native";
import { Pressable } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { ScrollView, TextInput } from "react-native";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Modal } from "react-native";
import { MyImage } from "./MyImage";
import AppContext from "../contextApi/AppContext";
import { useContext } from "react";
import { CartActionButton } from "./CartActionButton";

export const CartCard = ({ product, screen }) => {
  const navigation = useNavigation();
  const { modalState, cartState, userState } = useContext(AppContext);
  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate(screen, { id: product?._id })}
    >
      <MaterialIcons
        name="close"
        size={20}
        onPress={async () => {
          await cartState.removeFromCart(product?._id);
          await cartState.getUserCarts();
        }}
        style={{ position: "absolute", top: 5, right: 5, zIndex: 10 }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          position: "relative",
          width: "70%",
        }}
      >
        <View>
          <MyImage style={styles.image} imageData={product?.image} />
        </View>
        <View style={styles.titleRating}>
          <Text style={styles.title}>{product?.name}</Text>
          <CartActionButton />
        </View>
      </View>
      <View style={{ width: "15%" }}>
        <Text
          style={{
            fontWeight: "700",
            marginVertical: 5,
            paddingTop: 20,
            textAlign: "right",
          }}
        >
          ${product?.price}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 5,
    padding: 5,
    position: "relative",
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    marginRight: 10,
  },
  titleRating: {
    marginTop: 5,
  },
  title: {
    marginVertical: 10,
    fontSize: 14,
  },
  button: {
    width: "100%",
    backgroundColor: "#606c38",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginVertical: 5,
  },
  buttonText: {
    color: "#fff",
  },
});
