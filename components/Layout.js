import { ScrollView } from "react-native";
import { StyleSheet, View, SafeAreaView } from "react-native";

export const Layout = ({ children }) => {
  return (
    <ScrollView>
      <SafeAreaView style={[styles.container]}>
        <View style={{ flex: 1, width: "92%" }}>{children}</View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    position: "relative",
    alignItems: "center",
  },
});
