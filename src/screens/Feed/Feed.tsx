import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { StackNavigationProp } from "@react-navigation/stack";
import { TabsParamList } from "../../navigation/ParamList/TabsParamsList";
import Theme from "../../Theme/Theme";
import StoryCircle from "../../components/Feed/StoryCircle";
import FeedCard from "../../components/Feed/FeedCard";

type FeedScreenNavigationProps = StackNavigationProp<TabsParamList, "Feed">;

interface HomeProps {
  navigation: FeedScreenNavigationProps;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  headerText: {
    ...Theme.typography.heading2
  }
});

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.headerWrapper}>
        <View
          style={{
            flex: 1,
            flexDirection: "row"
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start"
          }}
        >
          <Text style={styles.headerText}>Feeds</Text>
        </View>
        <View
          style={{
            flex: 0.3,
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: 15
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("CreatePost")}>
            <Feather name="camera" size={27} color="#d0d6d0" />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginTop: 20
        }}
      >
        <View style={{ marginVertical: 20 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <ScrollView
                style={{ height: 67 }}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <View
                    style={{ marginLeft: i === 1 ? 10 : 0, marginRight: 10 }}
                    key={i}
                  >
                    <StoryCircle
                      imageUrl={
                        i > 1
                          ? "https://images.pexels.com/photos/3025109/pexels-photo-3025109.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                          : ""
                      }
                      isLive={false}
                      isOnline
                      onPress={
                        i === 1
                          ? () => navigation.navigate("CreatePostCamera")
                          : () => navigation.navigate("StoryDetails")
                      }
                    />
                  </View>
                ))}
              </ScrollView>
            </View>
            {[1, 2, 3, 4].map(i => (
              <View
                key={i}
                style={{
                  marginVertical: 10,
                  marginHorizontal: 10
                }}
              >
                <FeedCard
                  nbComments={30}
                  nbLikes={42}
                  userProfileImage="https://images.pexels.com/photos/4064921/pexels-photo-4064921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  postImage="https://images.pexels.com/photos/4064892/pexels-photo-4064892.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  postTime={30}
                  userName="Mandy Portman"
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
