import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import InputText from "../../components/InputText";
import Theme from "../../Theme/Theme";
// import CreatePostCamera from "../../components/CreatePostCamera";
import CreatePostPreview from "../../components/CreatePostPreview";

interface CreatePostProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20
  },
  headerText: {
    ...Theme.typography.heading2,
    fontSize: 17,
    fontWeight: "700"
  },
  shareBtn: {
    ...Theme.typography.subtext,
    color: Theme.colors.accent,
    fontSize: 16
  }
});

const CreatePost: React.FC<CreatePostProps> = ({ navigation }) => {
  const [postComment, setPostComment] = useState("");
  const [images, setImages] = useState([
    "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-round-back" size={30} color="black" />
        </TouchableOpacity>

        <View>
          <Text style={styles.headerText}>Create Post</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.shareBtn}>Share</Text>
        </TouchableOpacity>
      </View>

      <InputText
        inputType="none"
        isPassword={false}
        placeHolder="Start writing..."
        onChange={setPostComment}
      />

      <View style={{ marginTop: 20, flex: 1, flexDirection: "row" }}>
        {images.map((image, idx) => (
          <View style={{ marginHorizontal: 10 }} key={idx}>
            <CreatePostPreview imagePreview={image} />
          </View>
        ))}
        <View style={{ marginHorizontal: 10 }}>
          <CreatePostPreview />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreatePost;
