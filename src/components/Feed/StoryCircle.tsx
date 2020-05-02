import React from "react";
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { Entypo } from "@expo/vector-icons";

interface StoryCircleProps {
  imageUrl: string;
  onPress: (event: GestureResponderEvent) => void;
  isLive: boolean;
  isOnline: boolean;
}

const styles = StyleSheet.create({
  container: {},
  imagePostWrapper: {
    height: 65,
    width: 65,
    borderRadius: 32,
    borderColor: "#f54040",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  imagePosts: {
    height: 60,
    width: 60,
    borderRadius: 30,
    resizeMode: "cover"
  }
});

const StoryCircle: React.FC<StoryCircleProps> = ({
  imageUrl,
  onPress,
  isLive,
  isOnline
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={[
          styles.imagePostWrapper,
          {
            backgroundColor: "#f0eded",
            borderColor: imageUrl ? "#f54040" : "transparent"
          }
        ]}
      >
        {imageUrl ? (
          <Image
            style={styles.imagePosts}
            source={{
              uri: imageUrl
            }}
          />
        ) : (
          <View>
            <Entypo name="plus" color="#e3dcdc" size={25} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default StoryCircle;
