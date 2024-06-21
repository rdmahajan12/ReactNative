import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const FlatListComponent = () => {
  const names = [
    {
      id: "1",
      name: "Artical 370",
      year: 2024,
      cast: "Yami Gautam",
      genre: "Drama, Thriller",
    },
    {
      id: "2",
      name: "Shaitaan",
      year: 2024,
      cast: "Ajay Devgan",
      genre: "Horror, Thriller",
    },
    {
      id: "3",
      name: "Crew",
      year: 2024,
      cast: "Kareena Kapoor",
      genre: "Comedy",
    },
    {
      id: "4",
      name: "Animal",
      year: 2024,
      cast: "Ranbir Kapoor",
      genre: "Action, Crime",
    },
    {
      id: "5",
      name: "OMG 2",
      year: 2023,
      cast: "Akshay Kumar",
      genre: "Drama, Comedy",
    },
  ];
  return (
    <View>
      <Text style={styles.header}>Netflix Series</Text>
      <FlatList
        keyExtractor={(key) => {
          return key.id;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.listStyle}
        data={names}
        renderItem={({ item }) => {
          return (
            <View style={styles.viewStyle}>
              <Text style={styles.textStyle}>Name: {item.name}</Text>
              <Text style={styles.textStyle}>Year: {item.year}</Text>
              <Text style={styles.textStyle}>CastName: {item.cast}</Text>
              <Text style={styles.textStyle}>Genre: {item.genre}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: 30,
    backgroundColor: "black",
  },
  listStyle: {
    textAlign: "center",
    padding: 5,
    margin: 20,
  },
  viewStyle: {
    margin: 20,
    padding: 5,
  },
  header: {
    margin: 30,
    fontSize: 40,
    textAlign: "center",
  },
});

export default FlatListComponent;
