import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthStackParamList } from "./ParamList/AuthStackParamList";
import AuthCreate from "../screens/Auth/AuthCreate";
import AuthLanding from "../screens/Auth/AuthLanding";
import AuthLoginEmail from "../screens/Auth/AuthLoginEmail";
import AuthForgotPassword from "../screens/Auth/AuthForgotPassword";
import ResetPassword from "../screens/Auth/ResetPassword";
import VerifyEmail from "../screens/Auth/VerifyEmail";

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
      initialRouteName="AuthLanding"
    >
      <Stack.Screen name="AuthCreate" component={AuthCreate} />
      <Stack.Screen name="AuthLanding" component={AuthLanding} />
      <Stack.Screen name="AuthLoginEmail" component={AuthLoginEmail} />
      <Stack.Screen name="AuthForgotPassword" component={AuthForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
    </Stack.Navigator>
  );
};

export default AuthStack;
