import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TabWrapper } from "../components";

const HomeScreen = () => {
  return (
    <TabWrapper>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>HomeScreen</Text>
      </View>
    </TabWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
