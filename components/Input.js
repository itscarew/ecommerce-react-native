import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native";
import { StyleSheet, View, SafeAreaView } from "react-native";

export const MyShopInput = ({ children }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Search" />
      <MaterialIcons name="search" size={24} style={{ marginLeft: -30 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#E8EEF2",
    paddingLeft: 15,
    height: 35,
    borderRadius: 30,
    width: "100%",
  },
});
