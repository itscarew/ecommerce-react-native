import React from "react";
import {
  View,
  Text,
  Button,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Layout } from "../components/Layout";
import { ProductCard } from "../components/ProductCard";

function ShopScreen({ navigation }) {
  const layout = useWindowDimensions();

  const FirstRoute = () => (
    <Layout>
      <View style={styles.cardContainer}>
        <ProductCard screen={"DetailsStack"} />
      </View>
    </Layout>
  );

  const SecondRoute = () => (
    <Layout>
      <View style={styles.cardContainer}>
        <ProductCard screen={"DetailsStack"} />
      </View>
    </Layout>
  );

  const ThirdRoute = () => (
    <Layout>
      <View style={styles.cardContainer}>
        <ProductCard screen={"DetailsStack"} />
      </View>
    </Layout>
  );

  const FourthRoute = () => (
    <Layout>
      <View style={styles.cardContainer}>
        <ProductCard screen={"DetailsStack"} />
      </View>
    </Layout>
  );

  const renderScene = SceneMap({
    men: FirstRoute,
    women: SecondRoute,
    jewelry: ThirdRoute,
    electronics: FourthRoute,
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "men", title: "Men" },
    { key: "women", title: "Women" },
    { key: "jewelry", title: "Jewelry" },
    { key: "electronics", title: "Electronics" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#606c38" }}
      style={{ backgroundColor: "#fff" }}
      labelStyle={{ color: "#000", fontSize: 12, fontWeight: "700" }}
      scrollEnabled={true}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default ShopScreen;
