import * as React from "react";
import { TextInput } from "react-native-paper";
import { View, StyleSheet } from "react-native";
const Input = (props) => {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.input}>
      <TextInput
        style={{ backgroundColor: "white", color: "black", ...props.style }}
        maxLength={props.length}
        keyboardType={props.keyboardType}
        mode="outlined"
        label={props.label}
        placeholder=""
        value={props.value}
        onChangeText={props.onClick}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderRadius: 2,
  },
});

export default Input;
