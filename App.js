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
import Withdrawals from "./components/Withdrawals/Withdrawals";
import Language from "./components/Language/Language"

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <Login/>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Language"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Popup" component={Popup} />
        <Stack.Screen name="KYC" component={KYC} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Withdrawals" component={Withdrawals} />
        <Stack.Screen name="Language" component={Language} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
