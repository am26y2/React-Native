import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-paper";
import Header from "./Header";
import Language from "./Language/Language";
import SentNotification from "./SentNotification";

const Preferences = () => {
  const [disabled, setDisable] = useState(false);
  const [money, setMoney] = useState("500");
  const [CurrentMoney, setCurrentMoney] = useState("1000");
  const numberinputhandler = (inputText) => {
    console.log(typeof inputText);
    setMoney(inputText.replace(/[^0-9]/g, ""));
  };

  return (
    <View>
      <Header style={{ position: "relative" }} />
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 10,
          marginTop: 10,
        }}
      >
        <Image source={require("./../assets/left_arrow.png")} />
        <Text style={{ fontSize: 15, paddingLeft: 5, fontWeight: "900" }}>
          {" "}
          Back
        </Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 30 }}>
            Preferences
          </Text>
          <View style={styles.maincontainer}>
            <Language />
            <SentNotification />
          </View>
          <View style={{ alignItems: "center", marginTop: 50 }}>
            <TouchableOpacity
              style={disabled ? styles.loginactive : styles.login}
              onPress={() => {}}
            >
              <Text
                style={disabled ? styles.loginTextinactive : styles.loginText}
              >
                Save Preferences
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Preferences;

const styles = StyleSheet.create({
  money: {
    display: "flex",
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    borderColor: "#F1CE47",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  backbutton: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  container: {
    // borderWidth: 2,
    marginTop: 30,
    // backgroundColor: "#FFFFFF",
  },
  maincontainer: {
    borderRadius: 10,
    elevation: 5,
    marginTop: 20,
    padding: 10,
    backgroundColor: "#FBFBFB",
  },
  input: {
    padding: 10,
    backgroundColor: "white",
    color: "black",
  },
  login: {
    width: Dimensions.get("window").width / 1.2,
    alignItems: "center",
    backgroundColor: "#f1ce47",
    padding: 15,
    borderRadius: 10,
  },
  loginactive: {
    width: Dimensions.get("window").width / 1.2,
    alignItems: "center",
    backgroundColor: "#f2e7bf",
    padding: 15,
    borderRadius: 10,
  },
  loginTextinactive: {
    color: "#2A3B4A",
    fontSize: 20,
  },
  loginText: {
    color: "#2A3B4A",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    width: Dimensions.get("window").width / 4,
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
  },
  buttontextColor: {
    color: "black",
    fontSize: 20,
  },
});
