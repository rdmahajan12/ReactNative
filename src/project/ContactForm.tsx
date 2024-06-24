import Checkbox from "expo-checkbox";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const ContactForm = ({ navigation }: any) => {
  const [agree, setAgree] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fontLoading, error] = useFonts({
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
  });

  const submit = () => {
    if (username === "ritesh" && password === "mahajan") {
      Alert.alert(`Thank You ${username}`);
      navigation.navigate("Home", { myName: `${username}` });
    } else {
      Alert.alert("Incorrect Credential");
    }
  };

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  useEffect(() => {
    if (fontLoading) {
      SplashScreen.hideAsync();
    }
  }, [fontLoading]);

  if (!fontLoading) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login Form</Text>
      <Text style={styles.description}>
        You can reach anytime via rdm9284@gmail.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.inputStyle}
          value={username}
          onChangeText={(e) => setUsername(e)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your password</Text>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.inputStyle}
          secureTextEntry={true}
          value={password}
          onChangeText={(e) => setPassword(e)}
        />
      </View>

      <View style={styles.wrapper}>
        <Checkbox
          style={styles.inputStyle}
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "blue" : undefined}
        />
        <Text style={styles.wrapperText}>We agree with your TC</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { backgroundColor: agree ? "blue" : "grey" },
        ]}
        disabled={!agree}
        onPress={() => submit()}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  mainHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  labels: {
    fontSize: 18,
    color: "#333",
    marginBottom: 5,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  checkboxStyle: {
    marginRight: 10,
  },
  wrapperText: {
    fontSize: 16,
    color: "#333",
  },
  buttonStyle: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ContactForm;
