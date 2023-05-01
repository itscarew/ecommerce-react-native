import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { Dimensions } from "react-native";
import { Modal, SafeAreaView, StyleSheet } from "react-native";
import AppContext from "../contextApi/AppContext";

export const CartModal = ({ children }) => {
  const { modalState } = useContext(AppContext);
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
          {children}
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
    height: Dimensions.get("window").height / 1.5,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
});
