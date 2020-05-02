import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Feed from "../screens/Feed/Feed";
import FeedCardDetail from "../screens/Feed/FeedCardDetail";

const FeedStack = createStackNavigator();

const FeedsStack = () => {
  return (
    <FeedStack.Navigator headerMode="none">
      <FeedStack.Screen name="Feed" component={Feed} />
      <FeedStack.Screen name="FeedCardDetails" component={FeedCardDetail} />
    </FeedStack.Navigator>
  );
};

export default FeedsStack;
