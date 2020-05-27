import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Theme from "../../Theme/Theme";

interface MessageViewProps {}

// const styles = StyleSheet.create({});

const MessageView: React.FC<MessageViewProps> = () => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        marginLeft: 10
      }}
    >
      <Image
        style={{
          width: 57,
          height: 57,
          borderRadius: 27
        }}
        source={{
          uri:
            "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }}
      />
      <View
        style={{
          marginHorizontal: 10,
          flex: 1,
          borderBottomColor: Theme.colors.lightGrey,
          borderBottomWidth: 2
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "orange" }}>
            Mandy Portman
          </Text>
          <Text style={{ color: "grey" }}>23 mins</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 15,
            marginTop: 5
          }}
        >
          <Text style={{ fontWeight: "600" }}>
            Sure... I will send it tonight!
          </Text>
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 10,
              backgroundColor: Theme.colors.accent,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ color: "#fff" }}>3</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MessageView;
