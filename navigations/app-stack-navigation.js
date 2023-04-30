import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { MyShopInput } from "../components/Input";
import DetailsScreen from "../screens/Details";
import { useNavigation } from "@react-navigation/native";
import ShopScreen from "../screens/ShopScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { StyleSheet } from "react-native";
import CartScreen from "../screens/CartScreen";

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
          headerLeft: () => (
            <MaterialIcons
              name="arrow-left"
              size={50}
              onPress={() => navigation.navigate("ProfileStack")}
            />
          ),
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
