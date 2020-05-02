import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Theme from "../../Theme/Theme";

const { width } = Dimensions.get("screen");

interface FeedCardProps {
  userName: string;
  nbLikes: number;
  nbComments: number;
  postTime: number;
  userProfileImage: string;
  postImage: string;
}

const styles = StyleSheet.create({
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    resizeMode: "cover"
  },
  profileBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600"
  }
});

const FeedCard: React.FC<FeedCardProps> = ({
  userName,
  nbLikes,
  nbComments,
  postImage,
  postTime,
  userProfileImage
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.profileBar}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={styles.profileImage}
            source={{ uri: userProfileImage }}
          />
          <View style={{ marginHorizontal: 10 }}>
            <Text style={styles.profileName}>{userName}</Text>
            <Text style={{ color: "#d0d6d0" }}>30 mins ago</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => setIsLiked(!isLiked)}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <FontAwesome
              name={isLiked ? "heart" : "heart-o"}
              size={23}
              color={isLiked ? "#f54040" : "#d0d6d0"}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 5, marginRight: 20 }}>{nbLikes}</Text>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Feather name="message-circle" color="#d0d6d0" size={23} />
          </TouchableOpacity>
          <Text style={{ marginLeft: 5, marginRight: 5 }}>{nbComments}</Text>
        </View>
      </View>

      <TouchableWithoutFeedback
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
        onPress={() => navigation.navigate("FeedCardDetails")}
      >
        <Image
          style={{ height: width - 20, width: width - 20, borderRadius: 20 }}
          source={{ uri: postImage }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FeedCard;
