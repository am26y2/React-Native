import * as React from "react";
import { TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
import Input from "./Input";
  

const Popup = () => {
  const [visible, setVisible] = React.useState(false);
const [disabled, setDisable] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          // contentContainerStyle={containerStyle}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              margin: 10,
            }}
          >
            <Text
              style={{ paddingLeft: 30, textAlign: "left", fontWeight: "bold" }}
            >
              Re- enter your Phone Number
            </Text>
            <Input style={{ marginBottom: 20, backgroundColor: "#d9d9d9" }} />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                style={disabled ? styles.loginactive : styles.login}
                activeOpacity={disabled ? 1 : 0.5}
                onPress={() => {}}
              >
                <Text
                  style={disabled ? styles.loginTextinactive : styles.loginText}
                >
                  Cancle
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={disabled ? styles.loginactive : styles.login}
                activeOpacity={disabled ? 1 : 0.5}
                onPress={() => {}}
              >
                <Text
                  style={disabled ? styles.loginTextinactive : styles.loginText}
                >
                  Done
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
    </Provider>
  );
};
const styles = StyleSheet.create({
  login: {
    // width: Dimensions.get("window").width / 1.5,
    alignItems: "center",
    backgroundColor: "#f1ce47",
    padding: 15,
    borderRadius: 10,
  },
  loginactive: {
    // width: Dimensions.get("window").width / 1.5,
    alignItems: "center",
    backgroundColor: "#f2e7bf",
    padding: 15,
    borderRadius: 10,
  },
  loginTextinactive: {
    color: "#2A3B4A",
    fontSize: 20,
  },
  loginText: {
    color: "#2A3B4A",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default Popup;
