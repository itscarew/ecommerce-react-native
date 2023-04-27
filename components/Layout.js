import { ScrollView } from "react-native";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { MainModal } from "./Modal";

export const Layout = ({ children }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={[styles.container]}>
        <View style={{ flex: 1, width: "92%" }}>{children}</View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    position: "relative",
    alignItems: "center",
  },
});
