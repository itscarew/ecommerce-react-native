import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import { MyShopInput } from "../components/Input";
import CartScreen from "../screens/CartScreen";
import DetailsScreen from "../screens/Details";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
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
        options={{
          headerTitle: () => <MyShopInput />,
          title: "MyShop",
        }}
      />
      <Stack.Screen
        name="DetailsStack"
        component={DetailsScreen}
        options={{
          headerTitle: "",
          headerTintColor: "#000",
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
        options={{ headerTitle: () => <MyShopInput />, title: "Shop" }}
      />
      <Stack.Screen
        name="DetailsStack"
        component={DetailsScreen}
        options={{
          headerTitle: "",
          headerTintColor: "#000",
        }}
      />
    </Stack.Navigator>
  );
}

export function CartDetailStackNavigation() {
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
        name="CartStack"
        component={CartScreen}
        options={{ title: "Cart" }}
      />
      <Stack.Screen
        name="DetailsStack"
        component={DetailsScreen}
        options={{
          headerTitle: "",
          headerTintColor: "#000",
        }}
      />
    </Stack.Navigator>
  );
}

export function ProfileStackNavigation() {
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
        name="ProfileStack"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerTitle: "Profile",
          headerRight: () => (
            <MaterialIcons
              name="settings"
              size={28}
              onPress={() => navigation.navigate("SettingsStack")}
              style={styles.headerRightStyle}
            />
          ),
        })}
      />
      <Stack.Screen
        name="SettingsStack"
        component={SettingsScreen}
        options={{
          headerTitle: "Settings",
          headerTintColor: "#000",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerRightStyle: {
    marginRight: 20,
  },
});
