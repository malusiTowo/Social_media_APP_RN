import React, { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Camera } from "expo-camera";
import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";

const useCameraToggle = (initialState: any) => {
  const [state, setState] = useState(initialState);

  const toggle = () =>
    setState(
      state === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  return [state, toggle];
};

export default function CreatePostCamera({ navigation }) {
  const [hasPermission, setHasPermission] = useState(false);
  const [type, toggleCameraType] = useCameraToggle(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const isFlashEnabled = () => flash === Camera.Constants.FlashMode.on;

  const toggleFlash = () => {
    setFlash(
      isFlashEnabled()
        ? Camera.Constants.FlashMode.off
        : Camera.Constants.FlashMode.on
    );
  };

  const handleTakePicture = async () => {
    const options = { base64: true, quality: 0.5 };
    const photo = await cameraRef.current?.takePictureAsync(options);
    console.log(photo);
    // TODO - save to mobx store
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera ref={cameraRef} style={{ flex: 1 }} type={type} flashMode={flash}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "transparent",
            marginTop: 50,
            marginLeft: 20
          }}
        >
          <Entypo name="cross" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-end" }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              marginBottom: 50
            }}
          >
            <TouchableOpacity
              style={[
                {
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "transparent",
                  alignItems: "center",
                  justifyContent: "center"
                },
                isFlashEnabled() && {
                  backgroundColor: "#fff"
                }
              ]}
              onPress={toggleFlash}
            >
              <FontAwesome
                name="bolt"
                color={isFlashEnabled() ? "#000" : "#fff"}
                size={25}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center"
              }}
              onPress={handleTakePicture}
            >
              <Feather name="camera" color="#000" size={25} />
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleCameraType}>
              <Feather name="rotate-cw" color="#fff" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </View>
  );
}
