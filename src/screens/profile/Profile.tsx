import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialIcons
} from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Theme from "../../Theme/Theme";
import TabButton from "../../components/Navigation/TabButton";

const Tab = createMaterialTopTabNavigator();

const VideoTab: React.FC = () => {
  return (
    <View>
      <Text>Videos</Text>
    </View>
  );
};

const PhotosTab: React.FC = () => {
  return (
    <View>
      <Text>Photos</Text>
    </View>
  );
};

const LikedPostsTab: React.FC = () => {
  return (
    <View>
      <Text>LikedPosts</Text>
    </View>
  );
};

interface ProfileTabButtonProps {
  focused: boolean;
  icon: JSX.Element;
}
const ProfileTabButton: React.FC<ProfileTabButtonProps> = ({
  focused,
  icon
}) => {
  console.log("ofksdqfd", focused);
  return (
    <View style={{ width: 120, justifyContent: "center" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: focused ? "#f0f2f0" : "transparent",
          height: 36,
          borderRadius: 18,
          width: "100%"
        }}
      >
        <View style={{ paddingRight: 7 }}>{icon}</View>

        {focused && <Text style={{ fontWeight: "500" }}>hello</Text>}
      </View>
    </View>
  );
};

function ProfileTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let tab: JSX.Element = <></>;

          if (route.name === "Feed") {
            tab = (
              <ProfileTabButton
                focused={focused}
                icon={
                  <Feather
                    name="video"
                    color={focused ? Theme.colors.accent : Theme.colors.grey}
                    size={20}
                  />
                }
              />
            );
          } else if (route.name === "Messages") {
            tab = (
              <ProfileTabButton
                focused={focused}
                icon={
                  <FontAwesome
                    name="photo"
                    color={focused ? Theme.colors.accent : Theme.colors.grey}
                    size={20}
                  />
                }
              />
            );
          } else if (route.name === "Profile") {
            tab = (
              <ProfileTabButton
                focused={focused}
                icon={
                  <AntDesign
                    name="hearto"
                    color={focused ? Theme.colors.accent : Theme.colors.grey}
                    size={20}
                  />
                }
              />
            );
          }
          return tab;
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        showLabel: false
      }}
    >
      <Tab.Screen name="Video" component={VideoTab} />
      <Tab.Screen name="Photos" component={PhotosTab} />
      <Tab.Screen name="LikedPosts" component={LikedPostsTab} />
    </Tab.Navigator>
  );
}

interface ProfileProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  profileImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
    resizeMode: "cover"
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

      <View style={{ marginTop: 20 }} />
      <ProfileTabs />
    </SafeAreaView>
  );
};

export default Profile;
