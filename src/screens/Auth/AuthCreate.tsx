import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text } from "native-base";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { inject } from "mobx-react";

import Root from "../../mobx/Root";
import { AuthStackParamList } from "../../navigation/ParamList/AuthStackParamList";
import Theme from "../../Theme/Theme";
import InputText from "../../components/InputText";
import CustomButton from "../../components/CustomButton";

type AuthCreateScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "AuthCreate"
>;

type AuthCreateProps = {
  navigation: AuthCreateScreenNavigationProp;
  root: typeof Root;
};

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
    fontSize: 28,
    fontWeight: "800",
    color: Theme.colors.black,
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

const AuthCreate: React.FC<AuthCreateProps> = ({ navigation, root }) => {
  const goToLogin = () => navigation.navigate("AuthLoginEmail");

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

        <Text style={styles.text}>Sign up</Text>

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
              onChange={() => true}
            />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 15
            }}
          >
            <InputText
              isPassword={false}
              placeHolder="First Name"
              inputType="name"
              onChange={() => true}
            />
            <InputText
              isPassword={false}
              placeHolder="Last Name"
              inputType="familyName"
              onChange={() => true}
            />
          </View>

          <View style={styles.inputSpacing}>
            <InputText
              isPassword={false}
              placeHolder="Phone"
              inputType="telephoneNumber"
              onChange={() => true}
            />
          </View>

          <InputText
            isPassword
            inputType="newPassword"
            placeHolder="Password"
            onChange={() => true}
          />
        </View>

        <View
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginTop: 14
          }}
        >
          <Text style={{ ...Theme.typography.subtext }}>
            By signing up you agree to our Terms of Use {"\n\t\t\t"} and Privacy
            Policy
          </Text>
        </View>

        <View style={{ marginTop: "7%" }}>
          <CustomButton
            backgroundColor={Theme.colors.accent}
            textColor={Theme.colors.white}
            borderColor={Theme.colors.accent}
            borderWidth={2}
            onClick={() => {
              navigation.navigate("VerifyEmail");
            }}
            borderRadius={25}
            height={50}
            text="Sign Up"
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
            onClick={() => root.user.setUser("Malusi")}
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
            onClick={() => root.user.setUser("Malusi")}
            icon={
              <FontAwesome size={20} color={Theme.colors.grey} name="twitter" />
            }
            borderRadius={25}
            height={50}
            text="Twitter"
          />
        </View>

        <TouchableOpacity
          onPress={goToLogin}
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
            Already have an account?{" "}
          </Text>
          <Text style={{ ...Theme.typography.subtitle, fontWeight: "700" }}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default inject("root")(AuthCreate);
