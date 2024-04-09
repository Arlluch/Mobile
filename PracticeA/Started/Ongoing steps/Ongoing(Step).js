import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import ProgSteps from "../Steps/Progress/progsteps";
import ProgStep from "../Steps/Progress/progstep";

class steps extends Component {
  static navigationOptions = {
    header: null,
  };

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: {
      flex: 1,
      justifyContent: "center",
    },
  };

  render() {
    return (
      <ProgSteps>
        <ProgStep
          label="Insurance"
          onNext={this.onNextStep}
          onPrevious={this.onPrevStep}
          scrollViewProps={this.defaultScrollViewProps}
        />
        <ProgStep
          label="Visit"
          onNext={this.onNextStep}
          onPrevious={this.onPrevStep}
          scrollViewProps={this.defaultScrollViewProps}
        />
        <ProgStep
          label="Appointment"
          onNext={this.onNextStep}
          onPrevious={this.onPrevStep}
          scrollViewProps={this.defaultScrollViewProps}
        />
        <ProgStep
          label="Schedule"
          onNext={this.onNextStep}
          onPrevious={this.onPrevStep}
          scrollViewProps={this.defaultScrollViewProps}
        />
        <ProgStep
          label="Information"
          onNext={this.onNextStep}
          onPrevious={this.onPrevStep}
          scrollViewProps={this.defaultScrollViewProps}
        />
        <ProgStep
          label="Finished"
          onPrevious={this.onPrevStep}
          onSubmit={this.onSubmitSteps}
          scrollViewProps={this.defaultScrollViewProps}
        />
      </ProgSteps>
    );
  }
}

export default steps;
