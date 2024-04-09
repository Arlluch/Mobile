import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const Insurance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        {/* Progress Circles */}
        <View style={styles.progressCircleContainer}>
          <View style={[styles.progressCircle, styles.activeCircle]} />
          <Text style={styles.progressStep}>Step 1</Text>
        </View>
        <View style={styles.progressCircleContainer}>
          <View style={[styles.progressCircle, styles.activeCircle]} />
          <Text style={styles.progressStep}>Step 2</Text>
        </View>
        <View style={styles.progressCircleContainer}>
          <View style={[styles.progressCircle, styles.activeCircle]} />
          <Text style={styles.progressStep}>Step 3</Text>
        </View>
        <View style={styles.progressCircleContainer}>
          <View style={styles.progressCircle} />
          <Text style={styles.progressStep}>Step 4</Text>
        </View>
        <View style={styles.progressCircleContainer}>
          <View style={styles.progressCircle} />
          <Text style={styles.progressStep}>Step 5</Text>
        </View>
        <View style={styles.progressCircleContainer}>
          <View style={styles.progressCircle} />
          <Text style={styles.progressStep}>Step 6</Text>
        </View>
      </View>
      {/* Progress Line */}
      <View style={styles.progressLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  progressCircleContainer: {
    alignItems: "center",
  },
  progressCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FFB200",
    borderWidth: 1,
    borderColor: "#FFB200",
  },
  activeCircle: {
    backgroundColor: "#FFB200", // Active circle color
  },
  progressStep: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
    color: "#999999",
  },
  progressLine: {
    height: 2,
    backgroundColor: "#FFB200",
  },
});

export default Insurance;
