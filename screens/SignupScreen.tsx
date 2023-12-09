import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PageWrapper } from "../components";
import { BKText } from "../DCommon";

const SignupScreen = () => {
  return (
    <PageWrapper>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <BKText weight={300}>Signup Screen</BKText>
      </View>
    </PageWrapper>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
