import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

const DATA = [
  {
    id: "1",
    color: "#F7F8FA",
    image: require("../assets/dna.png"),
    text1: "Genetics",
    text2: "2,029 Doctors",
  },
  {
    id: "2",
    color: "#F7F8FA",
    image: require("../assets/neurology.png"),
    text1: "Neurology",
    text2: "2,029 Doctors",
  },
];

const Box = ({ color, image, text1, text2 }) => (
  <View style={[styles.box, { backgroundColor: color }]}>
    <Image source={image} style={styles.image} />
    <Text style={styles.text}>{text1}</Text>
    <Text style={styles.textt}>{text2}</Text>
  </View>
);

const AppointmentList = () => {
  const [activeButton, setActiveButton] = useState("Home");
  const navigation = useNavigation();

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "Home") {
      navigation.navigate("homepage");
    }
  };
  const handleBoxPress = (item) => {
    console.log("Box pressed:");
  };
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Select the Doctor Specialization</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>our specialized doctors are below</Text>
        </View>

        {[...Array(5)].map((_, index) => (
          <View key={index} style={styles.boxContainer}>
            {DATA.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleBoxPress(item)}
              >
                <Box
                  color={item.color}
                  image={item.image}
                  text1={item.text1}
                  text2={item.text2}
                />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.bottomButton,
            activeButton === "Home" ? styles.activeButton : null,
          ]}
          onPress={() => handleButtonPress("Home")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomButton,
            activeButton === "Appointments" ? styles.activeButton : null,
          ]}
          onPress={() => handleButtonPress("Appointments")}
        >
          <Text style={styles.buttonText}>My Appointments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  boxContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  box: {
    width: windowWidth / 2.2 - 10,
    height: 220,
    borderRadius: 20,
    marginHorizontal: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "70%",
    height: "50%",
    resizeMode: "contain",
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "semibold",
    textAlign: "center",
  },
  textt: {
    fontSize: 10,
    fontWeight: "thin",
    textAlign: "center",
  },
  bottomButtonsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderTopWidth: 3,

    borderTopColor: "rgba(0, 0, 0, 0.2)",
  },

  bottomButton: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
  },

  buttonText: {
    fontSize: 16,
  },
  activeButton: {
    backgroundColor: "#FFB200",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});

export default AppointmentList;
