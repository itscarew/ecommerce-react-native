import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";

export const CartActionButton = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <MaterialIcons name="remove" size={20} onPress={async () => {}} />
      </View>
      <View style={styles.one}>
        <Text>5</Text>
      </View>
      <View style={styles.three}>
        <MaterialIcons name="add" size={20} onPress={async () => {}} />
      </View>
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
    marginVertical: 5,
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
