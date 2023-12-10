import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { PageWrapper, PageheaderSubheader, ScrollableWrapper } from "../components";
import BKLogo from "../DCommon/BKLogo";
import { BKButton } from "../DCommon";
import { useNavigation } from "@react-navigation/native";


const SignUpVerifyEmail = () => {
  const navigation = useNavigation();
  const goToSignUpVerifyIdentity = () => {
    // @ts-ignore
    navigation.navigate("VerifyIdentityScreen");
  };

  return (
    <PageWrapper>
      <View style={styles.verifyNumberContainer}>

        <PageheaderSubheader
          headerText="Verify Your email address"
          subHeaderText="Enter the 6-Digit code that was sent to your email address"
        />

        <BKButton
          btnText="Verify my email"
          onpress={goToSignUpVerifyIdentity}
        />
      </View>
    </PageWrapper>
  );
};

export default SignUpVerifyEmail;

const styles = StyleSheet.create({
  verifyNumberContainer: {
    flex: 1,
  },
});
