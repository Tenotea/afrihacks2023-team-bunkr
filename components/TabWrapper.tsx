import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { colors } from "../themes";

const TabWrapper = ({
  bottom = false,
  top = true,
  children,
  pH = 24,
}: {
  bottom?: boolean;
  top?: boolean;
  children: React.ReactElement;
  pH?: number;
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: top ? insets.top : 0,
        backgroundColor: colors.background,
        paddingBottom: bottom ? insets.bottom : 0,
        paddingHorizontal: pH,
      }}
    >
      <StatusBar animated={true} barStyle="light-content" />
      {children}
    </View>
  );
};

export default TabWrapper;

const styles = StyleSheet.create({});
