import { ActivityIndicator } from "react-native";
import { StyleSheet, Text } from "react-native";
import { Layout } from "./Layout";

export const Loader = () => {
  return (
    <Layout style={styles.loadingContainer}>
      <ActivityIndicator
        size="large"
        color="#606c38"
        style={{ marginTop: 30 }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
