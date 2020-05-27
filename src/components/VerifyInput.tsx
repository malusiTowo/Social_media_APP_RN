import React, { useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface VerifyInputProps {
  onChange: (val: number) => void;
  state: number;
}

const styles = StyleSheet.create({
  wrapper: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderColor: "#f0eded",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    marginTop: 35,
    width: 30,
    borderTopWidth: 3,
    borderColor: "#e3dcdc",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 30
  },
  inputFocused: {
    marginTop: 0,
    borderTopWidth: 0,
    borderColor: "transparent"
  }
});

const VerifyInput: React.FC<VerifyInputProps> = ({ onChange, state }) => {
  const inputRef = useRef<TextInput>(null);
  const [inputFocused, setInputFocused] = useState(false);

  const showInputFocused = () => {
    return state >= 0 && inputFocused;
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        ref={inputRef}
        keyboardType="numeric"
        onChangeText={text => onChange(+text)}
        style={[styles.input, showInputFocused() && styles.inputFocused]}
      />
    </View>
  );
};

export default VerifyInput;
