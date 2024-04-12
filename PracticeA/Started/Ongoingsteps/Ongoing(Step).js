import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import ProgSteps from "../Steps/Progress/progsteps";
import ProgStep from "../Steps/Progress/progstep";
import Insurance from "./Ongoingsteps/Insurance"; // Import the FAQScreen component here
import Visit from "./Ongoingsteps/Visit";
import Loginsignup from "./Ongoingsteps/Loginsignup";

class Steps extends Component {
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
      <View style={styles.container}>
        <ProgSteps>
          <ProgStep
            label="Insurance"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <Insurance />
          </ProgStep>

          <ProgStep
            label="Visit"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <Visit />
          </ProgStep>
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
          >
            <Loginsignup />
          </ProgStep>

          <ProgStep
            label="Finished"
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            scrollViewProps={this.defaultScrollViewProps}
          />
        </ProgSteps>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Set the background color to white
  },
});

export default Steps;
