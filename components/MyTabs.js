import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import KYC from "./KYC";
import AddCashLimits from "./AddCashLimits";
import AddCash from "./AddCash";
import Notifications from "./Notifications";

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return <AddCash />;
}

function Profile1() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AddCashLimits />
    </View>
  );
}
function Menu() {
  return (
    <View>
      <KYC />
    </View>
  );
}


const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#1C71C2"
      screenOptions={{ headerShown: false }}
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: "#FFFFFF" }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile1"
        component={Profile1}
        options={{
          tabBarLabel: "Profile1",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="menu" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
