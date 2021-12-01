import { style } from "dom-helpers";
import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "./Header";

const How_to_Play = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ marginHorizontal: 0, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>How to Play</Text>
        <Text style={styles.para}>
          {"\u2022"}
          {"    "}
          You join a league.
        </Text>
        <Text style={styles.para}>
          You join a league. You can join a public league, where anyone can sign
          up for a spot, or a private league, where you need an invitation to
          play. Some people, typically beginners, play just for fun and some
          play for money (in some cases, serious coin). Be sure to understand
          the type of league you join, along with its rules. League selection is
          an important factor, so don’t take it lightly.
        </Text>
        <Text style={styles.para}>
          {"\u2022"}
          {"    "}
          You prepare for your league draft by scouting players.
        </Text>
        <Text style={styles.para}>
          Before choosing your fantasy team, you need to research all the
          available players so you can pre-rank them according to your personal
          preference. Understanding your league’s scoring system and roster
          setup is critical to creating a bulletproof draft strategy.
        </Text>
        <Text style={styles.para}>
          {"\u2022"}
          {"    "}
          You build your fantasy football team via the draft.
        </Text>
        <Text style={styles.para}>
          The draft is the most fun and exciting day of the fantasy season.
          During the draft, each fantasy owner selects on NFL player at a time
          until the rosters are complete. Fantasy football drafts can take place
          online, but some leagues — typically friends or co-workers — will
          conduct the draft in person. Remember to draft all of the correct
          positions, so that you can have a full team roster.
        </Text>
        <Text style={styles.para}>
          {"\u2022"}
          {"    "}
          Your team competes against another team every week.
        </Text>
        <Text style={styles.para}>
          During the NFL season, the real teams face each other and so do the
          fantasy teams in your league. The players’ real-time stats are
          converted into fantasy points by your league provider, and the fantasy
          team that scores the most points wins the game for the week. The goal
          is to win as many games as possible to make the playoffs.
        </Text>
        <Text style={styles.para}>
          {"\u2022"}
          {"    "}
          You make moves to improve your team.
        </Text>
        <Text style={styles.para}>
          As a fantasy owner, you’re in total control. You can drop players you
          think aren’t good enough and replace them with free agents. If one of
          your starters gets injured, you can bench him and start a healthy
          player instead. You may even make a trade offer to another owner.
        </Text>
        <Text style={styles.para}>
          {"\u2022"}
          {"    "}
          Your team (hopefully) makes the playoffs and wins your league.
        </Text>
        <Text style={styles.para}>
          Only the strong survive, and at the end of the fantasy season, the top
          teams square off in a single-elimination tournament to decide the
          league champion. The last team standing may win a trophy, a cash
          prize, or just honor; but make no mistake, there will be only one
          winner.
        </Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  para: {
    marginVertical: 10,
  },
});
export default How_to_Play;
