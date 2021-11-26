import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Register from "./components/Register";
import Popup from "./components/Popup";
import Menu from "./components/Menu";
import { Example } from "./components/Example";


const Stack = createNativeStackNavigator();

function App() {
  return (
    // <Login/>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Popup" component={Popup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
