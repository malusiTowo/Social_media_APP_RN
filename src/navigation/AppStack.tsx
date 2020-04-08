import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  EvilIcons,
  Ionicons,
  MaterialIcons
} from "@expo/vector-icons";
import { Text, View } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import Home from "../screens/Home";
import IconBadge from "../components/IconBadge";
import { AppStackParamList } from "./ParamList/AppStackParamList";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppStackParamList>();

const AppTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
    </Tabs.Navigator>
  );
};

// const AppTabs: React.FC<AppTabsProps> = () => {
//   return (
//     <Tabs.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           if (route.name === "Home") {
//             const icon = focused ? (
//               <TouchableOpacity
//                 style={{
//                   backgroundColor: "black",
//                   borderRadius: 20,
//                   height: 40,
//                   width: 40,
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//                               <AntDesign
//                                   name="home"
//                                   size={size}
//                                   color="#fff"
//                                 />
//               </TouchableOpacity>
//             ) : (
//                           <AntDesign
//                                   name="home"
//                                   size={size}
//                                   color={color}
//                                 />
//             );
//             return icon;
//           }
//           if (route.name === "Search") {
//             return <EvilIcons name="search" size={size} color={color} />;
//           }
//           if (route.name === "Notifications") {
//             return (
//               <Ionicons
//                 name="ios-notifications-outline"
//                               size={size}
//                 color={color}
//               />
//             );
//           }
//           if (route.name === "Chat") {
//             return (
//               <IconBadge
//                 name="ios-chatbubbles"
//                 size={size}
//                 color={color}
//                 badgeCount={3}
//               />
//             );
//             // return <Ionicons name={"ios-chatbubbles"} size={size} color={color} />;
//           }
//           if (route.name === "Profile") {
//             return (
//             <MaterialIcons
//                               name="person-outline"
//                               size={size}
//                               color={color}
//                             />
//             );
//           }
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: "tomato",
//         inactiveTintColor: "#ccc",
//         // inactiveBackgroundColor: "#000",
//         showLabel: false,
//       }}
//     >
//       <Tabs.Screen name="Home" component={Home} />
//     </Tabs.Navigator>
//   );
// };

export default AppTabs;
