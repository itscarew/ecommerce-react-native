import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  CartDetailStackNavigation,
  HomeDetailStackNavigation,
  ProfileStackNavigation,
  ShopDetailStackNavigation,
} from "./app-stack-navigation";

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
        component={CartDetailStackNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="shopping-cart" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigation}
        options={({ navigation }) => ({
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={24} color={color} />
          ),
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
