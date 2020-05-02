import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";

import { AuthStackParamList } from "../../navigation/ParamList/AuthStackParamList";
import Theme from "../../Theme/Theme";
import InputText from "../../components/InputText";
import CustomButton from "../../components/CustomButton";

type AuthLoginEmailScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "AuthLoginEmail"
>;

type AuthLoginEmailProps = {
  navigation: AuthLoginEmailScreenNavigationProp;
};

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
  inputSpacing: {
    marginBottom: 15
  }
});

const Login: React.FC<AuthLoginEmailProps> = ({ navigation }) => {
  const goToCreateScreen = () => navigation.navigate("AuthCreate");

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

        <Text style={styles.text}>Login</Text>

        <View
          style={{
            flexDirection: "column"
          }}
        >
          <View style={styles.inputSpacing}>
            <InputText
              isPassword={false}
              placeHolder="Your email"
              inputType="emailAddress"
              onChange={t => t}
            />
          </View>
          <View style={styles.inputSpacing}>
            <InputText
              isPassword
              placeHolder="Password"
              inputType="emailAddress"
              onChange={t => t}
            />
          </View>
          <TouchableOpacity
            style={{ alignItems: "flex-end", marginRight: "3%" }}
            onPress={() => navigation.navigate("AuthForgotPassword")}
          >
            <Text
              style={{ ...Theme.typography.subtext, color: Theme.colors.black }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: "7%" }}>
          <CustomButton
            backgroundColor={Theme.colors.accent}
            textColor={Theme.colors.white}
            borderColor={Theme.colors.accent}
            borderWidth={2}
            onClick={() => {}}
            borderRadius={25}
            height={50}
            text="Log in"
          />
        </View>

        <View
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginTop: 15
          }}
        >
          <Text style={{ ...Theme.typography.subtitle }}>
            Or sign up with social account
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "70%",
            alignItems: "center",
            marginLeft: "6%",
            marginTop: "7%"
          }}
        >
          <CustomButton
            backgroundColor={Theme.colors.white}
            textColor={Theme.colors.grey}
            borderColor={Theme.colors.grey}
            borderWidth={2}
            onClick={() => {}}
            icon={
              <FontAwesome
                size={20}
                color={Theme.colors.grey}
                name="facebook"
              />
            }
            borderRadius={25}
            height={50}
            text="Facebook"
          />

          <CustomButton
            backgroundColor={Theme.colors.white}
            textColor={Theme.colors.grey}
            borderColor={Theme.colors.grey}
            borderWidth={2}
            onClick={() => {}}
            icon={
              <FontAwesome size={20} color={Theme.colors.grey} name="twitter" />
            }
            borderRadius={25}
            height={50}
            text="Twitter"
          />
        </View>

        <TouchableOpacity
          onPress={goToCreateScreen}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
            width: "100%",
            flex: 1
          }}
        >
          <Text style={{ ...Theme.typography.subtext }}>
            Don't have an account?{" "}
          </Text>
          <Text style={{ ...Theme.typography.subtitle, fontWeight: "700" }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
