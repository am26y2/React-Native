import React from "react";
import { View, Image, Text } from "react-native";
import Header from "./Header";
export default function HowToPlay() {
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

        <View style={{ margin: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: "700", color: "#323232" }}>
            How to Play
          </Text>
          <Text style={{ fontSize: 12, opacity: 0.5 }}>
            Just Getting Started in the world of GoKhel? {'\n'} Let’s start your
            journey by understanding the rules and you’ll be acing the game in
            no time.
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "700",marginTop: 15, marginBottom: 15 }}>Quick to Understand</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
            nisi pharetra, viverra est vitae, gravida urna. Maecenas iaculis
            luctus libero et viverra. Sed pulvinar sed purus ut vehicula.
            Pellentesque in ullamcorper sem. Etiam urna diam, pharetra ut
            dignissim id, porta cursus diam. Ut eu ultricies ligula, non
            dignissim quam. Duis consequat feugiat bibendum. Morbi blandit diam
            enim. Sed sed malesuada ante.
          </Text>
          <View style={{marginLeft: 10, marginTop: 15}}>
                <View style={{flexDirection: 'row'}}>
                    <Text>{'\u2022'}</Text>
                    <Text style={{flex: 1, paddingLeft: 5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
            nisi pharetra, viverra est vitae, gravida urna. Maecenas iaculis
            luctus libero et viverra.</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>{'\u2022'}</Text>
                    <Text style={{flex: 1, paddingLeft: 5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
            nisi pharetra, viverra est vitae, gravida urna. Maecenas iaculis
            luctus libero et viverra.</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>{'\u2022'}</Text>
                    <Text style={{flex: 1, paddingLeft: 5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
            nisi pharetra, viverra est vitae, gravida urna. Maecenas iaculis
            luctus libero et viverra.</Text>
                </View>
            </View>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
            nisi pharetra, viverra est vitae, gravida urna. Maecenas iaculis
            luctus libero et viverra. Sed pulvinar sed purus ut vehicula.
            Pellentesque in ullamcorper sem. Etiam urna diam, pharetra ut
            dignissim id, porta cursus diam. Ut eu ultricies ligula, non
            dignissim quam.
            </Text>
        </View>
      </View>
    </View>
  );
}
