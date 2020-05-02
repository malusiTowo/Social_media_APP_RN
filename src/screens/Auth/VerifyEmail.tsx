import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Theme from "../../Theme/Theme";
import InputText from "../../components/InputText";
import CustomButton from "../../components/CustomButton";
import VerifyInput from "../../components/VerifyInput";

interface VerifyEmailProps {}

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

const VerifyEmail: React.FC<VerifyEmailProps> = ({ navigation }) => {
  const [digitOne, setDigitOne] = useState(0);
  const [digitTwo, setDigitTwo] = useState(0);
  const [digitThree, setDigitThree] = useState(0);
  const [digitFour, setDigitFour] = useState(0);

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

        <Text style={styles.text}>Verification</Text>

        <Text
          style={[
            styles.text,
            { color: "#ccc", fontSize: 14, marginBottom: 5, marginTop: 5 }
          ]}
        >
          We've sent a verification email to
        </Text>

        <Text
          style={[styles.text, { fontSize: 14, marginBottom: 5, marginTop: 0 }]}
        >
          malusitowo@gmail.com
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: "15%",
            justifyContent: "center"
          }}
        >
          {[1, 2, 3, 4].map(val => (
            <View key={val} style={{ marginHorizontal: 3 }}>
              <VerifyInput />
            </View>
          ))}
        </View>

        <View style={{ marginTop: "20%", justifyContent: "center" }}>
          <CustomButton
            backgroundColor={Theme.colors.accent}
            borderColor={Theme.colors.accent}
            textColor={Theme.colors.white}
            borderWidth={2}
            onClick={() => {
              // TODO - set user in mobx
              // navigation.navigate("FeedTabs");
            }}
            borderRadius={25}
            height={50}
            text="Verify"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyEmail;
