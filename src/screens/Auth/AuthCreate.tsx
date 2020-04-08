import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { AuthStackParamList } from "../../navigation/ParamList/AuthStackParamList";

type AuthCreateScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "AuthCreate"
>;

type AuthCreateProps = {
  navigation: AuthCreateScreenNavigationProp;
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
  },
  forgotPwd: {
    color: "black",
    width: "100%",
    textAlign: "center",
    fontWeight: "700",
    height: 30
  }
});

const AuthCreate: React.FC<AuthCreateProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [message, setMessage] = useState('');
  // const [isVisible, setIsVisible] = useState(false);

  const goToLogin = () => navigation.navigate("AuthLoginEmail");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.emailWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AuthLanding")}
          style={styles.backBtn}
        >
          <Ionicons name="md-arrow-round-back" size={40} color="black" />
        </TouchableOpacity>

        <Text style={styles.text}>Welcome to the IFTTT family!</Text>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Your email"
            textContentType="emailAddress"
            style={styles.input}
            onChangeText={txt => setEmail(txt.trim())}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Your password"
            style={styles.input}
            textContentType="newPassword"
            secureTextEntry
            onChangeText={txt => setPassword(txt.trim())}
          />
        </View>

        <View style={[styles.inputWrapper, { marginTop: "10%" }]}>
          <Button
            style={styles.nextBtn}
            disabled={!(email.trim().length > 0 && password.trim().length > 0)}
          >
            <Text style={styles.nextBtnText}>Sign up!</Text>
          </Button>
        </View>
        <TouchableOpacity onPress={goToLogin} style={styles.loginBtnWrapper}>
          <Text style={styles.loginText}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AuthCreate;
