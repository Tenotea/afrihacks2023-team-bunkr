import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Dimensions } from "react-native";

const useInsets = () => {
  const { height, width } = Dimensions.get("screen");
  const insets = useSafeAreaInsets();

//   const tabBarHeight = useBottomTabBarHeight();

  return {
    top: insets.top,
    bottom: insets.bottom,
    deviceHeight: height,
    deviceWidth: width,
  };
};

export default useInsets;
