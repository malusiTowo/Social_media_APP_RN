import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

import Theme from "../../Theme/Theme";

interface ProfileProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  profileImage: {
    height: 90,
    width: 90,
    borderRadius: 42,
    resizeMode: "cover"
  },
  activeTabHeader: {
    color: Theme.colors.accent,
    backgroundColor: "#fff",
    borderWidth: 0
  }
});

const Profile: React.FC<ProfileProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ ...Theme.typography.heading3, fontWeight: "600" }}>
            My Profile
          </Text>
        </View>
        <View style={{ marginRight: 15 }}>
          <Feather name="settings" color="black" size={20} />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 20
        }}
      >
        <View style={{ marginLeft: 5 }}>
          <Image
            style={styles.profileImage}
            source={{
              uri:
                "https://images.pexels.com/photos/4064921/pexels-photo-4064921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }}
          />
        </View>

        <View style={{ flex: 1 }}>
          <View style={{ marginLeft: 25 }}>
            <Text style={{ ...Theme.typography.heading3, fontWeight: "600" }}>
              Mandy Portman
            </Text>
            <Text style={{ ...Theme.typography.subtext }}>@mandyportman</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10
            }}
          >
            <View>
              <Text style={{ fontWeight: "700" }}>120</Text>
              <Text style={{ ...Theme.typography.subtext }}>Friends</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "700" }}>12k</Text>
              <Text style={{ ...Theme.typography.subtext }}>Followers</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "700" }}>280</Text>
              <Text style={{ ...Theme.typography.subtext }}>Following</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
