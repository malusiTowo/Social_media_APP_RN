import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {}

const styles = StyleSheet.create({});

const Header: React.FC<HeaderProps> = () => {
  return (
    <View>
      <Text>Header</Text>
    </View>
  );
};

export default Header;
