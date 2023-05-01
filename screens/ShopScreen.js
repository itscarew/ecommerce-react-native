import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Layout } from "../components/Layout";
import { ProductCard } from "../components/ProductCard";
import { Loader } from "../components/Spinner";
import AppContext from "../contextApi/AppContext";

function ShopScreen({ navigation }) {
  const layout = useWindowDimensions();
  const { productState, loaderState } = useContext(AppContext);
  const data = [
    { key: "men", title: "Men" },
    { key: "women", title: "Women" },
    { key: "jewelry", title: "Jewelry" },
    { key: "electronics", title: "Electronics" },
    { key: "sports", title: "Sports" },
  ];

  const [index, setIndex] = useState(0);
  const [routes] = useState(data);
  const [tabKey, setTabKey] = useState(routes[index].key);

  const renderScene = SceneMap(
    data.reduce((acc, { key }) => {
      acc[key] = () => {
        if (!loaderState.loading) {
          return (
            <>
              <Layout>
                <View style={styles.cardContainer}>
                  {productState.categoryProducts.map((item) => {
                    return (
                      <ProductCard
                        key={item._id}
                        product={item}
                        screen={"DetailsStack"}
                      />
                    );
                  })}
                </View>
              </Layout>
            </>
          );
        }
        return <Loader />;
      };
      return acc;
    }, {})
  );

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#606c38" }}
      style={{ backgroundColor: "#fff" }}
      labelStyle={{ color: "#000", fontSize: 12, fontWeight: "700" }}
      scrollEnabled={true}
    />
  );

  useEffect(() => {
    productState.getCategoryProducts(tabKey);
  }, [index, tabKey]);

  const handleIndexChange = (newIndex) => {
    setIndex(newIndex);
    setTabKey(routes[newIndex].key);
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={handleIndexChange}
      initialLayout={{ width: layout.width }}
      lazy={true}
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
