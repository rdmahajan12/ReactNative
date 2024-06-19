import React from "react";
import { View } from "react-native";
import CardDetail from "../components/CardDetail";

const ImageComponent = () => {
  return (
    <View>
      <CardDetail
        textProps="Image 1"
        imageProps={require("../../assets/images/nature.webp")}
      />
      <CardDetail
        textProps="Image 2"
        imageProps={require("../../assets/images/nature.webp")}
      />
    </View>
  );
};

export default ImageComponent;
