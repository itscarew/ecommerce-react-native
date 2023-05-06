import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigations/app-bottom-tab-navigation";
import { useEffect, useState } from "react";
import { SplashScreenComponent } from "./components/SplashScreen";
import AppContextProvider from "./contextApi/AppContextProvider";

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
          <AppContextProvider>
            <TabNavigation />
          </AppContextProvider>
        </NavigationContainer>
      )}
    </>
  );
}
