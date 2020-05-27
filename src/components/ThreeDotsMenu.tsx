/* eslint-disable no-unused-expressions */
import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { ScrollView } from "react-native-gesture-handler";

interface ThreeDotsMenuProps {
  onPress: () => void;
}

const styles = StyleSheet.create({
  // behind of modal
  rbSheetWrapper: {},
  // background of modal
  rbSheetContainer: {
    // paddingTop: 20
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  rbSheetDragIcon: {
    backgroundColor: "black"
  }
});

const ThreeDotsMenu: React.FC<ThreeDotsMenuProps> = ({ onPress }) => {
  const rbSheet = useRef();

  return (
    <>
      <TouchableOpacity
        hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
        onPress={() => rbSheet.current?.open()}
        style={{
          flexDirection: "row",
          height: 30,
          width: 30,
          marginTop: 25
        }}
      >
        <View
          style={{
            height: 5,
            width: 5,
            borderRadius: 2.5,
            backgroundColor: "#000"
          }}
        />
        <View
          style={{
            height: 5,
            width: 5,
            borderRadius: 2.5,
            backgroundColor: "#000",
            marginHorizontal: 2
          }}
        />
        <View
          style={{
            height: 5,
            width: 5,
            borderRadius: 2.5,
            backgroundColor: "#000"
          }}
        />
      </TouchableOpacity>

      <RBSheet
        ref={rbSheet}
        height={300}
        animationType="fade"
        closeOnDragDown
        customStyles={{
          container: styles.rbSheetContainer,
          wrapper: styles.rbSheetWrapper,
          draggableIcon: styles.rbSheetDragIcon
        }}
      >
        <ScrollView>
          <TouchableOpacity
            style={{ marginHorizontal: 10, flex: 1 }}
            onPress={() => {
              rbSheet.current?.close();
              onPress();
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Find Friends
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </RBSheet>
    </>
  );
};

export default ThreeDotsMenu;
