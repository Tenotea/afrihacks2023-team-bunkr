import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TabWrapper } from "../components";
const AnalyticsScreen = () => {
  return (
    <TabWrapper>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Account Screen</Text>
      </View>
    </TabWrapper>
  );
};

export default AnalyticsScreen;

const styles = StyleSheet.create({});
