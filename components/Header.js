import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Image, View, Dimensions, Text } from "react-native";

export default function Header(props) {
  const [login, Setlogin] = useState(true);
  return (
    <View style={{ ...styles.header, ...props.style }}>
      <View style={{ flex: 1 }}>
        <Image
          style={{ height: 80, width: 80, alignContent: "flex-start" }}
          source={require("./../assets/logo.png")}
        />
      </View>
      {login && (
        <View style={{ flex: 1 }}>
          <View style={styles.money}>
            <MaterialCommunityIcons name="wallet" color="#F1CE47" size={48} />
            <Text style={styles.text}>1000</Text>
            <AntDesign name="pluscircle" size={48} color="#F1CE47" />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 20,
    backgroundColor: "#2d3f4e",
    position: "absolute",
    zIndex: 1,
    width: Dimensions.get("window").width,
    alignItems: "center",
  },
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
});
