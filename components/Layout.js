import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import { CartModal } from "./CartModal";
import { Loader } from "./Spinner";

export const Layout = ({ children }) => {
  return (
    <>
      <CartModal />
      <Loader />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView style={[styles.container]}>
          <View style={{ flex: 1, width: "92%" }}>{children}</View>
        </SafeAreaView>
      </ScrollView>
    </>
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
