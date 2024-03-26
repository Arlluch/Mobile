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

const DATA = {
  Fever: [
    {
      id: "1",
      color: "#F7F8FA",
      image: require("../assets/thermometer-.png"),
      text1: "Body temp",
    },
    {
      id: "2",
      color: "#F7F8FA",
      image: require("../assets/vomit.png"),
      text1: "Body Pain",
    },
    {
      id: "3",
      color: "#F7F8FA",
      image: require("../assets/woman-with-chest.png"),
      text1: "Vomiting",
    },
    {
      id: "4",
      color: "#F7F8FA",
      image: require("../assets/vomit.png"),
      text1: "Body Pain",
    },
  ],
  "Runny Nose": [
    {
      id: "1",
      color: "#F7F8FA",
      image: require("../assets/man-sneezing.png"),
      text1: "Sneezing",
    },
    {
      id: "2",
      color: "#F7F8FA",
      image: require("../assets/man-with-rash.png"),
      text1: "Eyes Watery",
    },
    {
      id: "3",
      color: "#F7F8FA",
      image: require("../assets/nose.png"),
      text1: "Stuffy Nose",
    },
  ],
  Pain: [
    {
      id: "1",
      color: "#F7F8FA",
      image: require("../assets/headache.png"),
      text1: "Headache",
    },
    {
      id: "2",
      color: "#F7F8FA",
      image: require("../assets/abdominal-pain.png"),
      text1: "Stomachache",
    },
    {
      id: "3",
      color: "#F7F8FA",
      image: require("../assets/woman-with-chest-pain.png"),
      text1: "Chest Pain",
    },
  ],
};

const Box = ({ color, image, text1 }) => (
  <View style={[styles.box, { backgroundColor: color }]}>
    <Image source={image} style={styles.image} />
    <Text style={styles.text}>{text1}</Text>
  </View>
);

const Homepage = () => {
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
        {Object.entries(DATA).map(([category, data]) => (
          <View key={category}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{category}</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.boxContainer}>
                {data.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => handleBoxPress(item)}
                  >
                    <Box
                      color={item.color}
                      image={item.image}
                      text1={item.text1}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
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
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  boxContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  box: {
    width: windowWidth / 3 - 10,
    height: 150,
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

export default Homepage;
