import { ScrollView } from "react-native";
import { StyleSheet, View, Text } from "react-native";

export const SplashScreenComponent = () => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>My Shop</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
