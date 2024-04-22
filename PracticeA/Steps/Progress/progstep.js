import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import PropTypes from "prop-types";
import NextButton from "./NextButton";
import PreviousButton from "./NextButton2";
import CardBoxfordoc from "./CardBoxbutton";

class ProgStep extends Component {
  render() {
    const scrollViewProps = this.props.scrollViewProps || {};
    const viewProps = this.props.viewProps || {};
    const isScrollable = this.props.scrollable;
    const buttonRow =
      this.props.activeStep < 2 ? (
        <View style={{ alignItems: "center" }}>
          <PreviousButton {...this.props} />
          <NextButton {...this.props} />
        </View>
      ) : this.props.activeStep === 2 ? (
        <View style={{ alignItems: "center" }}>
          <CardBoxfordoc {...this.props} />
        </View>
      ) : null;

    return (
      <View style={{ flex: 1 }}>
        {isScrollable ? (
          <ScrollView {...scrollViewProps}>{this.props.children}</ScrollView>
        ) : (
          <View {...viewProps}>{this.props.children}</View>
        )}

        {buttonRow}
      </View>
    );
  }
}

ProgStep.propTypes = {
  label: PropTypes.string,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  onSubmit: PropTypes.func,
  setActiveStep: PropTypes.func,
  nextBtnText: PropTypes.string,
  previousBtnText: PropTypes.string,
  finishBtnText: PropTypes.string,
  stepCount: PropTypes.number,
  nextBtnStyle: PropTypes.object,
  nextBtnTextStyle: PropTypes.object,
  nextBtnDisabled: PropTypes.bool,
  previousBtnStyle: PropTypes.object,
  previousBtnTextStyle: PropTypes.object,
  previousBtnDisabled: PropTypes.bool,
  scrollViewProps: PropTypes.object,
  viewProps: PropTypes.object,
  errors: PropTypes.bool,
  removeBtnRow: PropTypes.bool,
  scrollable: PropTypes.bool,
};

ProgStep.defaultProps = {
  nextBtnText: "",
  previousBtnText: "",
  finishBtnText: "Submit",
  nextBtnDisabled: false,
  previousBtnDisabled: false,
  errors: false,
  removeBtnRow: false,
  scrollable: true,
};

export default ProgStep;
