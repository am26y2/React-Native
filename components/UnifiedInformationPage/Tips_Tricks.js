import { style } from "dom-helpers";
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./Header";

const Tips_Tricks = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Tips Tricks</Text>
      <Text style={styles.para}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi
        pharetra, viverra est vitae, gravida urna. Maecenas iaculis luctus
        libero et viverra. Sed pulvinar sed purus ut vehicula. Pellentesque in
        ullamcorper sem. Etiam urna diam, pharetra ut dignissim id, porta cursus
        diam. Ut eu ultricies ligula, non dignissim quam. Duis consequat feugiat
        bibendum. Morbi blandit diam enim. Sed sed malesuada ante.{" "}
      </Text>
      <Text style={styles.para}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi
        pharetra, viverra est vitae, gravida urna. Maecenas iaculis luctus
        libero et viverra. Sed pulvinar sed purus ut vehicula. Pellentesque in
        ullamcorper sem. Etiam urna diam, pharetra ut dignissim id, porta cursus
        diam. Ut eu ultricies ligula, non dignissim quam. Duis consequat feugiat
        bibendum. Morbi blandit diam enim. Sed sed malesuada ante.{" "}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  para: {
    marginVertical: 10,
  },
});
export default Tips_Tricks;
