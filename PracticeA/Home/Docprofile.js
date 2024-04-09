import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Platform,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  FlatList,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Docprofile({ navigation }) {
  const [activeButton, setActiveButton] = useState("Home");
  const [activeButton1, setActiveButton1] = useState("AAppointmentpage");
  const [visible, setVisible] = useState(true);
  const [tableHeight, setTableHeight] = useState(new Animated.Value(0));
  const data = [
    { day: "Monday", time: "10:00 - 11:00" },
    { day: "Tuesday", time: "11:00 - 12:00" },
    { day: "Wednesday", time: "13:00 - 14:00" },
    { day: "Thursday", time: "14:00 - 15:00" },
    { day: "Friday", time: "15:00 - 16:00" },
    { day: "Saturday", time: "16:00 - 17:00" },
    { day: "Sunday", time: "17:00 - 18:00" },
  ];
  const toggleVisibility = () => {
    if (visible) {
      const expandedHeight = data.length * 50;
      Animated.timing(tableHeight, {
        toValue: expandedHeight,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(tableHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    setVisible(!visible);
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.day}</Text>
      <Text style={styles.cell}>{item.time}</Text>
    </View>
  );
  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
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

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
        <View style={styles.doctorContainer}>
          <Image
            source={require("../assets/Doctor.png")}
            style={styles.doctorImage}
          />
          <View style={styles.doctorDetails}>
            <Text style={styles.doctorName}>Dr. John Doe</Text>
            <Text style={styles.doctorSpecialization}>Cardiologist</Text>
            <Text style={styles.doctorExperience}>Experience: 10 years</Text>
            <Text style={styles.doctorLocation}>
              Im Obergarten 8, Hofheim am Taunus Taunus
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.appointmentButton}>
          <Text style={[styles.buttonText, { color: "#FFF" }]}>
            Make an Appointment
          </Text>
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>About Doctor office</Text>
          </View>
          <Text style={styles.subtitle}>
            [Doctor office name] is a top specialist at London Bridge Hospital
            at London. They have achieved several awards and recognition for is
            contribution and service in his own field.
          </Text>
          <Text style={styles.title}>Opening Hours</Text>
        </View>
        <TouchableOpacity style={styles.hideButton} onPress={toggleVisibility}>
          <Text style={styles.hideButtonText}>
            {visible ? `${data[0].day} - ${data[0].time}` : "Hide Table"}
          </Text>
        </TouchableOpacity>

        <Animated.View style={[styles.tableContainer, { height: tableHeight }]}>
          <View style={styles.tableHeader}>
            <Text style={[styles.cell, styles.headerText]}>Day</Text>
            <Text style={[styles.cell, styles.headerText]}>Time</Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.day}
            contentContainerStyle={styles.tableContent}
          />
        </Animated.View>
        <View style={styles.titleContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>Education</Text>
          </View>
          <Text style={styles.subtitles}>Med School</Text>
          <Text style={styles.subtitle}>
            Our Lady of Fatima University, 2012
          </Text>
          <Text style={styles.subtitles}>Residency</Text>
          <Text style={styles.subtitle}>
            Baguio General Hospital and Medical Center , 2019
          </Text>
        </View>
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
            activeButton1 === "AAppointmentpage" ? styles.activeButton1 : null,
          ]}
          onPress={() => handleButtonPress1("AAppointmentpage")}
        >
          <Text style={styles.buttonText}>My Appointments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,
    alignItems: "center",
  },
  doctorContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  doctorDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  doctorSpecialization: {
    fontSize: 16,
    color: "#8696BB",
    marginBottom: 5,
  },
  doctorExperience: {
    fontSize: 14,
    color: "#8696BB",
    marginBottom: 5,
  },
  doctorLocation: {
    fontSize: 14,
    color: "#8696BB",
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
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  appointmentButton: {
    width: "90%",
    height: 50,
    backgroundColor: "#FFB200",

    marginTop: 10,
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
  viewAll: {
    fontSize: 18,
    color: "black",
    marginLeft: 10,
    marginRight: 20,
  },
  titleContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  titleRows: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
  subtitles: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  hideButton: {
    padding: 10,
    width: "90%",
    backgroundColor: "#FFB200",
    borderRadius: 5,
    marginBottom: 10,
  },
  hideButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  tableContainer: {
    width: "90%",
    borderRadius: 10,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#FFB200",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tableContent: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
  headerText: {
    fontWeight: "bold",
  },
});

export default Docprofile;
