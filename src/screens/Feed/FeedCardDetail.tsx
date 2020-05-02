import React, { useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";

import {
  ScrollView,
  TouchableWithoutFeedback
} from "react-native-gesture-handler";
import CustomButton from "../../components/CustomButton";
import Theme from "../../Theme/Theme";

const { width } = Dimensions.get("screen");

interface FeedCardDetailProps {
  userProfileImage: string;
  userName: string;
  postTime: number;
  nbLikes: number;
  nbComments: number;
  nbViews: number;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    resizeMode: "cover"
  },
  profileBar: {
    flexDirection: "row",
    // justifyContent: "",
    alignItems: "center",
    marginTop: "10%",
    marginLeft: "5%"
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600"
  },
  backBtn: {
    marginLeft: "5%"
  }
});

const FeedCardDetail: React.FC<FeedCardDetailProps> = ({
  userProfileImage,
  userName,
  nbComments,
  nbLikes,
  nbViews,
  postTime,
  navigation
}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          height: "100%",
          display: "flex",
          marginTop: "5%"
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Feed")}
          style={styles.backBtn}
        >
          <Ionicons name="md-arrow-round-back" size={40} color="black" />
        </TouchableOpacity>
        <ScrollView>
          <View style={styles.profileBar}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={styles.profileImage}
                source={{
                  uri:
                    "https://images.pexels.com/photos/4064921/pexels-photo-4064921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                }}
              />
              <View style={{ marginHorizontal: 10, justifyContent: "center" }}>
                <Text style={styles.profileName}>Mandy Portman</Text>
                <Text style={{ color: "#d0d6d0" }}>30 mins ago</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-end",
                marginRight: 5
              }}
            >
              {isFollowing ? (
                <CustomButton
                  backgroundColor="#fff"
                  borderColor="#ccc"
                  borderWidth={2}
                  onClick={() => setIsFollowing(!isFollowing)}
                  borderRadius={15}
                  height={30}
                  text="Following"
                  textColor="#ccc"
                />
              ) : (
                <CustomButton
                  backgroundColor="#fff"
                  borderColor={Theme.colors.accent}
                  borderWidth={2}
                  onClick={() => setIsFollowing(!isFollowing)}
                  borderRadius={15}
                  height={30}
                  text="Follow"
                  textColor={Theme.colors.accent}
                />
              )}
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3
              },
              shadowOpacity: 0.29,
              shadowRadius: 4.65,

              elevation: 7
            }}
          >
            <Image
              style={{
                height: width - 20,
                width: width - 20,
                borderRadius: 20
              }}
              source={{
                uri:
                  "https://images.pexels.com/photos/4064892/pexels-photo-4064892.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              }}
            />
          </View>
          <View
            style={{
              marginLeft: "5%",
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              onPress={() => setIsLiked(!isLiked)}
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <FontAwesome
                name={isLiked ? "heart" : "heart-o"}
                size={23}
                color={isLiked ? "#f54040" : "#d0d6d0"}
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 5, marginRight: 20 }}>{43}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 15
              }}
            >
              <Feather name="message-circle" color="#d0d6d0" size={23} />
              <Text style={{ marginLeft: 5 }}>{30}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="eyeo" color="#d0d6d0" size={25} />
              <Text style={{ marginLeft: 5 }}>{604}</Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: "5%",
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Text>
              mandypo it's been a very wonderful time on the west beach today.
              Best day ever. Thanks😘 @maryjane #summertime #beachlife
            </Text>
          </View>
          <TouchableWithoutFeedback
            style={{
              marginLeft: "5%",
              marginRight: "5%",
              height: 45,
              borderRadius: 7,
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#f2f2f2"
            }}
            onPress={() => navigation.navigate("FeedComments")}
          >
            <Text
              style={{
                color: "#e0e0e0",
                paddingLeft: 20
              }}
            >
              Comment
            </Text>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FeedCardDetail;
