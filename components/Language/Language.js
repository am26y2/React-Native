import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Constants from "expo-constants";

export default function Language() {
  const [pickerValue, setPickerValue] = useState("en");
  const languageList = [
    { label: "English", value: "en" },
    { label: "Deutsch", value: "de" },
    { label: "French", value: "fr" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Choose your Language</Text>
      <View style={{elevation:1,padding:10,borderRadius:1}}>
        <Picker
          selectedValue={pickerValue}
          onValueChange={(itemValue) => setPickerValue(itemValue)}
        >
          {languageList.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  paragraph: {
    marginBottom: 24,
    fontSize: 18,
    fontWeight: "bold",
    // textAlign: "center",
  },
});
