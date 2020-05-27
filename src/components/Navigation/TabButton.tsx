import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface TabButtonProps {
  icon: JSX.Element;
  badgeCount: number;
  focused: boolean;
  textColor: string;
  text: string;
  backgroundColor: string;
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    justifyContent: "center"
  }
});

const TabButton: React.FC<TabButtonProps> = ({
  icon,
  focused,
  textColor,
  text
}) => {
  return (
    <View style={styles.container}>
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

        {focused && (
          <Text style={{ color: textColor, fontWeight: "500" }}>{text}</Text>
        )}
      </View>
    </View>
  );
};

export default TabButton;
