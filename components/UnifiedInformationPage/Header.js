import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <AntDesign name="left" size={32} color="#ffffff" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 24,
          paddingLeft: 10,
          fontWeight: "900",
          color: "#ffffff",
        }}
      >
        {" "}
        {props.title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingTop: 40,
    backgroundColor: "#2d3f4e",
    width: Dimensions.get("window").width,
    alignItems: "center",
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap"
  },
});
