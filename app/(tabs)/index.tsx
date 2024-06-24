import NextflixCard from "@/src/components/NextflixCard";
import ColorGenerator from "@/src/project/ColorGenerator";
import ContactForm from "@/src/project/ContactForm";
import Hooks from "@/src/project/Hooks";
import ButtonComponent from "@/src/screens/ButtonComponent";
import CounterNumber from "@/src/screens/CounterNumber";
import CustomComponent from "@/src/screens/CustomeComponent";
import FlatListComponent from "@/src/screens/FlatListComponent";
import ImageComponent from "@/src/screens/ImageComponent";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "@/src/components/HomePage";

const index = () => {
  const getFullName = (fname: string, mname: string, lname: string) => {
    return `My name is ${fname} ${mname} ${lname}`;
  };

  const myName = "React-Native";
  const textElem = <Text>Welcome to Jungle</Text>;
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Contact">
        <Stack.Screen name="Contact" component={ContactForm} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   {/* <Text style={styles.textStyle}>Hello {myName}</Text>
    //   <CustomComponent />
    //   {textElem}
    //   <Text>Hii, {getFullName("Ritesh", "Dnyaneshwar", "Mahajan")} </Text> */}
    //   {/* <FlatListComponent /> */}
    //   {/* <ImageComponent /> */}
    //   {/* <ButtonComponent /> */}
    //   {/* <NextflixCard /> */}
    //   {/* <CounterNumber /> */}
    //   {/* <ColorGenerator /> */}
    //   {/* <Hooks /> */}
    //   {/* <ContactForm /> */}
    // </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    marginTop: 100,
    marginLeft: 20,
  },
});

export default index;
