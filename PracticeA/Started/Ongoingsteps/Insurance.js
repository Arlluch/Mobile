import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function insurance(props) {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Which insurance type do you have?</Text>
        <TouchableOpacity style={styles.smsButton}>
          <Text style={styles.buttonText}>Private/Self-payers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.emailButton}>
          <Text style={styles.buttonText}>Insurance Button</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: windowWidth * 0.08,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: windowHeight * 0.1,
  },
  smsButton: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.08,
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
  },
  emailButton: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.08,
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
  },
  buttonText: {
    color: "#fff",
    fontSize: windowWidth * 0.04,
  },
});

export default insurance;
