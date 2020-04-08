import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Button, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import Theme from "../../Theme/Theme";

interface Props {
  name: string;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  emailWrapper: {
    height: "100%",
    display: "flex",
    marginTop: "10%"
  },
  inputWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  text: {
    color: "black",
    fontSize: 30,
    width: "100%",
    textAlign: "center",
    fontWeight: "800",
    marginTop: "5%",
    marginBottom: "10%"
  },
  input: {
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 3,
    width: "90%",
    marginTop: 25,
    height: 60,
    fontSize: 18,
    paddingLeft: 10,
    color: "black"
  },
  backBtn: {
    marginLeft: "10%"
  },
  nextBtn: {
    backgroundColor: "black",
    width: "90%",
    borderRadius: 10,
    height: 50
  },
  nextBtnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center"
  },
  loginBtnWrapper: {
    alignItems: "center",
    marginTop: 20
  },
  loginText: {
    color: "black",
    fontSize: 20,
    fontWeight: "800"
  }
});
const Login = ({ navigation }) => {
  const goToCreateScreen = () => navigation.navigate("AuthCreate");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.emailWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AuthLanding")}
          style={styles.backBtn}
        >
          <Ionicons name="md-arrow-round-back" size={40} color="black" />
        </TouchableOpacity>

        <Text style={styles.text}>Welcome back! Enter your credentials</Text>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Your email"
            style={styles.input}
            textContentType="emailAddress"
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Your password"
            style={styles.input}
            secureTextEntry
            textContentType="password"
          />
        </View>

        <View style={[styles.inputWrapper, { marginTop: "10%" }]}>
          <Button
            // onPress={login}
            style={styles.nextBtn}
          >
            <Text style={styles.nextBtnText}>Continue</Text>
          </Button>
        </View>
        <TouchableOpacity
          onPress={goToCreateScreen}
          style={styles.loginBtnWrapper}
        >
          <Text style={styles.loginText}>
            Don't have an account yet! Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
