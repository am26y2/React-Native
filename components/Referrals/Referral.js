import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Header from "../Header";
import ReferAndEarn from "./ReferAndEarn";
import MyReferrals from "./MyReferrals";

export default function Referral() {
  const [isReferralTabOpen, setIsReferalTabOpen] = useState(true);
  return (
    <View>
      <Header />
      <View style={{ marginTop: 120 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Image source={require("../../assets/left_arrow.png")} />
          <Text style={{ fontSize: 15, paddingLeft: 5, fontWeight: "900" }}>
            {" "}
            Back
          </Text>
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.inline}>
            <TouchableOpacity onPress={() => setIsReferalTabOpen(true)}> 
              <View style={isReferralTabOpen ? styles.button : styles.buttonInactive}>
                <Text style={isReferralTabOpen ? styles.buttontextColor : styles.buttonInactiveColor}>Refer and Earn{isReferralTabOpen}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>setIsReferalTabOpen(false)}>
            <View style={!isReferralTabOpen ? styles.button : styles.buttonInactive}>
                <Text style={!isReferralTabOpen ? styles.buttontextColor : styles.buttonInactiveColor}>My Referrals{isReferralTabOpen}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{margin: 15}}>
            {isReferralTabOpen ? <ReferAndEarn /> : <MyReferrals />}
          </View>

        </View>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: "#f2f2f2", height: "100%" },
  mainContainer: {
    margin: 10
  },
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  loginactive: {
    width: Dimensions.get("window").width / 1.5,
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
  mainconatiner: {
    elevation: 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  inline: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: Dimensions.get("window").width / 2,
    alignItems: "center",
    backgroundColor: "#1b71c2",
    padding: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  buttonInactive: {
    width: Dimensions.get("window").width / 2.3,
    alignItems: "center",
    backgroundColor: "#e8e8e8",
    padding: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  buttontextColor: {
    color: "#fff",
    fontSize: 20,
  },
  loginactive: {
    color: "#000",
    fontSize: 20,
  },
  buttonInactiveColor: {
    color: '#323232',
    fontWeight: '600',
    fontSize: 20,
  }
});
