import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";

function HandleOtp(props) {
  return (
    <View>
      <Text
        style={{
          paddingHorizontal: 20,
          paddingBottom: 20,
          textAlign: "right",
          ...props.style
        }}
      >
        {props.text}
      </Text>
    </View>
  );
}

export default HandleOtp;
