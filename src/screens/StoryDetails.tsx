import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import Theme from "../Theme/Theme";

const { width, height } = Dimensions.get("screen");

interface StoryDetailsProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const StoryDetails: React.FC<StoryDetailsProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="cover"
        source={{
          uri:
            "https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: "20%",
            marginHorizontal: 10,
            justifyContent: "space-between",
            alignItems: "flex-start"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexShrink: 1,
              alignItems: "center"
            }}
          >
            <Image
              style={{ width: 50, height: 50, borderRadius: 25 }}
              source={{
                uri:
                  "https://images.pexels.com/photos/1278566/pexels-photo-1278566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              }}
            />
            <Text
              style={{
                marginLeft: 15,
                color: "#fff",
                fontSize: 14,
                fontWeight: "bold"
              }}
            >
              Mark Powell
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="cross" color="#fff" size={30} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            position: "absolute",
            bottom: 30,
            left: 20
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-around",
              marginTop: 15
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(242, 241, 241, 0.5)",
                marginRight: 10,
                justifyContent: "center",
                height: 55,
                width: width - 100,
                borderRadius: 27,
                paddingLeft: 20
              }}
            >
              <TextInput
                style={{ flex: 1 }}
                placeholderTextColor="#fff"
                placeholder="Write a comment"
              />
            </View>

            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: Theme.colors.accent,
                  width: 55,
                  height: 55,
                  borderRadius: 27,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 10
                }}
              >
                <Entypo name="heart" color="#fff" size={25} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: Theme.colors.white,
                  width: 55,
                  height: 55,
                  borderRadius: 27,
                  alignItems: "center",
                  justifyContent: "center"
                  // marginRight: 10,
                }}
              >
                <Feather name="send" color="#000" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StoryDetails;
