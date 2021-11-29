import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import Header from "./Header";
export default function KYC() {
  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <View>
      <Header />
      <View>
        <View style={styles.mainKYCContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("./../assets/left_arrow.png")} />
            <Text style={{ fontSize: 15, paddingLeft: 5, fontWeight: "900" }}>
              {" "}
              Back
            </Text>
          </View>
          <Text style={styles.kycHeading}>KYC</Text>
          <View style={styles.inputContainer}>
            <View style={{ marginLeft: 20, marginRight: 20, padding: 10 }}>
              <TextInput
                theme={{ roundness: 10 }}
                label="Pan Number"
                length={10}
                style={styles.input}
                mode="outlined"
                activeOutlineColor="#E5E5E5"
                right={<TextInput.Icon name="pencil" color="grey" />}
              />

              <TextInput
                theme={{ roundness: 10 }}
                label="Bank Account Number"
                length={10}
                style={styles.input2}
                mode="outlined"
                activeOutlineColor="#E5E5E5"
                right={<TextInput.Icon name="pencil" color="grey" />}
              />

              <Text
                style={{
                  textAlign: "left",
                  color: "#BD311E",
                  fontWeight: "700",
                  marginBottom: 10,
                  fontSize: 12,
                }}
              >
                &#9432; Your Bank Account details are not Up to date.
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.terms}>Terms and Conditions</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainKYCContainer: {
    margin: 10,
    marginTop: 120,
  },
  kycHeading: {
    marginTop: 30,
    marginLeft: 15,
    fontWeight: "900",
    fontSize: 18,
  },
  inputContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 20,
  },
  input: {
    // height: 40,
    borderRadius: 20,
    backgroundColor: "white",
  },
  input2: {
    // height: 40,
    marginTop: 30,
    marginBottom: 0,
    borderRadius: 10,
    backgroundColor: "white",
  },
  terms: {
    marginTop: 120,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    textDecorationLine: "underline",
  },
});
