import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import Theme from "../Theme/Theme";

interface Props {
  onChange: Function;
  placeHolder: string;
  isPassword: boolean;
  inputType: string;
}

const styles = StyleSheet.create({
  inputWrapper: {
    width: "100%",
    display: "flex",
    flexShrink: 1
  },
  input: {
    ...Theme.typography.input,
    borderColor: "transparent",
    borderBottomColor: Theme.colors.grey,
    borderBottomWidth: 2,
    height: 60,
    paddingLeft: 10,
    display: "flex",
    justifyContent: "center",
    marginHorizontal: 10
  }
});

const InputText: React.FC<Props> = ({
  onChange,
  placeHolder,
  isPassword,
  inputType
}) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder={placeHolder}
        style={styles.input}
        textContentType={inputType}
        secureTextEntry={isPassword}
        onChangeText={txt => onChange(txt.trim())}
      />
    </View>
  );
};

export default InputText;
