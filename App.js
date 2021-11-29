import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Register from "./components/Register";
import Popup from "./components/Popup";
<<<<<<< HEAD
import Menu from "./components/Menu";
import { Example } from "./components/Example";
import KYC from "./components/KYC";
=======
import MyTabs from "./components/MyTabs";
>>>>>>> b2be0dfc6e0009e11aeee5541fa68c9a6d03b049


const Stack = createNativeStackNavigator();

function App() {
  return (
<<<<<<< HEAD
    // <Login/>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="KYC"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Popup" component={Popup} />
        <Stack.Screen name="KYC" component={KYC} />
      </Stack.Navigator>
    </NavigationContainer>
=======
    <MyTabs/>
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Login"
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Register" component={Register} />
    //     <Stack.Screen name="Popup" component={Popup} />
    //   </Stack.Navigator>
    // </NavigationContainer>
>>>>>>> b2be0dfc6e0009e11aeee5541fa68c9a6d03b049
  );
}

export default App;
