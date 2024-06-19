import React from "react";
import { StyleSheet, Text } from "react-native";

const CustomComponent = () => {
  return <Text style={styles.textStyle}>Hello New component</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: "blue",
    marginLeft: 20,
  },
});

export default CustomComponent;
