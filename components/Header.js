import React from "react";
import { StyleSheet, Image, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
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
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    top: 0,
    paddingTop: 0,
    backgroundColor: "#2d3f4e",
    alignItems: "center",
  },
});
