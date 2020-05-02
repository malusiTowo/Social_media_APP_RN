import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";

import TabButton from "../components/Navigation/TabButton";
import Theme from "../Theme/Theme";
import { AppStackParamList } from "./ParamList/AppStackParamList";
import { TabsParamList } from "./ParamList/TabsParamsList";
import Feed from "./FeedCardStack";
import Messages from "../screens/Messages/Messages";
import Profile from "../screens/profile/Profile";
import FeedComments from "../screens/Feed/FeedComments";
import CreatePost from "../screens/Feed/CreatePost";
import CreatePostCamera from "../screens/Feed/CreatePostCamera";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<TabsParamList>();

const AppStack = createStackNavigator<AppStackParamList>();

const AppTabs: React.FC<AppTabsProps> = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let tab: JSX.Element = <></>;

          if (route.name === "Feed") {
            tab = (
              <TabButton
                backgroundColor={Theme.colors.grey}
                textColor={Theme.colors.accent}
                text="Feeds"
                badgeCount={3}
                focused={focused}
                icon={
                  <FontAwesome
                    name="bolt"
                    color={focused ? Theme.colors.accent : Theme.colors.grey}
                    size={20}
                  />
                }
              />
            );
          } else if (route.name === "Messages") {
            tab = (
              <TabButton
                backgroundColor={Theme.colors.grey}
                textColor={Theme.colors.accent}
                text="Messages"
                badgeCount={3}
                focused={focused}
                icon={
                  <Feather
                    name="message-circle"
                    color={focused ? Theme.colors.accent : Theme.colors.grey}
                    size={20}
                  />
                }
              />
            );
          } else if (route.name === "Profile") {
            tab = (
              <TabButton
                backgroundColor={Theme.colors.grey}
                textColor={Theme.colors.accent}
                text="Profile"
                badgeCount={3}
                focused={focused}
                icon={
                  <MaterialIcons
                    name="person-outline"
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
      <Tabs.Screen name="Feed" component={Feed} />
      <Tabs.Screen name="Messages" component={Messages} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};

const App = () => {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="FeedTabs" component={AppTabs} />
      <AppStack.Screen name="FeedComments" component={FeedComments} />
      <AppStack.Screen name="CreatePost" component={CreatePost} />
      <AppStack.Screen name="CreatePostCamera" component={CreatePostCamera} />
    </AppStack.Navigator>
  );
};

export default App;
