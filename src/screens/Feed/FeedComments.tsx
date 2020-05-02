/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

import { ScrollView } from "react-native-gesture-handler";
import Theme from "../../Theme/Theme";
import FeedComment from "../../components/Feed/FeedComment";

interface FeedCommentsProps {}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.blue,
    flex: 1
  },
  backBtn: {
    // marginLeft: "5%"
  }
});

const FeedComments: React.FC<FeedCommentsProps> = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} enabled behavior="height">
      <View style={styles.container}>
        <View
          style={{
            display: "flex",
            paddingTop: "20%",
            paddingHorizontal: "5%",
            backgroundColor: "#fff",
            height: "85%",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backBtn}
            >
              <Ionicons name="md-arrow-round-back" size={40} color="black" />
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                paddingRight: 25
              }}
            >
              <Text
                style={{
                  ...Theme.typography.heading2,
                  fontSize: 23
                }}
              >
                Comments
              </Text>
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                marginTop: 15,
                borderBottomWidth: 2,
                borderBottomColor: Theme.colors.lightGrey
              }}
            >
              <Text style={{ paddingBottom: 5 }}>
                mandypo it's been a very wonderful time on the west beach today.
                Best day ever. Thanks😘 @maryjane #summertime #beachlife
              </Text>
            </View>
            <FeedComment
              comment="let's do it again next week 😎"
              userName="maryjane"
              imageUrl="https://images.pexels.com/photos/4064921/pexels-photo-4064921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            />
            <FeedComment
              comment="nice photo. love it!"
              userName="jackyton"
              imageUrl="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            />
            <FeedComment
              comment="sure yeah 🚀"
              userName="maryjane"
              imageUrl="https://images.pexels.com/photos/4064921/pexels-photo-4064921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            />
          </ScrollView>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 15
          }}
        >
          <View
            style={{
              backgroundColor: "#b7beed",
              flex: 1,
              marginLeft: "5%",
              marginRight: 10,
              justifyContent: "center",
              height: 55,
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
          <TouchableOpacity
            style={{
              backgroundColor: Theme.colors.accent,
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10
            }}
          >
            <Feather name="send" color="white" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default FeedComments;
