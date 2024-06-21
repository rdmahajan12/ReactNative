import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";

const ColorGenerator = () => {
  const [color, setColor]: any = useState([]);

  const randomColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setColor([...color, randomColor()])}
      >
        <Text style={styles.textStyle}>Generate Random Color</Text>
      </TouchableOpacity>
      <FlatList
        keyExtractor={(key) => key}
        data={color}
        renderItem={({ item }) => {
          return (
            <View style={styles.imageContainer}>
              <View
                style={{
                  backgroundColor: item,
                  width: "80%",
                  height: 100,
                  borderRadius: 5,
                  marginTop: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.textStyle}>{item}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 100,
  },
  buttonStyle: {
    backgroundColor: "black",
    position: "relative",
    overflow: "hidden",
    paddingVertical: 10,
    paddingHorizontal: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textStyle: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 20,
  },
  imageContainer: {
    marginVertical: 10,
    paddingHorizontal: 30,
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
});

export default ColorGenerator;
