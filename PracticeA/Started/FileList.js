// FileList.js

import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

const FileList = ({ files, onFilePress }) => {
  return (
    <FlatList
      data={files}
      keyExtractor={(item) => item.path}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onFilePress(item)}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default FileList;
