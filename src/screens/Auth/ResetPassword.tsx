import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Theme from "../../Theme/Theme";
import InputText from "../../components/InputText";
import CustomButton from "../../components/CustomButton";

interface ResetPasswordProps {}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  wrapper: {
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
  }
});

const ResetPassword: React.FC<ResetPasswordProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Ionicons
            name="md-arrow-round-back"
            size={40}
            color={Theme.colors.grey}
          />
        </TouchableOpacity>

        <Text style={styles.text}>Change Password</Text>

        <View>
          <InputText
            inputType="password"
            isPassword
            placeHolder="Old password"
            onChange={t => t}
          />
          <InputText
            inputType="newPassword"
            isPassword
            placeHolder="New password"
            onChange={t => t}
          />
          <InputText
            inputType="newPassword"
            isPassword
            placeHolder="Confirm password"
            onChange={t => t}
          />
          <View style={{ marginTop: "7%" }}>
            <CustomButton
              backgroundColor={Theme.colors.accent}
              borderColor={Theme.colors.accent}
              textColor={Theme.colors.white}
              borderWidth={2}
              onClick={() => {}}
              borderRadius={25}
              height={50}
              text="Reset Password"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
