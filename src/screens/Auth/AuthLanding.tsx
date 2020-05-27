import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { Button, Spinner, Text } from "native-base";
import * as Font from "expo-font";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: "cover",
    marginTop: 30,
    marginLeft: 25
  },
  loginBox: {
    display: "flex",
    justifyContent: "flex-end",
    flex: 1,
    marginBottom: 25
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15
  },
  btn: {
    borderRadius: 28,
    marginRight: 15,
    width: 150,
    height: 60
  },
  btnText: {
    color: "white",
    fontWeight: "800",
    fontSize: 20,
    textAlign: "center",
    width: "100%"
  },
  centerTextWrapper: {
    display: "flex",
    alignItems: "center"
  },
  centerText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold"
  },
  videoWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    flex: 1,
    height: "100%",
    width: "100%"
  },
  videoBox: {
    flex: 1,
    width: 350,
    height: 350
  }
});

const CUSTOM_FONTS = {
  Roboto: require("../../../node_modules/native-base/Fonts/Roboto.ttf"),
  RobotoMedium: require("../../../node_modules/native-base/Fonts/Roboto_medium.ttf")
};

const AuthLanding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      {/* <Image
        style={styles.logo}
        source={require("../../assets/ifttt_logo.png")}
      /> */}

      <View style={styles.loginBox}>
        {/* <View style={styles.centerTextWrapper}>
          <Text style={styles.centerText}>Sign in with</Text>
        </View>

        <View style={styles.buttonWrapper}>
          <Button style={[styles.btn, { backgroundColor: "#DB4437" }]}>
            <Text style={styles.btnText}>Google</Text>
          </Button>
          <Button style={[styles.btn, { backgroundColor: "#3b5998" }]}>
            <Text style={styles.btnText}>Facebook</Text>
          </Button>
        </View> */}

        <TouchableOpacity
          onPress={() => navigation.navigate("AuthCreate")}
          style={[styles.centerTextWrapper, { height: 20 }]}
        >
          <Text style={styles.centerText}>or Use Email</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AuthLanding;
