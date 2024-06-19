import React from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";

const ButtonComponent = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Button Property</Text>
      <Button
        title="Join with us"
        onPress={() => {
          Alert.alert("Simple Clicked");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginVertical: 200,
    textAlign: "center",
  },
});

export default ButtonComponent;
