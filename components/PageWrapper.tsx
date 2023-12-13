import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../themes";
import { BKLogo } from "../DCommon";

const PageWrapper = ({
  children,
  scroll=true
}: {
  bottom?: boolean;
  top?: boolean;
  children: React.ReactElement;
  scroll?: boolean
}) => {
  const Wrapper = scroll ? ScrollView : View;
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
      <Wrapper style={{ flex: 1, paddingTop: 45 }}>{children}</Wrapper>
    </SafeAreaView>
  );
};

export default PageWrapper;

const styles = StyleSheet.create({});
