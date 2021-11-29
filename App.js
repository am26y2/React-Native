import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Register from "./components/Register";
import Popup from "./components/Popup";
import { Example } from "./components/Example";
import KYC from "./components/KYC";
import MyTabs from "./components/MyTabs";
import AddCashLimits from "./components/AddCashLimits";

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <Login/>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AddCashLimits"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Popup" component={Popup} />
        <Stack.Screen name="KYC" component={KYC} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="AddCashLimits" component={AddCashLimits} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
