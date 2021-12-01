import * as React from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Header from "./Header";
import About from "./About";
import How_to_Play from "./How_to_Play";
import FAQs from "./FAQs";
import Blog from "./Blog";
import Tips_Tricks from "./Tips_Tricks";

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function MyTab() {
  return (
    <>
      <Header />
      <Tab.Navigator
        tabBarOptions={{
          style: {
            activeTintColor: "red",
            inactiveTintColor: "lightgray",
            backgroundColor: "#2d3f4e",
          },
          activeTintColor: "#FFFFFF",
          inactiveTintColor: "#818181",
        }}
      >
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="How to Play" component={How_to_Play} />
        <Tab.Screen name="FAQs" component={FAQs} />
        <Tab.Screen name="Blog" component={Blog} />
        <Tab.Screen name="Tips Tricks" component={Tips_Tricks} />
      </Tab.Navigator>
    </>
  );
}
