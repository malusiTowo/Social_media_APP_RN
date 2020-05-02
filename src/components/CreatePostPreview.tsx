import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface CreatePostPreviewProps {
  imagePreview: string | undefined;
  removeImage: () => void;
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: "#f0eded",
    alignItems: "center",
    justifyContent: "center"
  },
  imagePreview: {
    height: 100,
    width: 100,
    borderRadius: 10,
    alignItems: "flex-end"
  }
});

const CreatePostPreview: React.FC<CreatePostPreviewProps> = ({
  imagePreview,
  removeImage
}) => {
  const navigation = useNavigation();

  return (
    <>
      {imagePreview ? (
        <View style={{ flex: 1 }}>
          <ImageBackground
            style={styles.imagePreview}
            source={{ uri: imagePreview }}
          >
            <TouchableOpacity onPress={removeImage}>
              <Entypo name="cross" size={25} color="#fff" />
            </TouchableOpacity>
          </ImageBackground>
        </View>
      ) : (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("CreatePostCamera")}
          style={styles.container}
        >
          <Entypo name="plus" color="#e3dcdc" size={25} />
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

export default CreatePostPreview;
