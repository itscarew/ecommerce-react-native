import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigations/app-bottom-tab-navigation";
import HomeStackNavigation from "./navigations/app-stack-navigation";
import { useEffect, useState } from "react";
import { SplashScreenComponent } from "./components/SplashScreen";

export default function App() {
  const [show, setShow] = useState(false);

  const manageSplash = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1000);
  };

  useEffect(() => {
    manageSplash();
  }, []);

  return (
    <>
      {show ? (
        <SplashScreenComponent />
      ) : (
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
