import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import HandleOtp from "./HandleOtp";
import Header from "./Header";
import Input from "./Input";
export default function Register({ navigation }) {
  const [disabled, setDisable] = useState(false);
  const [number, setNumber] = useState("");
  const [resendotp, setResendOtp] = useState(false);
  const numberinputhandler = (inputText) => {
    console.log(inputText);
    setNumber(inputText.replace(/[^0-9]/g, ""));
  };
  const [otp, setOTP] = useState("");
  const numberinputhandlerOTP = (inputText) => {
    setOTP(inputText.replace(/[^0-9]/g, ""));
  };
  return (
    <View style={styles.screen}>
      <Header />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <View style={styles.mainconatiner}>
            <View style={styles.inline}>
              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <Text style={styles.buttontextColor}>Login</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonInactive}>
                <Text style={styles.buttontextColorInactive}>Register</Text>
              </View>
            </View>
            <Input
              label="Phone Number"
              length={10}
              value={number}
              keyboardType={"number-pad"}
              onClick={numberinputhandler}
            />
            <Input
              label="OTP"
              length={4}
              value={otp}
              keyboardType={"number-pad"}
              onClick={numberinputhandlerOTP}
            />
            <View style={styles.inline}>
              <HandleOtp
                style={{ color: "red" }}
                text="Incorrect OTP. Try again."
              />
              <TouchableOpacity>
                <HandleOtp text="Resend OTP" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <HandleOtp text="I didn't receive an OTP" />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", bottom: -50 }}>
            <TouchableOpacity
              style={disabled ? styles.loginactive : styles.login}
              activeOpacity={disabled ? 1 : 0.5}
              onPress={() => {}}
            >
              <Text
                style={disabled ? styles.loginTextinactive : styles.loginText}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: "#f2f2f2", height: "100%", flex: 1 },
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  login: {
    width: Dimensions.get("window").width / 1.5,
    alignItems: "center",
    backgroundColor: "#f1ce47",
    padding: 15,
    borderRadius: 10,
  },
  loginactive: {
    width: Dimensions.get("window").width / 1.5,
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
  mainconatiner: {
    elevation: 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  inline: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: Dimensions.get("window").width / 2.3,
    alignItems: "center",
    backgroundColor: "#1b71c2",
    padding: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  buttonInactive: {
    width: Dimensions.get("window").width / 2.3,
    alignItems: "center",
    backgroundColor: "#e8e8e8",
    padding: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  buttontextColor: {
    color: "#fff",
    fontSize: 20,
  },
  buttontextColorInactive: {
    color: "#000",
    fontSize: 20,
  },
});
