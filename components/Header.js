import React from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";

export default function Header() {
  return (
    <View style={(styles.header)}>
      <Image
        style={{ height: 80, width: 80, alignContent: "flex-start" }}
        source={require("./../assets/logo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display:"flex",
    justifyContent:"space-between",
    flexDirection:"row",
    paddingTop: 20,
    backgroundColor: "#2d3f4e",
    position: "absolute",
    zIndex: 1,
    width: Dimensions.get("window").width,
  },
});
