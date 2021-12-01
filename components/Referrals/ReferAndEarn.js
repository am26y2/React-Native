import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
export default function ReferandEarn() {
  const [text, onChangeText] = useState("Useless Text");
  const [tableData, setTableData] = useState({
      HeadTable: ['Friend\'s Activity', 'You Get', 'Your Friend gets'],
      DataTable: [
        ['Add Cash of 200', '50/Friend', '50 per Friend'],
        ['Gameplay of 1,000', '100/Friend', '100 per Friend'],
        ['Gameplay of 1,000', '100/Friend', '100 per Friend'],
      ]
  })
  return (
    <View>
      <Text style={{ fontSize: 12 }}>
        For every Friend that plays, you both get upto{" "}
        <Text style={{ fontWeight: "bold" }}>10,000</Text> for free!
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "rgba(50,50,50,0.1)",
          borderRadius: 10,
        }}
      >
        <TextInput style={styles.input} placeholder="Hello" />
        <View style={styles.shareButton}>
          <Image source={require("../../assets/share.png")} />
          <Text
            style={{
              marginLeft: 5,
              color: "white",
              fontSize: 14,
              fontWeight: "700",
            }}
          >
            Share
          </Text>
        </View>
      </View>
      <Text style={{fontSize: 12, margin: 10}}>Refer and Earn upto Rs. 5,000 per friend!</Text>
      
      <View style={{borderWidth: 0.2, borderRadius: 10, padding: 10}}>
      <View style={{ display: 'flex', justifyContent:'space-around', flexDirection: 'row' }}>
        <View style={{flex: 1, width: 0 }}><Text style={{fontWeight: '700'}}>Friend’s Activity</Text></View>
        <View style={{flex: 1, width: 0 }}><Text style={{fontWeight: '700'}}>You Get</Text></View>
        <View style={{flex: 1, width: 0 }}><Text style={{fontWeight: '700'}}>Your Friend gets</Text></View>
      </View>
      <View style={{ display: 'flex', justifyContent:'space-around', flexDirection: 'row', marginTop: 10 }}>
        <View style={{flex: 1, width: 0 }}><Text>Add Cash of    200</Text></View>
        <View style={{flex: 1, width: 0 }}><Text>50/Friend</Text></View>
        <View style={{flex: 1, width: 0 }}><Text>50 per Friend</Text></View>
      </View>
      <View style={{ display: 'flex', justifyContent:'space-around', flexDirection: 'row', marginTop: 10 }}>
        <View style={{flex: 1, width: 0 }}><Text>Gameplay of 1,000</Text></View>
        <View style={{flex: 1, width: 0 }}><Text>100/Friend</Text></View>
        <View style={{flex: 1, width: 0 }}><Text>100 per Friend</Text></View>
      </View>
      <View style={{ display: 'flex', justifyContent:'space-around', flexDirection: 'row', marginTop: 10 }}>
        <View style={{flex: 1, width: 0 }}><Text>Gameplay of 1,000</Text></View>
        <View style={{flex: 1, width: 0 }}><Text>100/Friend</Text></View>
        <View style={{flex: 1, width: 0 }}><Text>100 per Friend</Text></View>
      </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 15,
  },
  shareButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1B71C2",
    padding: 15,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
  },
  HeadStyle: { 
    borderStartWidth: 0,
    height: 50,
    alignContent: "flex-start"
  },
  TableTextHead: {
    fontWeight: '800'
  },
  TableText: { 
    margin: 10,
    fontSize: 12,
  },
  rowStyle: {
      alignContent: "flex-start",
      borderColor: 'red'
  }
});
