import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TabWrapper } from "../components";

const HistoryScreen = () => {
  return (
    <TabWrapper>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Account Screen</Text>
      </View>
    </TabWrapper>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({});
