import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TabWrapper } from "../components";

const SettingsScreen = () => {
  return (
    <TabWrapper>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Account Screen</Text>
      </View>
    </TabWrapper>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
