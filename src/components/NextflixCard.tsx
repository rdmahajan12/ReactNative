import React from "react";
import { View, Image, Text, StyleSheet, Button, Linking } from "react-native";
import {
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic,
} from "@expo-google-fonts/josefin-sans";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const NextflixCard = () => {
  const [fontLoad] = useFonts({
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
  });

  if (!fontLoad) {
    return <AppLoading />;
  }

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
    fontFamily: "JosefinSans_500Medium",
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
    fontFamily: "JosefinSans_400Regular",
  },
  poster_text: {
    color: "blue",
    paddingHorizontal: 20,
    marginBottom: 10,
    fontFamily: "JosefinSans_300Light",
  },
});

export default NextflixCard;
