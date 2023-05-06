import { useContext } from "react";
import { ActivityIndicator } from "react-native";
import { StyleSheet, View } from "react-native";
import AppContext from "../contextApi/AppContext";

export const Loader = () => {
  const { loaderState } = useContext(AppContext);
  return (
    <>
      {loaderState.loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="large"
            color="#606c38"
            style={{ marginTop: 30 }}
          />
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    position: "absolute",
    alignSelf: "center",
    zIndex: 10,
  },
});
