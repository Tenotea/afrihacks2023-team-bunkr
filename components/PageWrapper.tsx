import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../themes";
import { BKLogo } from "../DCommon";

const PageWrapper = ({
  children,
}: {
  bottom?: boolean;
  top?: boolean;
  children: React.ReactElement;
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 24,
      }}
    >
      <StatusBar animated={true} barStyle="light-content" />
      <BKLogo />
      <ScrollView style={{ flex: 1, paddingTop: 45 }}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default PageWrapper;

const styles = StyleSheet.create({});
