import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Header from "./Header";

const Notifications = () => {
  const [message, setMessage] = useState([
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi pharetra, viverra est vitae.",
  ]);
  return (
    <View>
      <Header style={{ position: "relative" }}>
        <View style={styles.money}>
          <MaterialCommunityIcons name="wallet" color="#F1CE47" size={48} />
          <Text style={styles.text}>1000</Text>
          <AntDesign name="pluscircle" size={48} color="#F1CE47" />
        </View>
      </Header>
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
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 30 }}>
          Notifications
        </Text>
        <ScrollView style={{ marginBottom: 10 }}>
          {message.map((el, index) => (
            <View key={index} style={styles.maincontainer}>
              <Text>{el}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Notifications;

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
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#FBFBFB",
  },
});
