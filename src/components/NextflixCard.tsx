import React from "react";
import { View, Image, Text, StyleSheet, Button, Linking } from "react-native";

const NextflixCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Netflix Card</Text>
      <View style={styles.poster}>
        <Image
          source={require("../../assets/images/Stranger_Things_season_3.png")}
          style={styles.imageStyle}
        />
        <View style={styles.poster_info}>
          <Text style={styles.poster_title}>Stranger Things</Text>
          <Text style={styles.poster_text}>
            The third season of the American science fiction horror television
            series Stranger Things, marketed as Stranger Things 3, was released
            worldwide on the streaming service Netflix on July 4, 2019.
          </Text>
        </View>
        <Button
          title="Watch Now"
          onPress={() =>
            Linking.openURL("https://www.netflix.com/in/title/80057281")
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
  },
  poster: {
    width: 250,
    borderWidth: 1,
    alignItems: "center",
  },
  poster_info: {
    alignItems: "center",
    marginVertical: 10,
  },
  poster_title: {
    fontSize: 20,
    marginBottom: 10,
  },
  poster_text: {
    color: "blue",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});

export default NextflixCard;
