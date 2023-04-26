import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { MyShopInput } from "../components/Input";
import DetailsScreen from "../screens/Details";
import { useNavigation } from "@react-navigation/native";
import ShopScreen from "../screens/ShopScreen";

const Stack = createStackNavigator();

export function HomeDetailStackNavigation() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 80,
        },
      }}
    >
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{ headerTitle: () => <MyShopInput /> }}
      />
      <Stack.Screen
        name="DetailsStack"
        component={DetailsScreen}
        options={{
          headerTitle: "",
          headerLeft: () => (
            <MaterialIcons
              name="arrow-left"
              size={50}
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export function ShopDetailStackNavigation() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 80,
        },
      }}
    >
      <Stack.Screen
        name="ShopStack"
        component={ShopScreen}
        options={{ headerTitle: () => <MyShopInput /> }}
      />
      <Stack.Screen
        name="DetailsStack"
        component={DetailsScreen}
        options={{
          headerTitle: "",
          headerLeft: () => (
            <MaterialIcons
              name="arrow-left"
              size={50}
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
