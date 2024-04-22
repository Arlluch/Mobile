import React, { Component } from "react";
import { TouchableOpacity, Text, Platform, Dimensions } from "react-native";

class CardBoxbutton extends Component {
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
      backgroundColor: "#ffb200",
      borderRadius: 50,
      paddingVertical: 8,
      paddingHorizontal: 15,
      marginRight: 10,
      justifyContent: "center",
    };

    const btnTextStyle = {
      color: "#FFFFFF",
      fontSize: 14,
      fontWeight: "bold",
      textAlign: "center",
      textAlignVertical: "center",
    };

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
        <Text style={btnTextStyle}>
          {this.props.activeStep === this.props.stepCount - 1
            ? this.props.finishBtnText
            : this.state.nextBtnText}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default CardBoxbutton;
