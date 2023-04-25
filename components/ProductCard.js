import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { ScrollView, TextInput } from "react-native";
import { StyleSheet, View, SafeAreaView } from "react-native";

export const ProductCard = ({ children }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.pexels.com/photos/9489161/pexels-photo-9489161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      />
      <View style={styles.titleRating}>
        <Text style={styles.title}>Mens Casual Premium</Text>
        <Text style={{ color: "#dda15e", fontWeight: "700", fontSize: 10 }}>
          5.3
        </Text>
      </View>
      <Text style={{ color: "gray" }}>men's clothing</Text>
      <Text style={{ fontWeight: "800", marginVertical: 5 }}>$ 100.4 </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
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
