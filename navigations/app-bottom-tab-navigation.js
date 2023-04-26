import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { MaterialIcons } from "@expo/vector-icons";
import {
  HomeDetailStackNavigation,
  ShopDetailStackNavigation,
} from "./app-stack-navigation";
import DetailsScreen from "../screens/Details";

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            backgroundColor: "#fff",
          },
        ],
        headerStyle: {
          height: 80,
        },
        tabBarLabel: "",
        tabBarItemStyle: {
          marginBottom: -10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeDetailStackNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopDetailStackNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="shopping-cart" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={({ navigation }) => ({
          tabBarButton: () => null,
          headerLeft: () => (
            <MaterialIcons
              name="arrow-left"
              size={50}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;