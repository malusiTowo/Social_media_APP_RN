import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { View } from "native-base";
import { ActivityIndicator } from "react-native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const App = () => {
  // ! check if user logged in
  const [user, setUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator color="black" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
