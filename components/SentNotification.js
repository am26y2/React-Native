import * as React from "react";
import { Checkbox } from "react-native-paper";
import { View, Text } from "react-native";

const SentNotification = () => {
  const [data, SetData] = React.useState([
    { id: 1, txt: "SMS", isChecked: false },
    { id: 2, txt: "Whatsapp", isChecked: false },
    { id: 3, txt: "Call", isChecked: false },
    { id: 4, txt: "Email", isChecked: false },
    { id: 5, txt: "Do Not Disturb", isChecked: false },
  ]);
  function setSelection(el) {
    console.log(el);
    const newdata=data.map((curr)=>{
        if(curr.id===el){
            return {...curr}
        }
        return curr;
    },[]);
    // SetData(newdata)
    console.log(newdata);
  }

  return (
    <View style={{marginTop:20}}>
      <Text style={{ fontSize: 20}}>Send Notifications only on</Text>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          marginVertical:10,
        }}
      >
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              margin: 0,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexGrow:2,
              justifyContent:"flex-start"
            }}
          >
            <Checkbox
              status={item.isChecked}
              onPress={() => setSelection(item.id)}
            />
            <Text style={{ fontSize: 20 }}>{item.txt}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SentNotification;
