import React, { useState } from 'react'
import {View,Text,FlatList,StyleSheet,Image} from 'react-native';
import Header from "../Header";
import RequestWithdrawal from './RequestWithdrawal';
export default function Withdrawals() {
    const [withdrawals, setWithdrawals] = useState([
        {isProcessedByBank: 'Processed by Bank', dateTime: '24 Aug, 11:37 AM', amount: '1000.00', transactionID: '#0849728', key: Math.random() * 10000},
        {isProcessedByBank: 'Processed by Bank', dateTime: '24 Aug, 11:37 AM', amount: '1000.00', transactionID: '#0849728', key: Math.random() * 10000},
        {isProcessedByBank: 'Processed by Bank', dateTime: '24 Aug, 11:37 AM', amount: '1000.00', transactionID: '#0849728', key: Math.random() * 10000},
        {isProcessedByBank: 'Processed by Bank', dateTime: '24 Aug, 11:37 AM', amount: '1000.00', transactionID: '#0849728', key: Math.random() * 10000},
        {isProcessedByBank: 'Processed by Bank', dateTime: '24 Aug, 11:37 AM', amount: '1000.00', transactionID: '#0849728', key: Math.random() * 10000},
        {isProcessedByBank: 'Processed by Bank', dateTime: '24 Aug, 11:37 AM', amount: '1000.00', transactionID: '#0849728', key: Math.random() * 10000},
        {isProcessedByBank: 'Processed by Bank', dateTime: '24 Aug, 11:37 AM', amount: '1000.00', transactionID: '#0849728', key: Math.random() * 10000},
        {isProcessedByBank: 'Processed by Bank', dateTime: '24 Aug, 11:37 AM', amount: '1000.00', transactionID: '#0849728', key: Math.random() * 10000},
        {isProcessedByBank: 'Processed by Bank', dateTime: '24 Aug, 11:37 AM', amount: '1000.00', transactionID: '#0849728', key: Math.random() * 10000},
        {isProcessedByBank: 'Processed by Bank', dateTime: '24 Aug, 11:37 AM', amount: '1000.00', transactionID: '#0849728', key: Math.random() * 10000},
        {isProcessedByBank: 'Processed by Bank', dateTime: '24 Aug, 11:37 AM', amount: '1000.00', transactionID: '#0849728', key: Math.random() * 10000},
        {isProcessedByBank: 'Processed by Bank', dateTime: '24 Aug, 11:37 AM', amount: '1000.00', transactionID: '#0849728', key: Math.random() * 10000},
        {isProcessedByBank: 'Processed by Bank', dateTime: '24 Aug, 11:37 AM', amount: '1000.00', transactionID: '#0849728', key: Math.random() * 10000},
    ]);
    const [boosterInfo,setBoosterInfo] = useState([
        {booster: 'BOOSTER 2K', amount: '1000.00', of: '1750', boosterId: '#28436372', expiryDate: '24 Aug, 11: 37 AM', status: 'ACTIVE', key: Math.random() * 10000},
        {booster: 'BOOSTER 2K', amount: '1000.00', of: '1750', boosterId: '#28436372', expiryDate: '24 Aug, 11: 37 AM', status: 'CLAIMED', key: Math.random() * 10000},
        {booster: 'BOOSTER 2K', amount: '1000.00', of: '1750', boosterId: '#28436372', expiryDate: '24 Aug, 11: 37 AM', status: 'EXPIRED', key: Math.random() * 10000},
    ]);
    const [requestWithdrawal, setRequestWithdrawal] = useState(false);
    const [bonusBooster, setBonusBooster] = useState(true);

    return (
        <View>
            <Header/>
            <View style={styles.mainContainer}>
            <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10
            }}
          >
            <Image source={require("../../assets/left_arrow.png")} />
            <Text style={{ fontSize: 15, paddingLeft: 5, fontWeight: "900" }}>
              {" "}
              Back
            </Text>
          </View>
          {requestWithdrawal && <View>
                <Text  style={{marginTop: 20,marginBottom: 15,marginLeft: 15,fontFamily: 'Roboto',fontSize: 16, fontWeight: '700'}}>Withdrawals</Text>
                {!bonusBooster && <FlatList data={withdrawals} renderItem={({ item }) => (
                    <View style={styles.listGroup}>
                        <View style={styles.listItem}>
                        <Text style={styles.processBank}>{item.isProcessedByBank}</Text>
                        <Text style={styles.processBank}>{item.amount}</Text>
                        </View>
                        <View style={styles.listItem1}>
                        <Text style={styles.date}>{item.dateTime}</Text>
                        <Text style={styles.transaction}>{item.transactionID}</Text>
                        </View>
                    </View>
                )}/>}
                {bonusBooster && <FlatList data={boosterInfo}  renderItem={({item}) => (
                    <View>
                    <View style={styles.listGroup}>
                        <View style={styles.listItem}>
                            <Text style={styles.processBank}>{item.booster}</Text>
                            <Text style={styles.processBank}>{item.amount} of {item.of}</Text>
                        </View>
                        <View style={styles.listItem1}>
                            <Text style={styles.date}>{item.boosterId}</Text>
                            <Text style={styles.transaction}>Expires on {item.expiryDate}</Text>
                        </View>
                        <Text style={{fontSize: 10, backgroundColor: 'rgba(139, 255, 210, 0.3)', textAlign: 'center', top: 10,display: 'flex', marginLeft: -10, marginRight: -10}}>{item.status}</Text>
                    </View>
                    </View>
                )}

                />}
            </View>}

            {!requestWithdrawal && <RequestWithdrawal />}
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 120
    },
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



