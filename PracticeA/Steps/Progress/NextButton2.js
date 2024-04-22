import React, { Component } from "react";
import { TouchableOpacity, Text, Platform, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class PreviousButton extends Component {
  onPreviousStep = () => {
    this.props.onPrevious && this.props.onPrevious();
    this.props.setActiveStep(this.props.activeStep + 1);

    this.setState({ nextBtnText: "No" });
  };

  render() {
    const btnStyle = {
      width: windowWidth * 0.8,
      height: windowHeight * 0.07,
      backgroundColor: "#FFB200",
      borderRadius: 100,
      marginBottom: windowHeight * 0.05,
      justifyContent: "center",
      alignItems: "center",
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
        android: {
          elevation: 5,
        },
      }),
      ...this.props.previousBtnStyle,
    };

    const btnTextStyle = {
      color: "#fff",
      fontSize: 18,
      ...this.props.previousBtnTextStyle,
    };

    const disabledBtnText = {
      color: "#cdcdcd",
    };

    let textStyle = [btnTextStyle];
    if (this.props.previousBtnDisabled) textStyle.push(disabledBtnText);

    return (
      <TouchableOpacity
        style={btnStyle}
        onPress={this.onPreviousStep}
        disabled={this.props.previousBtnDisabled}
      >
        <Text style={textStyle}>
          {this.props.activeStep === 0
            ? "Private/Self-payers"
            : this.props.activeStep === 1
            ? "Yes"
            : this.props.previousBtnText}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default PreviousButton;
