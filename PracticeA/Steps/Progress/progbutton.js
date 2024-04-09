import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const ProgButton = (props) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={props.onPrevious}>
      <View style={styles.buttonWrapper}>{props.renderPreviousButton()}</View>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.onNext}>
      <View style={styles.buttonWrapper}>{props.renderNextButton()}</View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  buttonWrapper: {
    marginHorizontal: 10,
  },
});

export default ProgButton;
