import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text } from "native-base";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import Theme from "../../Theme/Theme";
import InputText from "../../components/InputText";
import CustomButton from "../../components/CustomButton";

interface AuthForgotPasswordProps {}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  emailWrapper: {
    height: "100%",
    display: "flex",
    marginTop: "5%"
  },
  text: {
    ...Theme.typography.heading2,
    width: "100%",
    textAlign: "left",
    marginTop: "5%",
    marginLeft: "5%",
    marginBottom: "5%"
  },
  backBtn: {
    marginLeft: "5%"
  },
  subText: {
    ...Theme.typography.subtext,
    width: "100%"
  },
  inputSpacing: {
    marginBottom: 15
  }
});

const AuthForgotPassword: React.FC<AuthForgotPasswordProps> = ({
  navigation
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.emailWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AuthLanding")}
          style={styles.backBtn}
        >
          <Ionicons
            name="md-arrow-round-back"
            size={40}
            color={Theme.colors.grey}
          />
        </TouchableOpacity>

        <Text style={styles.text}>Forgot Password?</Text>

        <View
          style={{
            // width: "90%",
            alignItems: "center",
            marginLeft: "5%"
          }}
        >
          <Text style={styles.subText}>
            Please enter your email to receive the instructions to reset your
            password
          </Text>
        </View>

        <View style={styles.inputSpacing}>
          <InputText
            isPassword={false}
            placeHolder="Your email"
            inputType="emailAddress"
            onChange={t => t}
          />
        </View>

        <View style={{ marginTop: "7%" }}>
          <CustomButton
            backgroundColor={Theme.colors.accent}
            textColor={Theme.colors.white}
            borderColor={Theme.colors.accent}
            borderWidth={2}
            onClick={() => {
              navigation.navigate("ResetPassword");
            }}
            borderRadius={25}
            height={50}
            text="Send it now"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthForgotPassword;
