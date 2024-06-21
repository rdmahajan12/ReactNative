import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CounterNumber = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text style={styles.textStyle}>{count}</Text>
      <View>
        <TouchableOpacity onPress={() => setCount(count + 10)}>
          <Text style={styles.countStyle}>+ 10</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCount(0)}>
          <Text style={styles.countStyle}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCount(count - 10)}>
          <Text style={styles.countStyle}>- 10</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    margin: 30,
    textAlign: "center",
    color: "black",
    fontSize: 50,
  },
  countStyle: {
    margin: 30,
    textAlign: "center",
    color: "white",
    fontSize: 30,
    backgroundColor: "black",
  },
});

export default CounterNumber;
