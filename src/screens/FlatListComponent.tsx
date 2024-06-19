import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";

const FlatListComponent = () => {
  const names = [
    {
      id: "1",
      name: "Ritesh",
    },
    {
      id: "2",
      name: "Pritesh",
    },
    {
      id: "3",
      name: "Hitesh",
    },
    {
      id: "4",
      name: "Jitesh",
    },
    {
      id: "5",
      name: "Sumesh",
    },
    {
      id: "6",
      name: "Kamesh",
    },
  ];
  return (
    <FlatList
      keyExtractor={(key) => {
        return key.id;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.listStyle}
      data={names}
      renderItem={(elem) => {
        return <Text style={styles.textStyle}>{elem.item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 30,
    backgroundColor: "blue",
    margin: 20,
    color: "white",
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
});

export default FlatListComponent;
