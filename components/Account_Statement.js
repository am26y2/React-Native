import React, { useState } from "react";
import { View, Image, Text, FlatList, StyleSheet } from "react-native";
import Header from "./Header";

export default function Account_Statement() {
    const [accountInfo, setAccountInfo] = useState([
        {pointsTableId: '#98687534', amount: '1000.00', date: '24 Aug, 11:37 AM', withdrawalAmount: '800 (W)', key: Math.random() * 1000},
        {pointsTableId: '#98687534', amount: '1000.00', date: '24 Aug, 11:37 AM', withdrawalAmount: '800 (W)', key: Math.random() * 1000},
        {pointsTableId: '#98687534', amount: '1000.00', date: '24 Aug, 11:37 AM', withdrawalAmount: '800 (W)', key: Math.random() * 1000},
        {pointsTableId: '#98687534', amount: '1000.00', date: '24 Aug, 11:37 AM', withdrawalAmount: '800 (W)', key: Math.random() * 1000},
        {pointsTableId: '#98687534', amount: '1000.00', date: '24 Aug, 11:37 AM', withdrawalAmount: '800 (W)', key: Math.random() * 1000},
        {pointsTableId: '#98687534', amount: '1000.00', date: '24 Aug, 11:37 AM', withdrawalAmount: '800 (W)', key: Math.random() * 1000},
        {pointsTableId: '#98687534', amount: '1000.00', date: '24 Aug, 11:37 AM', withdrawalAmount: '800 (W)', key: Math.random() * 1000},
    ])
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
          <Image source={require("./../assets/left_arrow.png")} />
          <Text style={{ fontSize: 15, paddingLeft: 5, fontWeight: "900" }}>
            {" "}
            Back
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 15,
              marginLeft: 15,
              fontFamily: "Roboto",
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            Mini Statement
          </Text>
        </View>
        <FlatList data={accountInfo} renderItem={({ item }) => (
                    <View style={styles.listGroup}>
                        <View style={styles.listItem}>
                        <Text style={styles.processBank}>Leave Points Table {item.pointsTableId}</Text>
                        <Text style={styles.processBank}>{item.amount}</Text>
                        </View>
                        <View style={styles.listItem1}>
                        <Text style={styles.date}>{item.date}</Text>
                        <Text style={styles.transaction}>{item.withdrawalAmount}</Text>
                        </View>
                    </View>
                )}/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    listGroup: {
        backgroundColor: "white",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        padding: 10
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listItem1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    processBank:{
        fontSize: 12,
        fontWeight: 'bold'
    },
    date:{
        fontSize: 12
    },
    transaction: {
        fontSize: 12,
        color: 'rgba(50,50,50,0.4)'
    }
})