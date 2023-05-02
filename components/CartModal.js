import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import {
  Dimensions,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import AppContext from "../contextApi/AppContext";
import { CartCard } from "./CartCard";

export const CartModal = () => {
  const { modalState, cartState } = useContext(AppContext);
  const navigation = useNavigation();
  return (
    <Modal
      animationType="slide"
      visible={modalState.cartModal}
      transparent={true}
    >
      <SafeAreaView style={styles.modalContainer}>
        <SafeAreaView style={styles.contentContainer}>
          <MaterialIcons
            style={styles.closeButton}
            name="close"
            size={30}
            onPress={() => {
              modalState.closeCartModal();
            }}
          />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 16,
              fontWeight: "600",
              marginBottom: 15,
            }}
          >
            MyShop cart
          </Text>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {cartState.carts[0]?.products?.map((item) => {
              return (
                <CartCard
                  key={item._id}
                  product={item.productId}
                  screen={"DetailsStack"}
                  quantity={item.quantity}
                  isCartModal
                />
              );
            })}
          </ScrollView>
          <TouchableOpacity
            style={[styles.button1, { marginVertical: 10 }]}
            onPress={() => {
              modalState.closeCartModal();
              navigation.navigate("Cart");
            }}
          >
            <Text style={styles.buttonText1}>Go to cart </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 0,
  },
  contentContainer: {
    height: Dimensions.get("window").height / 1.3,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  button1: {
    width: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginBottom: 18,
  },
  buttonText1: {
    color: "#fff",
  },
});
