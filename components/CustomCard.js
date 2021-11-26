import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainconatiner}>{props.children}</View>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  mainconatiner: {
    elevation: 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginLeft: 15,
    marginRight: 15,
  },
});
