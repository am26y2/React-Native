import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const FAQs = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>FAQs</Text>
      <View style={styles.maincontainer}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingHorizontal: 10,
          }}
        >
          <Entypo name="arrow-with-circle-down" size={32} color="#255799" />
          <View style={{ paddingLeft: 25 }}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              nisi pharetra, viverra est vitae?
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.maincontainer}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingHorizontal: 10,
          }}
        >
          <Entypo name="arrow-with-circle-down" size={32} color="#255799" />
          <View style={{ paddingLeft: 25 }}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              nisi pharetra, viverra est vitae?
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.maincontainer}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingHorizontal: 10,
          }}
        >
          <Entypo name="arrow-with-circle-down" size={32} color="#255799" />
          <View style={{ paddingLeft: 25 }}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              nisi pharetra, viverra est vitae?
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.maincontainer}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingHorizontal: 10,
          }}
        >
          <Entypo name="arrow-with-circle-down" size={32} color="#255799" />
          <View style={{ paddingLeft: 25 }}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              nisi pharetra, viverra est vitae?
            </Text>
          </View>
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
export default FAQs;
