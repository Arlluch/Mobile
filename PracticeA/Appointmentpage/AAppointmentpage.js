import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import CardBox from "./Archivebutton";
import CardBox1 from "./Appointmentbutton";

import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AAppointmentpage = () => {
  const [activeButton2, setActiveButton2] = useState("Home");
  const [activeButton1, setActiveButton1] = useState("AAppointmentpage");
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [activeButton, setActiveButton] = useState(true);
  const handleButtonPress = (buttonName) => {
    setActiveButton2(buttonName);
    if (buttonName === "Home") {
      navigation.navigate("homepage");
    }
  };
  const handleButtonPress1 = (buttonName1) => {
    setActiveButton1(buttonName1);
    if (buttonName1 === "AAppointmentpage") {
      navigation.navigate("AAppointmentpage");
    }
  };
  const navigateToFilter = () => {
    navigation.navigate("Filter");
  };

  const doctorsData = [
    {
      name: "John Doe",
      specialization: "Internal Medicine",
      language: "English, German",
      location: "Im Obergarten 8, Hofheim am Taunus Taunus",
      schedule: "Sunday, June 24 11:00 - 13:00",
    },
    {
      name: "John Doe",
      specialization: "Internal Medicine",
      language: "English, German",
      location: "Im Obergarten 8, Hofheim am Taunus Taunus",
      schedule: "Sunday, June 24 11:00 - 12:00",
    },
    {
      name: "John Doe",
      specialization: "Medicine",
      language: "German",
      location: "Im Obergarten 8, Hofheim am Taunus Taunus",
      schedule: "Sunday, June 24 12:00 - 13:00",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />

        <TouchableOpacity
          style={styles.filterIconContainer}
          onPress={navigateToFilter}
        >
          <Image
            source={require("../assets/filter_icon.png")}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            { backgroundColor: activeButton ? "#FFB200" : "#E7EDFD" },
          ]}
          onPress={() => setActiveButton(true)}
        >
          <Text style={styles.filterButtonText}>Appointment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            { backgroundColor: !activeButton ? "#FFB200" : "#E7EDFD" },
          ]}
          onPress={() => setActiveButton(false)}
        >
          <Text style={styles.filterButtonText}>Archive</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.titleContainer}>
          {activeButton ? (
            <>
              {doctorsData.slice(0, 2).map((doctor, index) => (
                <CardBox1
                  key={index}
                  name={doctor.name}
                  specialization={doctor.specialization}
                  language={doctor.language}
                  schedule={doctor.schedule}
                />
              ))}
            </>
          ) : (
            <>
              {doctorsData.slice(0, 3).map((doctor, index) => (
                <CardBox
                  key={index}
                  name={doctor.name}
                  specialization={doctor.specialization}
                  language={doctor.language}
                  schedule={doctor.schedule}
                />
              ))}
            </>
          )}
        </View>
      </ScrollView>
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.bottomButton,
            activeButton2 === "Home" ? styles.activeButton2 : null,
          ]}
          onPress={() => handleButtonPress("Home")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomButton,
            activeButton1 === "AAppointmentpage" ? styles.activeButton1 : null,
          ]}
          onPress={() => handleButtonPress1("AAppointmentpage")}
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
    backgroundColor: "white",
  },
  title: {
    fontSize: windowWidth * 0.08,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: windowHeight * 0.02,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  titleContainer: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "5%",
    marginTop: "3%",
    marginBottom: "3%",
    marginLeft: "5%",
    marginRight: "5%",
  },

  searchInput: {
    flex: 1,
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  filterIconContainer: {
    marginLeft: 10,
  },
  filterIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  filterButton: {
    width: "58%",
    marginHorizontal: 5,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFB200",
    borderRadius: 100,
    marginBottom: 10,
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
  filterButtonText: {
    color: "#000",
    fontWeight: "bold",
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
  activeButton1: {
    backgroundColor: "#FFB200",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});

export default AAppointmentpage;
