import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomePage = ({ route, navigation }: any) => {
  const { myName } = route.params;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Welcome {myName}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainHeader: {
    fontSize: 35,
    color: "black",
    textTransform: "capitalize",
  },
});

export default HomePage;
