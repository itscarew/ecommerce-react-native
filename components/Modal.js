import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { Modal, SafeAreaView, StyleSheet } from "react-native";
import AppContext from "../contextApi/AppContext";

export const MainModal = ({ children }) => {
  const { modalState } = useContext(AppContext);
  return (
    <Modal animationType="slide" visible={modalState.modal}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialIcons
          style={styles.closeButton}
          name="close"
          size={30}
          onPress={() => {
            modalState.closeModal();
          }}
        />
        {children}
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 30,
    right: 20,
    zIndex: 100,
  },
});
