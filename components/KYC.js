import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ImagePickerIOS } from "react-native";
import { TextInput } from "react-native-paper";
import {Button} from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker'
import Header from "./Header";
export default function KYC() {
  const [text, onChangeText] = useState("Useless Text");
  const [showNote, checkShowNote] = useState(false);
  const [bankDetailsUpdated, checkBankDetailsUpdated] = useState(false);
  const [selectFileButton, showSelectFileButton] = useState(true);
  const [uploadGuide, showUploadGuide] = useState(true);
  const [showTerms, showTermsAndConditions] = useState(false);
  const [selectedImage, selectedImageName] = useState('Pan_Rishab.jpg');
  const [uploadButton, selectUploadButton] = useState(false);
  const [showCalendar, showDateTimePicker] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [image, setImage] = useState(null);

  const options = {
    storageOptions: {
      path: "images", 
      mediaType: 'photo'
    },
    includeBase64: true,
  };

  function onDOBChange(){
    const dateOfBirth = date;
    setDate(dateOfBirth);
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View>
      <Header />
      <View>
        <View style={styles.mainKYCContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("./../assets/left_arrow.png")} />
            <Text style={{ fontSize: 15, paddingLeft: 5, fontWeight: "900" }}>
              {" "}
              Back
            </Text>
          </View>
          <Text style={styles.kycHeading}>KYC</Text>
          {/* <View style={styles.inputContainer}>
            <View style={{ marginLeft: 20, marginRight: 20, padding: 10 }}>
              <TextInput
                theme={{ roundness: 10 }}
                label="Pan Number"
                length={10}
                style={styles.input}
                mode="outlined"
                activeOutlineColor="#3A3B3C"
                right={<TextInput.Icon name="pencil" color="grey" />}
              />

              <TextInput
                theme={{ roundness: 10 }}
                label="Bank Account Number"
                length={10}
                style={styles.input2}
                mode="outlined"
                activeOutlineColor="#3A3B3C"
                right={<TextInput.Icon name="pencil" color="grey" />}
              />

              <Text
                style={{
                  textAlign: "left",
                  color: "#BD311E",
                  fontWeight: "700",
                  marginBottom: 10,
                  fontSize: 12,
                }}
              >
                &#9432; Your Bank Account details are not Up to date.
              </Text>
            </View>
          </View> */}

          {/* 2nd KYC screen */}
          <View style={styles.inputContainer}>
            <View style={{ marginLeft: 20, marginRight: 20, padding: 10 }}>
              <TextInput
                theme={{ roundness: 10 }}
                label="Pan Number"
                length={10}
                style={styles.input}
                mode="outlined"
                activeOutlineColor="#3A3B3C"
                right={<TextInput.Icon name="pencil" color="grey" />}
              />

              <TextInput
                theme={{ roundness: 10 }}
                label="Date of Birth"
                placeholder="DD/MM/YYYY"
                length={10}
                style={styles.input2}
                mode="outlined"
                activeOutlineColor="#3A3B3C"
                right={<TextInput.Icon name="pencil" color="grey" />}
                onFocus={() => showDateTimePicker(true)}
              />
              {bankDetailsUpdated && (
                <Text
                  style={{
                    textAlign: "left",
                    color: "#BD311E",
                    fontWeight: "700",
                    marginBottom: 10,
                    fontSize: 12,
                  }}
                >
                  &#9432; Your Bank Account details are not Up to date.
                </Text>
              )}
            </View>
          </View>
          {showNote && (
            <Text style={{ fontSize: 12, marginLeft: 15, marginRight: 15 }}>
              {showNote}Note : The verification process may take upto 48 hours
              from the time of Submission. Do not send or Submit any Documents
              over email. Upload them only here.
            </Text>
          )}
          {showCalendar && <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onDOBChange}
        />}
          {uploadGuide && (
            <View style={{margin: 10}}>
              <Text style={{fontSize: 12, fontWeight: '700'}}>Guide to Upload</Text>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>Please provide jpg, jpeg, png formats only</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>Ensure that your Name, Photo PAN Number is visible on the image/PDF</Text>
              </View>
            </View>
          )}
        </View>
        {showTerms &&  <View>
          <Text style={styles.terms}>Terms and Conditions</Text>
        </View>}
        {selectedImage && <View  style={styles.selectedImage}>
            <Text style={{backgroundColor: "#D2D2D2",padding: 5, borderRadius: 5}}>{selectedImage} is selected</Text>
          </View>}
       
        {selectFileButton && (
          <View style={{ alignItems: "center", marginTop: 50}}>
            <TouchableOpacity>
            <Button titleStyle={{color:"#2A3B4A", fontSize: 22, fontWeight: '500'}} buttonStyle={styles.selectFileButton} title="Select File" onPress={pickImage}/>
            </TouchableOpacity>
          </View>
        )}
        {uploadButton && (
          <View style={{ alignItems: "center", marginTop: 50}}>
            <TouchableOpacity>
            <Button titleStyle={{color:"#2A3B4A", fontSize: 22, fontWeight: '500'}} buttonStyle={styles.selectFileButton} title="Upload"/>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainKYCContainer: {
    margin: 10,
    marginTop: 120,
  },
  kycHeading: {
    marginTop: 30,
    marginLeft: 15,
    fontWeight: "900",
    fontSize: 18,
  },
  inputContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 20,
  },
  input: {
    // height: 40,
    borderRadius: 20,
    backgroundColor: "white",
  },
  input2: {
    // height: 40,
    marginTop: 30,
    marginBottom: 0,
    borderRadius: 10,
    backgroundColor: "white",
  },
  terms: {
    marginTop: 120,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    textDecorationLine: "underline",
  },
  selectFileButton: {
    backgroundColor: '#F1CE47',
    width: Dimensions.get("window").width * 0.8,
    padding: 10,
    borderRadius: 10
  },
  selectedImage: {
    padding: 5,
    alignItems: "center", 
    marginTop: 30
  }
});
