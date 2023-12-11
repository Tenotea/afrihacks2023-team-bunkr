import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  PageWrapper,
  PageheaderSubheader,
  ScrollableWrapper,
} from "../components";
import BKLogo from "../DCommon/BKLogo";
import { BKButton, BKInput, BKText } from "../DCommon";
import { useNavigation } from "@react-navigation/native";

const SignUpVerifyNumberScreen = () => {
  const navigation = useNavigation();
  const goToVerifyEmailScreen = () => {
    // @ts-ignore
    navigation.navigate("VerifyEmailScreen");
  };
  return (
    <PageWrapper>
      <View style={styles.verifyNumberContainer}>
        <PageheaderSubheader
          headerText="Verify Your phone number"
          subHeaderText="Enter the 6-Digit code that was sent to your phone number"
        />

        <BKButton
          btnText="Verify my phone number"
          onpress={goToVerifyEmailScreen}
        />
      </View>
    </PageWrapper>
  );
};

export default SignUpVerifyNumberScreen;

const styles = StyleSheet.create({
  verifyNumberContainer: {
    flex: 1,
  },
});
