import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CardDetail = ({
  textProps,
  imageProps,
}: {
  textProps: string;
  imageProps: object;
}) => {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.textStyle}>{textProps}</Text>
      <Image style={styles.imageStyle} source={imageProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 20,
    margin: 30,
  },
  imageStyle: {
    width: 300,
    height: 200,
  },
});

export default CardDetail;
