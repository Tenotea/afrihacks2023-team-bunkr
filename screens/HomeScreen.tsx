import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PageWrapper } from "../components";

const HomeScreen = () => {
  return (
    <PageWrapper>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>HomeScreen</Text>
      </View>
    </PageWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
