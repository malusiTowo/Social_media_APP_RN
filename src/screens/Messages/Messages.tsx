import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

interface MessagesProps {}

const styles = StyleSheet.create({});

const Messages: React.FC<MessagesProps> = () => {
  return (
    <SafeAreaView>
      <Text>Messages</Text>
    </SafeAreaView>
  );
};

export default Messages;
