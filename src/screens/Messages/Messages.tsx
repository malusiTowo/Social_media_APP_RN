import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Theme from "../../Theme/Theme";
import MessageView from "../../components/Messages/MessageView";
import ThreeDotsMenu from "../../components/ThreeDotsMenu";

interface MessagesProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

const Messages: React.FC<MessagesProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
      >
        <View style={{ flex: 0.7, alignItems: "flex-end" }}>
          <Text
            style={{
              ...Theme.typography.heading2,
              fontWeight: "700",
              fontSize: 20
            }}
          >
            Messages
          </Text>
        </View>

        <View style={{ flex: 0.4, alignItems: "flex-end", marginRight: 20 }}>
          <ThreeDotsMenu onPress={() => navigation.navigate("FindFriends")} />
        </View>
      </View>

      <ScrollView>
        {[1, 2, 3].map(val => (
          <View key={val} style={{ marginVertical: 10 }}>
            <MessageView />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Messages;
