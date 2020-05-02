import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Theme from "../../Theme/Theme";

interface FeedCommentProps {
  imageUrl: string;
  userName: string;
  comment: string;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: Theme.colors.lightGrey,
    height: 80,
    alignItems: "center"
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    resizeMode: "cover"
  }
});

const FeedComment: React.FC<FeedCommentProps> = ({
  imageUrl,
  userName,
  comment
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ ...Theme.typography.subtitle }}>{userName}</Text>
        <Text>{comment}</Text>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <TouchableOpacity>
            <Text style={{ ...Theme.typography.subtext, fontSize: 12 }}>
              Like
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 10 }}>
            <Text style={{ ...Theme.typography.subtext, fontSize: 12 }}>
              Reply
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ ...Theme.typography.subtext, fontSize: 12 }}>
              Report
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Text>30m</Text>
      </View>
    </View>
  );
};

export default FeedComment;
