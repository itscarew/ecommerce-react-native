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

export const ProductCard = ({ product, screen }) => {
  const navigation = useNavigation();
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
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
