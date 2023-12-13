import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import {
  PageWrapper,
  PageheaderSubheader,
  ScrollableWrapper,
} from "../components";
import BKLogo from "../DCommon/BKLogo";
import { BKButton } from "../DCommon";
import { useNavigation } from "@react-navigation/native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { colors } from "../themes";

const SignUpVerifyEmailScreen = () => {
  const navigation = useNavigation();
  const [otpCode, setOtpCode] = useState("");

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

        <OTPInputView
          style={{ width: "100%" }}
          pinCount={6}
          autoFocusOnLoad
          codeInputFieldStyle={{
            width: 44,
            height: 44,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#15171D",
            backgroundColor: "#0F1014",
            color: colors.blue10,
            fontSize: 14,
            fontWeight: "700",
          }}
          codeInputHighlightStyle={{}}
          onCodeFilled={(code) => setOtpCode(code)}
          keyboardAppearance="dark"
          placeholderCharacter="0"
          selectionColor={colors.blue10}
          placeholderTextColor="#313442"
        />

        <BKButton
          btnText="Verify my email"
          onpress={goToSignUpVerifyIdentity}
        />
      </View>
    </PageWrapper>
  );
};

export default SignUpVerifyEmailScreen;

const styles = StyleSheet.create({
  verifyNumberContainer: {
    flex: 1,
  },
});
