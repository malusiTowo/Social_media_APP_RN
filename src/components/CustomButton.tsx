import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";

import Theme from "../Theme/Theme";

const styles = StyleSheet.create({
  inputWrapper: {
    display: "flex",
    alignItems: "center"
  },
  nextBtn: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center"
  },
  nextBtnText: {
    // ...Theme.typography.heading3,
    fontWeight: "bold",
    minHeight: 20
  }
});

interface CustomButtonProps {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  borderWidth: number;
  onClick: () => void;
  icon?: JSX.Element;
  borderRadius: number;
  height: number;
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  backgroundColor,
  textColor,
  borderColor,
  borderWidth,
  onClick,
  icon,
  text,
  borderRadius,
  height
}) => {
  return (
    <View style={styles.inputWrapper}>
      <Button
        style={[
          styles.nextBtn,
          { backgroundColor, borderRadius, height, borderWidth, borderColor }
        ]}
        iconLeft={icon !== undefined}
        onPress={onClick}
      >
        {icon}
        <Text
          style={[
            styles.nextBtnText,
            { color: textColor },
            !!icon && { paddingLeft: 10 }
          ]}
        >
          {text}
        </Text>
      </Button>
    </View>
  );
};

export default CustomButton;
