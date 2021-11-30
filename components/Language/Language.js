import React, {useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Constants from "expo-constants";

export default function Language() {

  const [ pickerValue,setPickerValue ] = useState('en')
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>React native dropdown picker</Text>
      {/* <DropDownPicker
      style={{zIndex: 1000, elevation: 1000 }}
        items={[
          { label: "English", value: "en" },
          { label: "Deutsch", value: "de" },
          { label: "French", value: "fr" },
        ]}
        defaultIndex={0}
        containerStyle={{ height: 40 }}
        onChangeItem={(item) => console.log(item.label, item.value)}
      /> */}
      <Picker selectedValue={pickerValue} onValueChange={(itemValue) => setPickerValue(itemValue)}>
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Deutsch" value="de" />
        <Picker.Item label="French" value="fr" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
    height: 400
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
