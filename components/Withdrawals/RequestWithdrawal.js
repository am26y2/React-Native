import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity, Dimensions} from 'react-native';
import { TextInput } from "react-native-paper";
import {Button} from 'react-native-elements';
import Header from "../Header";

export default function RequestWithdrawal() {
    return (
        <View>
            <View style={styles.balance}>
                <Text>Withdrawable Balance</Text>
                <Text style={{fontWeight: '700'}}>10,000</Text>
            </View>
            <View style={styles.inputContainer}>
            <TextInput
                theme={{ roundness: 10 }}
                label="Account Holder's Full Name"
                length={10}
                style={styles.input}
                mode="outlined"
              />
            <TextInput
                theme={{ roundness: 10 }}
                label="Bank IFSC Code"
                length={10}
                style={styles.input}
                mode="outlined"
              />
            <TextInput
                theme={{ roundness: 10 }}
                label="Account Number"
                length={10}
                style={styles.input}
                mode="outlined"
              />
            <TextInput
                theme={{ roundness: 10 }}
                label="Confirm Account Number"
                length={10}
                style={styles.input}
                mode="outlined"
              />
            <TextInput
                theme={{ roundness: 10 }}
                label="Account"
                length={10}
                style={styles.input}
                mode="outlined"
              />
            <TextInput
                theme={{ roundness: 10 }}
                label="UPI Handle"
                length={10}
                style={styles.input}
                mode="outlined"
              />
            </View>
            <View style={{ alignItems: "center", bottom: 10}}>
            <TouchableOpacity>
            <Button titleStyle={{color:"#2A3B4A", fontSize: 22, fontWeight: '500'}} buttonStyle={styles.selectFileButton} title="Submit"/>
            </TouchableOpacity>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    balance: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 30
    },
    input: {
        // height: 40,
        borderRadius: 20,
        backgroundColor: "white",
        marginTop: 10
    },
    inputContainer: {
        margin: 25
    },
    selectFileButton: {
        backgroundColor: '#F1CE47',
        width: Dimensions.get("window").width * 0.8,
        padding: 10,
        borderRadius: 10
    }
})
