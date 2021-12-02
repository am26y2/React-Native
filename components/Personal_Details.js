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

const Personal_Details = () => {
  const [disabled, setDisable] = useState(false);

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
          <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 20 }}>
            Personal Details
          </Text>
          <View style={styles.maincontainer}>
            <TextInput
              theme={{ roundness: 10 }}
              label=" Mobile Number "
              placeholder="Enter Mobile Number"
              length={10}
              style={styles.input}
              mode="outlined"
              activeOutlineColor="#323232"
              right={<TextInput.Icon name="pencil" color="grey" />}
            />
            <TextInput
              theme={{ roundness: 10 }}
              label="Your Name"
              placeholder="Enter Your Name"
              length={10}
              style={styles.input}
              mode="outlined"
              activeOutlineColor="#323232"
              right={<TextInput.Icon name="pencil" color="grey" />}
            />
            <TextInput
              theme={{ roundness: 10 }}
              label="Full Name"
              placeholder="Enter your Full Name"
              length={10}
              style={styles.input}
              mode="outlined"
              activeOutlineColor="#323232"
              right={<TextInput.Icon name="pencil" color="black" />}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <TouchableOpacity
          style={disabled ? styles.loginactive : styles.login}
          // activeOpacity={disabled ? 1 : 0.5}
          onPress={() => {
            // navigation.navigate("MyTabs");
          }}
        >
          <Text style={disabled ? styles.loginTextinactive : styles.loginText}>
            Save Changes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Personal_Details;

const styles = StyleSheet.create({
  money: {
    // marginTop: Dimensions.get("window").height / 1,
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
    marginTop: 20,
    padding: 20,
  },
  maincontainer: {
    borderRadius: 10,
    elevation: 5,
    marginTop: 20,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  input: {
    padding: 10,
    backgroundColor: "white",
    color: "#323232",
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
});
