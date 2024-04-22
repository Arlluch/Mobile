import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CardBox from "../Progress/CardBoxfordoc";
const FolderListItem = ({ name, isFolder, itemsCount, onPress }) => {
  const icon = isFolder
    ? require("../../assets/Folder.png")
    : require("../../assets/File.png");

  return (
    <TouchableOpacity onPress={onPress} style={styles.folderContainer}>
      <View style={styles.card}>
        <Image source={icon} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.folderName}>{name}</Text>
          {isFolder && <Text style={styles.subtitle}>{itemsCount} items</Text>}
        </View>
        {isFolder && (
          <MaterialIcons name="chevron-right" size={24} color="black" />
        )}
      </View>
    </TouchableOpacity>
  );
};

const FolderList = () => {
  const folders = [
    {
      name: "Folder 1",
      files: ["File 1", "File 2", "File 3"],
    },
    {
      name: "Folder 2",
      files: ["File 4", "File 5"],
    },
  ];

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

  const [currentStep, setCurrentStep] = useState(1);
  const [currentFolder, setCurrentFolder] = useState(null);
  const [currentFile, setCurrentFile] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const navigation = useNavigation();

  const handleFolderPress = (folderName) => {
    setCurrentFolder(folderName);
    setCurrentStep(2);
  };

  const handleFilePress = (fileName) => {
    setCurrentFile(fileName);
    setCurrentStep(3);
  };

  const handleBackButtonPress = () => {
    if (currentStep === 1) {
      navigation.goBack();
    } else if (currentStep === 2) {
      setCurrentFolder(null);
      setCurrentStep(1);
    } else {
      setCurrentFile(null);
      setCurrentStep(2);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {currentStep === 1
          ? "Please choose the right appointment type"
          : currentStep === 2
          ? "Please choose the right appointment type"
          : "Which doctor do you want to go?"}
      </Text>
      <View style={styles.topRow}>
        {currentFolder && (
          <TouchableOpacity
            onPress={handleBackButtonPress}
            style={styles.backButton}
          >
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        )}
        <Text style={styles.path}>
          {currentStep === 3 ? currentFile : currentFolder ? currentFolder : ""}
        </Text>
        <TouchableOpacity
          onPress={() => setSearchVisible(!searchVisible)}
          style={styles.searchIcon}
        >
          <MaterialIcons
            name="search"
            size={24}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {searchVisible && (
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={(text) => console.log(text)}
        />
      )}
      {currentStep === 1
        ? folders.map((folder, index) => (
            <FolderListItem
              key={index}
              name={folder.name}
              itemsCount={folder.files.length}
              isFolder={true}
              onPress={() => handleFolderPress(folder.name)}
            />
          ))
        : currentStep === 2
        ? folders
            .find((folder) => folder.name === currentFolder)
            .files.map((file, index) => (
              <FolderListItem
                key={index}
                name={file}
                isFolder={false}
                onPress={() => handleFilePress(file)}
              />
            ))
        : doctorsData.map((doctor, index) => (
            <CardBox
              key={index}
              name={doctor.name}
              specialization={doctor.specialization}
              language={doctor.language}
              location={doctor.location}
              schedule={doctor.schedule}
            />
          ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 10,
  },
  path: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
  },
  searchIcon: {
    marginLeft: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  folderContainer: {
    width: " 95%",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  folderName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#A6A6A6",
  },
  searchInput: {
    width: "95%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default FolderList;
