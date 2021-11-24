import React, { Component } from "react";
import { View, Text } from "react-native";

import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

class Progress extends Component {
  render() {
    const progressStepsStyle = {
      };

    return (
      <View >
        <ProgressSteps>
          <ProgressStep label="Enter Ph. No">
           </ProgressStep>
          <ProgressStep label="OTP">
           </ProgressStep>
          <ProgressStep label="We’re set!">
           </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

export default Progress;
