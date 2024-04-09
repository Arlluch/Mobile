import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  Platform,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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
  {
    id: "3",
    color: "#F7F8FA",
    image: require("../assets/dentist.png"),
    text1: "Dentist",
    text2: "2,029 Doctors",
  },
  {
    id: "4",
    color: "#F7F8FA",
    image: require("../assets/dna.png"),
    text1: "Genetics",
    text2: "2,029 Doctors",
  },
  {
    id: "5",
    color: "#F7F8FA",
    image: require("../assets/neurology.png"),
    text1: "Neurology",
    text2: "2,029 Doctors",
  },
];

const DATA1 = [
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
    text1: "Genetics",
  },
  {
    id: "5",
    color: "#F7F8FA",
    image: require("../assets/woman-with-chest.png"),
    text1: "Neurology",
  },
];

const Box = ({ color, image, text1, text2 }) => (
  <View style={[styles.box, { backgroundColor: color }]}>
    <Image source={image} style={styles.image} />
    <Text style={styles.text}>{text1}</Text>
    <Text style={styles.textt}>{text2}</Text>
  </View>
);

function Homepage({ navigation }) {
  const [activeButton, setActiveButton] = useState("Home");
  const [activeButton1, setActiveButton1] = useState("AAppointmentpage");
  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");
  const [suggestions1, setSuggestions1] = useState([]);
  const [suggestions2, setSuggestions2] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  const handleInputChange1 = (text) => {
    setQuery1(text);

    const staticSuggestions = [
      "Dr. Name",
      "Dr. Name1",
      "Fever",
      "Pain",
      "Body",
    ];
    const filteredSuggestions = staticSuggestions.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions1(filteredSuggestions);
  };

  const handleInputChange2 = (text) => {
    setQuery2(text);

    const staticSuggestions = [
      "Location1",
      "Location2",
      "Location3",
      "Location4",
      "Location5",
    ];
    const filteredSuggestions = staticSuggestions.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions2(filteredSuggestions);
  };

  const handleSuggestionPress1 = (suggestion) => {
    setQuery1(suggestion);
    setSuggestions1([]);
  };

  const handleSuggestionPress2 = (suggestion) => {
    setQuery2(suggestion);
    setSuggestions2([]);
  };

  const hideSuggestions1 = () => {
    setSuggestions1([]);
  };

  const hideSuggestions2 = () => {
    setSuggestions2([]);
  };

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const renderSuggestionItem = ({ item }) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => handleSuggestionPress1(item)}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  const renderSuggestionItem2 = ({ item }) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => handleSuggestionPress2(item)}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
        <ImageBackground
          style={styles.background}
          source={require("../assets/Doctor.png")}
        >
          <View style={styles.selectListContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Search here..."
                value={query1}
                onChangeText={handleInputChange1}
                onFocus={() => toggleDropdown(1)}
              />
              {activeDropdown === 1 && suggestions1.length > 0 && (
                <>
                  <FlatList
                    data={suggestions1}
                    renderItem={renderSuggestionItem}
                    keyExtractor={(item, index) => index.toString()}
                    style={styles.suggestionList}
                  />
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={hideSuggestions1}
                  >
                    <MaterialIcons name="close" size={24} color="black" />
                  </TouchableOpacity>
                </>
              )}
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Search Location"
                value={query2}
                onChangeText={handleInputChange2}
                onFocus={() => toggleDropdown(2)}
              />
              {activeDropdown === 2 && suggestions2.length > 0 && (
                <>
                  <FlatList
                    data={suggestions2}
                    renderItem={renderSuggestionItem2}
                    keyExtractor={(item, index) => index.toString()}
                    style={styles.suggestionList}
                  />
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={hideSuggestions2}
                  >
                    <MaterialIcons name="close" size={24} color="black" />
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>

          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.buttonTextt}>Search</Text>
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Specialty</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("AppointmentList")}
          >
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.boxContainer}>
            {DATA.map((item) => (
              <Box
                key={item.id}
                color={item.color}
                image={item.image}
                text1={item.text1}
                text2={item.text2}
              />
            ))}
          </View>
        </ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Symptoms</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Symptoms")}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.boxContainer}>
            {DATA1.map((item) => (
              <Box
                key={item.id}
                color={item.color}
                image={item.image}
                text1={item.text1}
                text2={item.text2}
              />
            ))}
          </View>
        </ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.textend}>
            In our mobile application, we prioritize the utmost security and
            confidentiality of our users' personal information, ensuring that
            every aspect of their privacy and data protection
          </Text>
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Impressum and Datenschutz</Text>
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
  },
  background: {
    width: windowWidth,
    height: windowHeight * 0.5,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  marg: {
    marginTop: 200,
  },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    marginBottom: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAll: {
    fontSize: 16,
    color: "black",
  },
  boxContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  box: {
    width: windowWidth / 3 - 20,
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
  textt: {
    fontSize: 10,
    fontWeight: "thin",
    textAlign: "center",
  },
  textend: {
    padding: 20,
    fontSize: 14,
    fontWeight: "semibold",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#F3F3F3",
  },
  footerText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  buttonTextt: {
    color: "#fff",
    fontSize: 14,
  },
  searchButton: {
    width: 180,
    height: 50,
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
  suggestionList: {
    position: "absolute",
    top: "70%",
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 0,
    backgroundColor: "#fff",
    zIndex: 1,
    borderTopWidth: 0,
  },
  suggestionItem: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 2,
  },
  inputContainer: {
    width: windowWidth * 0.7,
    position: "relative",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});

export default Homepage;
