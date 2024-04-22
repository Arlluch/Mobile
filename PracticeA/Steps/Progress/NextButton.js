import React, { Component } from "react";
import { TouchableOpacity, Text, Platform, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class NextButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextBtnText: "Governmental",
    };
  }

  onNextStep = async () => {
    this.props.onNext && (await this.props.onNext());

    if (this.props.errors) {
      return;
    }

    this.props.setActiveStep(this.props.activeStep + 1);
    // Update the button text dynamically
    if (this.state.nextBtnText === "Yes") {
      this.setState({ nextBtnText: "Governmental" });
    } else if (this.state.nextBtnText === "Governmental") {
      this.setState({ nextBtnText: "No" });
    }
  };

  onSubmit = () => {
    this.props.onSubmit && this.props.onSubmit();
  };

  render() {
    const btnStyle = {
      width: windowWidth * 0.8,
      height: windowHeight * 0.07,
      backgroundColor: "#FFB200",
      borderRadius: 100,
      marginBottom: windowHeight * 0.3,
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
      ...this.props.nextBtnStyle,
    };

    const btnTextStyle = {
      color: "#fff",
      fontSize: 18,
      ...this.props.nextBtnTextStyle,
    };

    const disabledBtnText = {
      color: "#cdcdcd",
    };

    let textStyle = [btnTextStyle];
    if (this.props.nextBtnDisabled) textStyle.push(disabledBtnText);

    return (
      <TouchableOpacity
        style={btnStyle}
        onPress={
          this.props.activeStep === this.props.stepCount - 1
            ? this.onSubmit
            : this.onNextStep
        }
        disabled={this.props.nextBtnDisabled}
      >
        <Text style={textStyle}>
          {this.props.activeStep === this.props.stepCount - 1
            ? this.props.finishBtnText
            : this.state.nextBtnText}
          {""}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default NextButton;
