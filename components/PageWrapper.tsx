import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const PageWrapper = ({
  bottom = false,
  top = true,
  children,
}: {
  bottom?: boolean;
  top?: boolean;
  children: React.ReactElement;
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: top ? insets.top : 0,
        backgroundColor: "#08090D",
        paddingBottom: bottom ? insets.bottom : 0,
      }}
    >
      <StatusBar animated={true} barStyle="light-content" />
      {children}
    </View>
  );
};

export default PageWrapper;

const styles = StyleSheet.create({});
