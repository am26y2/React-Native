import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Blog = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Blog</Text>
      <View style={styles.maincontainer}>
        <View
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingHorizontal: 10,
          }}
        >
          <Image source={require("./../..//assets/left_arrow.png")} />
          <Text style={{ textAlign: "left", fontSize: 20, fontWeight: "200" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text style={styles.para}>
            Proin sed nisi pharetra, viverra est vitae, gravida urna. Maecenas
            iaculis luctus libero et viverra. Sed pulvinar sed purus ut
            vehicula. Pellentesque in ullamcorper sem. Etiam urna diam, pharetra
            Proin sed nisi pharetra, viverra est vitae, gravida urna. Maecenas
            iaculis luctus libero et viverra.{" "}
          </Text>
        </View>
      </View>
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

  maincontainer: {
    borderRadius: 10,
    elevation: 5,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#FBFBFB",
  },
});
export default Blog;
